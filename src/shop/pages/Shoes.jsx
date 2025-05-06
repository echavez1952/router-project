import React from "react";
import { ProductCard } from "../components/ProductCard";
import { getProductList } from "../helpers/Products";
import { useNavigate } from "react-router-dom";

export const Shoes = () => {

  const products = getProductList();
  const accesories = products.filter((p) => p.category === "zapatos");

  const navigate = useNavigate();

  const onNavigate = (p) => {
    navigate(`/item/${p.alt}`, { state: { ...p } });
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {accesories.map((p, i) => (
        <div
          key={i}
          className="flex flex-grow basis-[300px] max-w-[300px]"
          onClick={() => onNavigate(p)}
        >
          <ProductCard {...p} />
        </div>
      ))}
    </div>
  );
};
