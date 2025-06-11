import { createContext, useState, useContext, useEffect } from "react";

//Supabase Auth Context
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [session, setSession] = useState(undefined);

  //Signup function
  const signUpNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error("Error signing up:", error.message);
      return { success: false, error };
    }
    return { success: true, data };
  };

  // Sign In
  const signInUser = async (email, password) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });

        if (error) {
          console.error("Error signing in:", error);
          return { success: false, error: error.message };
        }
        console.log("Sign in successful:", data);
        return { success: true, data };
    } catch (error) {
        console.error("Error signing in:", error);
    }
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  },[]);

  //Sign out
  const signOut = () => {
    const { error } = supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      setSession(null);
    }
  }

  return (
    <AuthContext.Provider value={{ session, signUpNewUser, signInUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const userAuth = () => {
  return useContext(AuthContext);
};
