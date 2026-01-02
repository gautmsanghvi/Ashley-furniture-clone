import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface User {
  id: string;
  email: string;
  name?: string;
}

/* =======================
   SIGN UP
======================= */
export async function signUp(
  email: string,
  password: string,
  name: string
): Promise<User> {
  if (!email || !password || !name) {
    throw new Error("All fields are required");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name }, // stored in auth.users.user_metadata
    },
  });

  if (error) {
    throw error;
  }

  if (!data.user) {
    throw new Error("Signup failed");
  }

  return {
    id: data.user.id,
    email: data.user.email!,
    name,
  };
}

/* =======================
   SIGN IN
======================= */
export async function signIn(
  email: string,
  password: string
): Promise<User> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return {
    id: data.user.id,
    email: data.user.email!,
    name: data.user.user_metadata?.name,
  };
}

/* =======================
   GET CURRENT USER
======================= */
export async function getUserProfile(): Promise<User | null> {
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return null;
  }

  return {
    id: data.user.id,
    email: data.user.email!,
    name: data.user.user_metadata?.name,
  };
}

/* =======================
   SIGN OUT
======================= */
export async function signOut() {
  await supabase.auth.signOut();
}
