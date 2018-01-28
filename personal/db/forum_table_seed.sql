CREATE TABLE IF NOT EXISTS threads (
    id SERIAL PRIMARY KEY,
    username VARCHAR(180),
    title VARCHAR(100),
    input VARCHAR(500)
)