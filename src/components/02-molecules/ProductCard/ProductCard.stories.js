import React from "react";
import ProductCard from "./ProductCard";

export default {
  title: "Molecules/ProductCard",
  component: ProductCard,
};

const args = {
  photo:
    "https://firebasestorage.googleapis.com/v0/b/pos-jorge-demo-portafolio.appspot.com/o/images%2Funnamed.png?alt=media&token=355e57b7-ce01-4b6a-b559-c47f02b45be6",
  name: "Suspiro a la limeña",
  price: 20,
  stock: 10,
  action:  () => alert("hola mundo"),
};

export const primary = () => <ProductCard {...args} />;
