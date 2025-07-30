-- Schema for a gamified task app: users complete tasks and unlock characters using coins. 
-- Each user has a selected character and can own many through the user_characters join table. 
-- Tasks are linked to users, and characters are shared across users.

CREATE TABLE characters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  character_name TEXT NOT NULL,
  character_image TEXT,
  cost INTEGER NOT NULL
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  dark_mode BOOLEAN DEFAULT false,
  coins INTEGER DEFAULT 0,
  character_choice UUID NOT NULL REFERENCES characters(id)
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  task_text TEXT NOT NULL,
  completed_status BOOLEAN DEFAULT false,
  deadline TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE user_characters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  character_id UUID NOT NULL REFERENCES characters(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT false
);
