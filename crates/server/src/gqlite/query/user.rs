use async_graphql::{Context, Object, Result};
use sqlx::{query_as, Pool, Sqlite};

use crate::gqlite::types::User;

#[derive(Default)]
pub struct UserQuery;

#[Object]
impl UserQuery {
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
