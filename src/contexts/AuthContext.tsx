import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

/**
 * Lightweight auth context.
 *
 * In the integrated GitHub project this will be replaced by a real
 * Supabase `onAuthStateChange` listener.  For now it reads from
 * localStorage so the Login page can set a flag and the rest of
 * the app reacts accordingly.
 *
 * Keys used:
 *   lm_session   – JSON string with { user } when authenticated
 */

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  role?: "buyer" | "seller" | "admin" | "owner";
}

interface AuthContextValue {
  user: AuthUser | null;
  loading: boolean;
  /** Call after successful login / signup */
  setSession: (user: AuthUser) => void;
  /** Call on logout */
  clearSession: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const SESSION_KEY = "lm_session";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SESSION_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      localStorage.removeItem(SESSION_KEY);
    }
    setLoading(false);
  }, []);

  const setSession = (u: AuthUser) => {
    setUser(u);
    localStorage.setItem(SESSION_KEY, JSON.stringify(u));
  };

  const clearSession = () => {
    setUser(null);
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setSession,
        clearSession,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
