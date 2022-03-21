import { collection, getDocs, query, where } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import Heading from "../../01-atoms/Heading/Heading";
import Loader from "../../01-atoms/Loader/Loader";
import ProductCard from "../../02-molecules/ProductCard/ProductCard";
import "./styles.css";

const ProductsContainer = ({
  idCategoriaSeleccionada,
  AddItemAction,
  loading,
  productos,
}) => {
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    setProductosFiltrados(
      productos.filter(
        (producto) => producto.categoria.id === idCategoriaSeleccionada
      )
    );
  }, [idCategoriaSeleccionada]);

  return (
    <div className="vertical-space-2">
      <Heading>Productos</Heading>
      {!idCategoriaSeleccionada && !loading ? (
        <p>Selecciona una categoria</p>
      ) : null}
      {loading ? <Loader /> : null}
      <div className="products-container">
        {idCategoriaSeleccionada && !loading
          ? productosFiltrados.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  photo={product.imagen}
                  name={product.nombre}
                  price={product.precio}
                  stock={product.stock}
                  action={() => AddItemAction(product)}
                />
              );
            })
          : null}
        {idCategoriaSeleccionada &&
        !loading &&
        productosFiltrados.length === 0 ? (
          <p>Sin productos en esta categoria</p>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsContainer;
