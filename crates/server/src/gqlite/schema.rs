use async_graphql::{Context, EmptyMutation, EmptySubscription, Object, Schema};
use sqlx::{query_as, Pool, Sqlite, SqlitePool};

use crate::gqlite::sql::{db, fetch_collection, BoardGame, User};

#[derive(Default)]
pub struct Query;

#[Object]
impl Query {
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
					db(&username, &games, &pool).await;
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

	async fn users(&self, ctx: &Context<'_>) -> Result<Vec<User>, Box<sqlx::Error>> {
		let pool = ctx.data::<Pool<Sqlite>>().unwrap();
		let users = query_as::<_, User>(
			// language=SQLite
			r#"SELECT id, username FROM users ORDER BY username"#,
		)
		.fetch_all(pool)
		.await?;

		Ok(users)
	}
}

pub type QuerySchema = Schema<Query, EmptyMutation, EmptySubscription>;

pub async fn build_schema() -> QuerySchema {
	let pool = SqlitePool::connect("sqlite:db.sqlite").await.unwrap();

	Schema::build(Query::default(), EmptyMutation, EmptySubscription)
		.data(pool)
		.finish()
}
