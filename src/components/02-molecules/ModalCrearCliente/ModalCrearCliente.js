import React, { useState } from "react";
import Heading from "../../01-atoms/Heading/Heading";
import Modal from "../../01-atoms/Modal/Modal";
import Button from "../../01-atoms/Buttons/Button/Button";
import "./styles.css";

const ModalCrearCliente = ({ isOpen, onToggle }) => {
  const initialValues = {
    nombre: "",
    apellidos: "",
    celular: "",
  };
  const [formCliente, setFormCliente] = useState(initialValues);

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
    alert("hola mundo");
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
              required
              id="celular"
              name="celular"
              type="text"
              value={formCliente.celular}
              onChange={handleChange}
            />
          </div>
          <div className="container-buttons">
            <Button action={onToggle} variant="secondary" size="sm">
              Cancelar
            </Button>
            <Button type="submit" size="sm">Crear</Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalCrearCliente;
