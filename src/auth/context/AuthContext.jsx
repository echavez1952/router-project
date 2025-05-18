import React, { createContext, useState } from "react";

// const usuario = {username:"edwin", password:"Echavez123", role:"user"}
const USERS = [
  { username: "admin", password: "1234567a", role: "admin" },
  { username: "sebas", password: "abcdef123", role: "user" },
];

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // localStorage.setItem('user', JSON.stringify(usuario));

  const [user, setUser] = useState(() => {
    const session = localStorage.getItem("user");
    console.log(session); // {"username":"edwin","password":"Echavez123","role":"user"}
    console.log(JSON.parse(session)); // {username: 'edwin', password: 'Echavez123', role: 'user'}
    const { username, password} = JSON.parse(session)
    console.log(username); // edwin
    console.log(password); // Echavez123
    return session ? JSON.parse(session) : null;
  });

  const [users, setUsers] = useState(() => {
    const session = localStorage.getItem("users");
    console.log(session); 
    // [{"username":"admin","password":"1234567a","role":"admin"},
    // {"username":"sebas","password":"abcdef123","role":"user"},
    // {"username":"edwin","password":"Echavez123","role":"user"}]
    console.log(JSON.parse(session)); // [{…}, {…}, {…}]
    // 0: {username: 'admin', password: '1234567a', role: 'admin'}
    // 1: {username: 'sebas', password: 'abcdef123', role: 'user'}
    // 2: {username: 'edwin', password: 'Echavez123', role: 'user'}
    return session ? JSON.parse(session) : USERS;
  });

  const login = (username, password) => {
    const foundUser = users.find(
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


  const registerContext = (username, password) => {

    const userExists = users.some((u) => u.username === username);

    if (userExists) {
      return { success: false, message: "El usuario ya existe" };
    }

    const newUser = { username, password, role: "user" };
    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    return { success: true };
  };

  return (
    <AuthContext.Provider value={{user, login, logout, registerContext}}>
        {children}
    </AuthContext.Provider>
  )
};


