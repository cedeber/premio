pub use boardgame::BoardGameQuery;
pub use user::UserQuery;

pub mod boardgame;
pub mod user;

// Add your other ones here to create a unified Query object
// e.x. Query(PostQuery, OtherQuery, OtherOtherQuery)
#[derive(async_graphql::MergedObject, Default)]
pub struct Query(UserQuery, BoardGameQuery);
