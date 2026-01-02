/*
  # Fix Users Table RLS Policy for Signup

  The current INSERT policy only allows 'anon' users but the application
  is inserting from authenticated context. This migration updates the policy
  to allow both anonymous and authenticated users to create accounts.

  Changes:
  - Drop restrictive INSERT policy
  - Create new INSERT policy that allows anon, authenticated, and service role users
*/

DO $$
BEGIN
  -- Drop the old restrictive policy if it exists
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'users' 
    AND policyname = 'Anyone can create account'
  ) THEN
    DROP POLICY "Anyone can create account" ON users;
  END IF;
  
  -- Create new policy that allows everyone to sign up
  CREATE POLICY "Anyone can create account"
    ON users FOR INSERT
    TO anon, authenticated, service_role
    WITH CHECK (true);
END $$;
