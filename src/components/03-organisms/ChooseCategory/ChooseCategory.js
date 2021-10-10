import React, { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import Heading from "../../01-atoms/Heading/Heading";
import Categories from "../../02-molecules/Categories/Categories";

const ChooseCategory = ({seleccionarCategoria}) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const getCategorias = async () => {
      try {
        const { docs } = await getDocs(collection(db, "categorias"));
        const data = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCategorias(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    getCategorias();
  }, []);

  console.log(categorias);

  return (
    <div className="vertical-space-1">
      <Heading>Elige la categoría</Heading>
      <Categories categories={categorias} seleccionarCategoria={seleccionarCategoria}/>
    </div>
  );
};

export default ChooseCategory;
