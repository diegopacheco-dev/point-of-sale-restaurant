import React, { useState } from "react";
import Heading from "../../01-atoms/Heading/Heading";
import ProductCard from "../../02-molecules/ProductCard/ProductCard";
import "./styles.css";

const ProductsContainer = ({ products = [], categoriaGlobal = "drinks" }) => {
  const [cargando] = useState(false);

  products = [
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
    {
      name: "Producto",
      img:
        "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
      price: 60,
      stock: 15,
    },
  ];

  return (
    <div className="vertical-space-2">
      <Heading>Productos</Heading>

      {!categoriaGlobal ? (
        <p>Selecciona una categoría</p>
      ) : cargando ? (
        <p>Cargando...</p>
      ) : (
        <div className="products-container">
          {products.map((product, id) => {
            return (
              <ProductCard
                key={id}
                photo={product.img}
                name={product.name}
                price={product.price}
                stock={product.stock}
                action={() => alert("añadiendo producto")}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsContainer;
