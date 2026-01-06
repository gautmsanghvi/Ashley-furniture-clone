import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

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
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error || !data.user) {
    throw error || new Error("Signup failed");
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

  if (error || !data.user) {
    throw error || new Error("Login failed");
  }

  return {
    id: data.user.id,
    email: data.user.email!,
    name: data.user.user_metadata?.name,
  };
}

/* =======================
   CURRENT USER
======================= */
export async function getUserProfile(): Promise<User | null> {
  const { data } = await supabase.auth.getUser();
  if (!data.user) return null;

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

/* =======================
   AUTH STATE LISTENER
======================= */
export function onAuthChange(
  callback: (user: User | null) => void
) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    if (!session?.user) {
      callback(null);
    } else {
      callback({
        id: session.user.id,
        email: session.user.email!,
        name: session.user.user_metadata?.name,
      });
    }
  });
}
