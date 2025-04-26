import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/hooks/useAuth";

export const Header = () => {

  const {logout} = useAuth();

  const onHandleLogOut = () => {
    logout();
  }

  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "#eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>🛍️ Mi Tienda</h1>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/clothes">Ropa</NavLink>
        <NavLink to="/shoes">Zapatos</NavLink>
        <NavLink to="/accesories">Accesorios</NavLink>
        <NavLink to="/about">Acerca de nosotros</NavLink>
      </nav>

      <div>
        <NavLink to="/login" onClick={onHandleLogOut} replace={true}>Log out</NavLink>
      </div>
    </header>
  );
};
