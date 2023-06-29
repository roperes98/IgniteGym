import { useContext } from "react";
import { AuthContext } from "src/Contexts/AuthContext";

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}