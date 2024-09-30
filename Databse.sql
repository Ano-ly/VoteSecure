-- Admin Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    password_hash TEXT NOT NULL,
)

-- Voters table

CREATE TABLE IF NOT EXISTS voters (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    voted_at TIMESTAMPTZ DEFAULT NOW(),
)