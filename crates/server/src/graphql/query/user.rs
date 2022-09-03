use async_graphql::{Context, Object, Result};
use prisma_client_rust::QueryError;

use crate::{
	graphql::types::User,
	prisma::{user, PrismaClient},
};

#[derive(Default)]
pub struct UserQuery;

#[Object]
impl UserQuery {
	async fn users(&self, ctx: &Context<'_>) -> Result<Vec<User>, QueryError> {
		let db = ctx.data::<PrismaClient>().unwrap();

		Ok(db
			.user()
			.find_many(vec![])
			.exec()
			.await?
			.into_iter()
			.map(|u| u.into())
			.collect())
	}

	async fn user(&self, ctx: &Context<'_>, id: i32) -> Result<Option<User>> {
		let db = ctx.data::<PrismaClient>().unwrap();

		Ok(db
			.user()
			.find_unique(user::id::equals(id))
			.exec()
			.await?
			.map(|u| u.into()))
	}
}
