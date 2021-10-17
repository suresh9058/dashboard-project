import useAuth from "../hooks/useAuth";
import { Redirect } from "react-router-dom";

export function WithProtected(Component) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) return () =><Component />;
  return () =><Redirect to="/" />;
}
