CREATE TABLE IF NOT EXISTS boardgames
(
    gameid       INTEGER PRIMARY KEY, -- BGG id
    title        TEXT NOT NULL,
    published    INTEGER,
    playing_time INTEGER,
    min_players  INTEGER,
    max_players  INTEGER
);