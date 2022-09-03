use async_graphql::SimpleObject;
use serde::Serialize;

use crate::prisma::user;

#[derive(Debug, Clone, Serialize, SimpleObject)]
pub struct User {
	pub id: i32,
	pub username: String,
}

impl Into<User> for user::Data {
	fn into(self) -> User {
		User {
			id: self.id,
			username: self.username,
		}
	}
}
