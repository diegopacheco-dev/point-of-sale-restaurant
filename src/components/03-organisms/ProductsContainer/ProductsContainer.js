import { collection, getDocs, query, where } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase";
import Heading from "../../01-atoms/Heading/Heading";
import ProductCard from "../../02-molecules/ProductCard/ProductCard";
import "./styles.css";

const ProductsContainer = ({ idCategoriaSeleccionada, AddItemAction }) => {
  // const products = [
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  //   {
  //     name: "Producto",
  //     img:
  //       "https://i.picsum.photos/id/755/200/200.jpg?hmac=fgsDUz8GLl3UPtHhHlMIabU9V8LhbOPCwYGzrrn6CyU",
  //     price: 60,
  //     stock: 15,
  //   },
  // ];
  const [products, setProducts] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const getProductosByIdCategoria = async () => {
      try {
        setCargando(true);
        const consulta = query(
          collection(db, "platos"),
          where("categoria_id", "==", idCategoriaSeleccionada)
        );
        const { docs } = await getDocs(consulta);
        const data = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
        setCargando(false);
      } catch (err) {
        console.log("error al consultar productos: ", err);
        setCargando(false);
      }
    };
    getProductosByIdCategoria();
  }, [idCategoriaSeleccionada]);

  console.log("products : ", products);

  return (
    <div className="vertical-space-2">
      <Heading>Productos</Heading>
      {!idCategoriaSeleccionada ? <p>Selecciona una categoria</p> : null}
      {cargando ? <p>Cargando...</p> : null}
      <div className="products-container">
        {idCategoriaSeleccionada && !cargando
          ? products.map((product) => {
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
        {idCategoriaSeleccionada && !cargando && products.length === 0 ? (
          <p>Sin productos en esta categoria</p>
        ) : null}
      </div>
    </div>
  );
};

export default ProductsContainer;
