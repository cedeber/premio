use async_graphql::SimpleObject;
use serde::Serialize;
use sqlx::{query, query_as, FromRow, Pool, Sqlite};
use tracing::{error, info};

use crate::gqlite::types::BoardGame;

// Fetch the list of games for a specific user from BGG.
// Also parse the XML and return a list of BoardGames.
pub async fn fetch_collection(username: &str) -> Result<Vec<BoardGame>, String> {
	let mut games: Vec<BoardGame> = Vec::new();

	info!("Will fetch the games.");

	// Fetch the BGG API ans save the XML as text.
	let resp = reqwest::get(format!(
		"https://boardgamegeek.com/xmlapi/collection/{}",
		username
	))
	.await;

	let resp = match resp {
		Ok(r) => r,
		_ => {
			error!("Request to BGG failed.");
			return Err("Request to BGG failed.".to_string());
		}
	};

	let resp = resp.text().await; // parsing to text should be fine.

	let resp = match resp {
		Ok(resp) => resp,
		_ => {
			error!("Parsing the BGG answer to Text failed.");
			return Err("Parsing the BGG answer to Text failed.".to_string());
		}
	};

	// Parse the XML.
	let doc = match roxmltree::Document::parse(&resp) {
		Ok(doc) => doc,
		Err(_) => {
			error!("Parsing to XML failed.");
			return Err("Parsing to XML failed.".to_string());
		}
	};

	// Check if the returned XML does not contain <message>
	if doc.root_element().has_tag_name("message") {
		let message = doc.root_element().text().unwrap();
		info!("{}", message.trim());
		return Ok(vec![]);
	}

	// Check if the returned XML does not contain <errors><error><message>
	if doc.root_element().has_tag_name("errors") {
		let message = doc
			.root_element() // <errors>
			.first_element_child() // <error>
			.unwrap()
			.first_element_child() // <message>
			.unwrap()
			.text()
			.unwrap();
		error!("Error from BGG: {}", message.trim());
		return Ok(vec![]);
	}

	info!("Will dive in the BGG XML.");

	// Go trough the XML Nodes and extract useful information.
	// We use unwrap because we believe the XML API is stable and trustable.
	// Crashing the application here means that the API changed anyway.
	for node in
		// If I own the game
		doc
			.descendants()
			.filter(|n| n.has_tag_name("item"))
			.filter(|n| n.attribute("subtype") == Some("boardgame"))
			.filter(|n| {
				n.descendants()
					.find(|n| n.has_tag_name("status"))
					.unwrap()
					.attribute("own") == Some("1")
			}) {
		let id = node.attribute("objectid").unwrap();
		let mut children = node.children();
		let name = children.find(|n| n.has_tag_name("name"));
		let year = children.find(|n| n.has_tag_name("yearpublished"));
		let stats = children.find(|n| n.has_tag_name("stats"));

		// Default values
		let mut playtime = Some(0);
		let mut min_players = Some(0);
		let mut max_players = Some(0);

		if let Some(stats) = stats {
			playtime = stats
				.attribute("playingtime")
				.map(|time| time.parse::<i64>().unwrap_or_default());
			min_players = stats
				.attribute("minplayers")
				.map(|minplayers| minplayers.parse::<i64>().unwrap_or_default());
			max_players = stats
				.attribute("maxplayers")
				.map(|maxplayers| maxplayers.parse::<i64>().unwrap_or_default());
		}

		// If the game has a name, extract data and add it to the games list.
		if let Some(name) = name {
			let name = name.text().unwrap();
			let year = year.map(|year| year.text().unwrap().parse::<i64>().unwrap_or_default());

			games.push(BoardGame {
				id: id.parse::<i64>().unwrap_or_default(),
				name: String::from(name),
				year,
				playtime,
				min_players,
				max_players,
			});
		}
	}

	// return the games list
	Ok(games)
}

// Save to SQLite DB
pub async fn db(
	username: &str,
	games: &[BoardGame],
	pool: &Pool<Sqlite>,
) -> Result<(), sqlx::Error> {
	#[derive(Debug, Clone, Serialize, SimpleObject, FromRow)]
	pub struct User {
		pub id: Option<i64>,
	}

	// language=SQLite
	let _ = query("INSERT OR IGNORE INTO users (username) VALUES ($1)")
		.bind(username)
		.execute(pool)
		.await?;

	// language=SQLite
	let user = query_as::<_, User>("SELECT id FROM users WHERE username IS $1")
		.bind(username)
		.fetch_one(pool)
		.await?;

	let user = user.id.unwrap();

	for game in games {
		let _ = query(
			// language=SQLite
			r#"
			INSERT OR REPLACE INTO boardgames (gameid, title, published, playing_time, min_players, max_players)
			VALUES ( $1, $2, $3, $4, $5, $6 );
			INSERT OR IGNORE INTO boardgames_users (game_id, user_id) VALUES ($1, $7);
		"#,
		)
		.bind(&game.id)
		.bind(&game.name)
		.bind(&game.year)
		.bind(&game.playtime)
		.bind(&game.min_players)
		.bind(&game.max_players)
		.bind(&user)
		.execute(pool)
		.await?;
	}

	Ok(())
}
