import { createContext, useState } from "react";

export const Context = createContext();

export function Provider({ children }) {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const updateUserName = (value) => setUserName(value);

  const updateLoggedIn = (value) => setIsLoggedIn(value);

  const handleLogout = () => {
    setUserName("");
    setIsLoggedIn(false);
  };

  return (
    <Context.Provider
      value={{
        userName,
        isLoggedIn,
        updateUserName,
        updateLoggedIn,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
}
