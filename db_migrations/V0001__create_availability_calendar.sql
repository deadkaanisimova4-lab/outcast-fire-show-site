CREATE TABLE availability (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    show_limit INTEGER NOT NULL DEFAULT 0,
    installation_limit INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_availability_date ON availability(date);