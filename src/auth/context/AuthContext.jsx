import React, { createContext, useState } from "react";

const USERS = [
  { username: "admin", password: "1234567a", role: "admin" },
  { username: "sebas", password: "abcdef123", role: "user" },
];

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const session = localStorage.getItem("user");
    return session ? JSON.parse(session) : null;
  });

  const login = (username, password) => {
    const foundUser = USERS.find(
        (u) => u.username === username && u.password === password
    );

    console.log(foundUser);

    if(foundUser){
        setUser(foundUser);
        localStorage.setItem('user' , JSON.stringify(foundUser));

        return true
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
};


