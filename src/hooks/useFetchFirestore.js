import { useEffect, useState } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebase";

export const useFetchFirestore = (docsName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (docsName) => {
      setLoading(true);

      try {
        const { docs } = await getDocs(collection(db, docsName));
        if (!docs) {
          throw new Error("No se pudo obtener la informacion");
        }
        const dataDocs = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataDocs);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getData(docsName);
  }, [docsName]);

  return { data, loading, error };
};
