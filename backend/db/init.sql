CREATE TABLE IF NOT EXISTS feedback (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  summary TEXT,
  sentiment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
