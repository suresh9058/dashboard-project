import { useContext } from "react";
import { Context as AuthContext } from "../context/authContext";

export default function useAuth() {
  const { userName, isLoggedIn } = useContext(AuthContext);

  return { userName, isLoggedIn };
}
