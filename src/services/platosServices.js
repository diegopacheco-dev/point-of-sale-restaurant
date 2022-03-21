import { addDoc, collection, getDocs } from "@firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "@firebase/storage";
import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/firebase";

export const usePlatosServices = () => {
  const [platos, setPlatos] = useState([]);
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [loadingGet, setLoadingGet] = useState(false);

  const getPlatos = async () => {
    setLoadingGet(true);
    try {
      console.log("********** get Platos");
      const { docs } = await getDocs(collection(db, "platos"));
      const data = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlatos(data);
      setLoadingGet(false);
    } catch (err) {
      console.log("Error al traer los platos: ", err);
      setLoadingGet(false);
    }
  };

  const createPlato = async (imgFile, objPlato) => {
    setLoadingCreate(true);
    // renombrar imagen
    const nameImage = `${uuidv4()}.${imgFile?.type.split("/")[1]}`;
    const myNewFileImg = new File([imgFile], nameImage, {
      type: imgFile?.type,
    });

    // prepara subida de imagen
    const storage = getStorage();
    const imageRef = ref(storage, `images/${nameImage}`);

    try {
      // subir imagen
      const snapshot = await uploadBytesResumable(imageRef, myNewFileImg);
      const urlImage = await getDownloadURL(snapshot.ref);

      if (!urlImage) throw new Error("Error al subir la imagen");

      // crear producto
      const docRef = await addDoc(collection(db, "platos"), {
        ...objPlato,
        imagen: urlImage,
      });

      // si el producto no se crea, eliminar imagen
      if (!docRef.id) {
        deleteObject(imageRef);
        throw new Error("Error al crear el producto");
      }

      Swal.fire({
        title: "Producto creado",
        icon: "success",
        timer: 1500,
      });
      setLoadingCreate(false);

      return { status: "ok" };
    } catch (error) {
      setLoadingCreate(false);
      Swal.fire({
        title: "Error al crear producto",
        icon: "error",
        timer: 1500,
      });
    }
  };

  return {
    createPlato,
    getPlatos,
    platos,
    loadingCreate,
    loadingGet,
  };
};
