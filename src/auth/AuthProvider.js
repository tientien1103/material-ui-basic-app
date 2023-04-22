import React, { useState } from "react";
import auth from "./auth";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let signin = (newUser, callback) => {
    return auth.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return auth.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
