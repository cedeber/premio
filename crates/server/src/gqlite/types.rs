use async_graphql::SimpleObject;
use serde::Serialize;
use sqlx::FromRow;

#[derive(Debug, Clone, Serialize, SimpleObject, FromRow)]
pub struct BoardGame {
	pub id: i64,
	pub name: String,
	pub year: Option<i64>,
	pub min_players: Option<i64>,
	pub max_players: Option<i64>,
	pub playtime: Option<i64>, // minutes
}

#[derive(Debug, Clone, Serialize, SimpleObject, FromRow)]
pub struct User {
	pub id: Option<i64>,
	pub username: String,
}
