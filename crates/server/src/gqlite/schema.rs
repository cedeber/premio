use async_graphql::{EmptyMutation, EmptySubscription, Schema};
use sqlx::SqlitePool;

use crate::gqlite::query::Query;

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;

pub async fn build_schema() -> AppSchema {
	let pool = SqlitePool::connect("sqlite:db.sqlite").await.unwrap();

	Schema::build(Query::default(), EmptyMutation, EmptySubscription)
		.data(pool)
		.finish()
}
