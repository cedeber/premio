use async_graphql::{Context, Object, Result};
use sqlx::{query_as, Pool, Sqlite};

use crate::gqlite::types::BoardGame;
use crate::gqlite::utils::{db, fetch_collection};

#[derive(Default)]
pub struct BoardGameQuery;

#[Object]
impl BoardGameQuery {
	async fn games(
		&self,
		ctx: &Context<'_>,
		username: Option<String>,
	) -> Result<Vec<BoardGame>, String> {
		let pool = match ctx.data::<Pool<Sqlite>>() {
			Ok(pool) => pool,
			_ => return Err(String::from("Cannot access the Database.")),
		};

		match username {
			None => match query_as::<_, BoardGame>(
				// language=SQLite
				r#"
					SELECT gameid as id, title as name, published as year, playing_time as playtime, min_players, max_players
					FROM boardgames ORDER BY title
				"#)
				.fetch_all(pool)
				.await {
				Ok(games) => Ok(games),
				_ => Err(String::from("Error querying the games"))
			},
			Some(username) => {
				// Fetch and save the games into the db.
				let games = fetch_collection(&username).await;
				if let Ok(games) = games {
					db(&username, &games, &pool).await.expect("Could not save in the DB");
				}

				match query_as::<_, BoardGame>(
					// language=SQLite
					r#"
					SELECT gameid as id, title as name, published as year, playing_time as playtime, min_players, max_players
					FROM boardgames
					INNER JOIN boardgames_users on boardgames_users.game_id = boardgames.gameid
					INNER JOIN users on users.id = boardgames_users.user_id
					WHERE username = $1
					ORDER BY title
				"#)
					.bind(username)
					.fetch_all(pool)
					.await {
					Ok(games) => Ok(games),
					_ => Err(String::from("Error getting the games list"))
				}
			}
		}
	}
}
