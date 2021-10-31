import React, { useState } from "react";
import Heading from "../../01-atoms/Heading/Heading";
import Modal from "../../01-atoms/Modal/Modal";
import Button from "../../01-atoms/Buttons/Button/Button";
import "./styles.css";
import Swal from "sweetalert2";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import Loader from "../../01-atoms/Loader/Loader";

const ModalCrearCliente = ({
  isOpen,
  onToggle,
  reloadData = () => {},
  setClientePedido = () => {},
}) => {
  const initialValues = {
    nombre: "",
    apellidos: "",
    celular: "",
  };
  const [formCliente, setFormCliente] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const crearCliente = async (setLoading, formCliente) => {
    setLoading(true);
    try {
      const response = await addDoc(collection(db, "clientes"), {
        ...formCliente,
      });
      if (response.id) {
        onToggle();
        Swal.fire({
          title: "Cliente creado exitosamente",
          icon: "success",
          timer: 2500,
        });
        reloadData();
        setClientePedido({ ...formCliente });
        setFormCliente(initialValues);
      }
      setLoading(false);
    } catch (err) {
      console.log("Error al crear el cliente: ", err);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "nombre" && e.target.value.length > 20) {
      return;
    }
    if (e.target.name === "apellidos" && e.target.value.length > 20) {
      return;
    }

    if (e.target.name === "celular" && e.target.value.length > 9) {
      return;
    }

    setFormCliente({
      ...formCliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    crearCliente(setLoading, formCliente, onToggle, setFormCliente);
  };

  return (
    <Modal {...{ isOpen, onToggle }}>
      <div className="modal-crear-cliente">
        <Heading align="center">Crear Cliente</Heading>
        <form onSubmit={handleSubmit}>
          <div className="modal-crear-cliente__form-group">
            <label htmlFor="nombre">Nombres</label>
            <input
              required
              id="nombre"
              name="nombre"
              type="text"
              value={formCliente.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="modal-crear-cliente__form-group">
            <label htmlFor="apellidos">Apellidos</label>
            <input
              required
              id="apellidos"
              name="apellidos"
              type="text"
              value={formCliente.apellidos}
              onChange={handleChange}
            />
          </div>
          <div className="modal-crear-cliente__form-group">
            <label htmlFor="celular">Celular (opcional)</label>
            <input
              id="celular"
              name="celular"
              type="text"
              value={formCliente.celular}
              onChange={handleChange}
            />
          </div>
          <div className="container-buttons">
            {loading ? (
              <Loader />
            ) : (
              <>
                <Button
                  action={() => {
                    onToggle();
                    setFormCliente(initialValues);
                  }}
                  variant="secondary"
                  size="sm"
                >
                  Cancelar
                </Button>
                <Button type="submit" size="sm">
                  Crear
                </Button>{" "}
              </>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalCrearCliente;
