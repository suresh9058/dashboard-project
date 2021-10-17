import useAuth from "../hooks/useAuth";
// HOC to say 
export function WithAuth(Component, preAuth=false) {
  const { isLoggedIn } = useAuth();
  // sending preAuth true for prenavbar 
  // isloggedin preauth result (XOR)
 //  f f empty f
 //  f t component t
 //  t f component t
 //  t t empty f 
  if  (isLoggedIn ^ preAuth) return () =><Component />;
  return () =><></>;
}
