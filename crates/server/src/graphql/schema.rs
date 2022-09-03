use async_graphql::{EmptyMutation, EmptySubscription, Schema};

use crate::{graphql::query::Query, prisma};

pub type AppSchema = Schema<Query, EmptyMutation, EmptySubscription>;

/// Builds the GraphQL Schema, attaching the PrismaClient to the context
pub async fn build_schema() -> AppSchema {
	let client = prisma::new_client()
		.await
		.expect("Failed to create Prisma client");

	// For more information about schema data, see: https://async-graphql.github.io/async-graphql/en/context.html#schema-data
	Schema::build(Query::default(), EmptyMutation, EmptySubscription)
		.data(client)
		.finish()
}
