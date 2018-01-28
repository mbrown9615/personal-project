INSERT INTO users
(id, username, input, description)
VALUES
($1,$2,$3,$4)
RETURNING *;