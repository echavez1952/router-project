import React from "react";
import { getProducts } from "../helpers/getProducts";
import { ProductCard } from "../components/ProductCard";

export const Shoes = () => {

  const productos = getProducts('shoes');


  return (
    <div style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
      {productos.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
};
