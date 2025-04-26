import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
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
        <NavLink to="login">Log out</NavLink>
      </div>
    </header>
  );
};
