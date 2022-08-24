CREATE TABLE IF NOT EXISTS users
(
    id       INTEGER PRIMARY KEY, -- auto, /!\ can be reused if previously deleted, use AUTOINCREMENT to prevent that
    username TEXT NOT NULL UNIQUE -- BGG username
);

CREATE TABLE IF NOT EXISTS boardgames_users
(
    game_id INTEGER NOT NULL,
    user_id TEXT    NOT NULL,

    PRIMARY KEY (user_id, game_id),

    FOREIGN KEY (game_id)
        REFERENCES boardgames (gameid)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (user_id)
        REFERENCES users (id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
)