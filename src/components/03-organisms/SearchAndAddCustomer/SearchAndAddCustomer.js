import React, { useState, useEffect } from "react";
import { db } from "../../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import List from "../../02-molecules/List/List";
import "./styles.css";

const SearchAndAddCustomer = ({ SetClientePedido, isAlert = false }) => {
  const [sugerencias, setSugerencias] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [clientes, setClientes] = useState([]);

  const handleChange = (e) => {
    // BUSCAR COINCIDENCIAS
    let result = [];
    if (e.target.value.length > 2) {
      let regex = new RegExp(`${e.target.value.trim()}`, "i");
      result = clientes.filter((cliente) =>
        regex.test(cliente.nombre + " " + cliente.apellidos)
      );
    }
    setSugerencias(result);
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    const getClientes = async () => {
      try {
        const { docs } = await getDocs(collection(db, "clientes"));
        const data = docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClientes(data);
      } catch (err) {
        console.log("Error: ", err);
      }
    };
    getClientes();
  }, []);

  return (
    <div className={`search-and-add-customer ${isAlert ? "alert" : ""}`}>
      <i className={`icon bx bx-search bx-sm`}></i>
      <input
        type="text"
        placeholder="Buscar cliente"
        value={searchWord}
        onChange={handleChange}
      />
      <ButtonIcon nameIcon="plus-circle" action={() => alert("hola mundo")} />
      <List clientes={sugerencias} SetClientePedido={SetClientePedido} />
    </div>
  );
};

export default SearchAndAddCustomer;
