import { collection, getDocs } from "@firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase";

export const useCategoriaServices = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getCategorias = async () => {
    console.log("trayendo categorias");
    setLoading(true);
    try {
      const { docs } = await getDocs(collection(db, "categorias"));
      const data = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategorias(data);
      setLoading(false);
    } catch (err) {
      console.log("Error al traer las categorias: ", err);
      setError(true);
      setLoading(false);
    }
  };

  return {
    getCategorias,
    categorias,
    loading,
  };
};
