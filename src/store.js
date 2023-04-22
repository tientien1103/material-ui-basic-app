import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// fallback/init value cho context
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
    // navigate to /login
    navigate("login");
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        handleLogIn,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
