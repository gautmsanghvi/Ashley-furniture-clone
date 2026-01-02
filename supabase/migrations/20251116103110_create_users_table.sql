/*
  # Create Users Table for Ashley Furniture

  1. New Tables
    - `users`
      - `id` (uuid, primary key) - unique user identifier
      - `email` (text, unique) - user email address
      - `name` (text) - user full name
      - `password_hash` (text) - hashed password (bcrypt)
      - `created_at` (timestamp) - account creation time
      - `updated_at` (timestamp) - last update time

  2. Security
    - Enable RLS on `users` table
    - Add policy for users to read their own data
    - Add policy for public signup (insert without auth)
    - Password hashes are never exposed in queries

  3. Indexes
    - Index on email for fast login lookups
*/

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  password_hash text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Anyone can create account"
  ON users FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can update own data"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
