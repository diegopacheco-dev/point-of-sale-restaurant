import React, { useEffect, useState } from "react";
import Heading from "../../01-atoms/Heading/Heading";
import Modal from "../../01-atoms/Modal/Modal";
import Button from "../../01-atoms/Buttons/Button/Button";
import "./styles.css";
import Swal from "sweetalert2";
import { updateDoc, doc } from "@firebase/firestore";
import { db } from "../../../firebase/firebase";
import Loader from "../../01-atoms/Loader/Loader";

const ModalEditarCliente = ({
  isOpen,
  onToggle,
  cliente,
  reloadData = () => {},
  resetClienteModal,
}) => {
  const initialValues = {
    nombre: "",
    apellidos: "",
    celular: "",
  };
  const [formCliente, setFormCliente] = useState(initialValues);

  useEffect(() => {
    setFormCliente({
      nombre: cliente.nombre,
      apellidos: cliente.apellidos,
      celular: cliente.celular,
    });
  }, [cliente]);

  const [loading, setLoading] = useState(false);
  console.log("cliente modal ", cliente);
  console.log("form cliente ", formCliente);

  const editarCliente = async () => {
    setLoading(true);
    console.log("id cliente a editar ", cliente.id);
    try {
      await updateDoc(doc(db, "clientes", cliente?.id), formCliente);
      onToggle();
      Swal.fire({
        title: "Cliente editado exitosamente",
        icon: "success",
        timer: 2500,
      });
      reloadData();
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

  const isChangeForm = () => {
    if (
      formCliente.nombre === cliente.nombre &&
      formCliente.apellidos === cliente.apellidos &&
      formCliente.celular === cliente.celular
    ) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChangeForm()) {
      editarCliente();
    }
  };

  return (
    <Modal {...{ isOpen, onToggle }}>
      <div className="modal-editar-cliente">
        <Heading align="center">Editar Cliente</Heading>
        <form onSubmit={handleSubmit}>
          <div className="modal-editar-cliente__form-group">
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
          <div className="modal-editar-cliente__form-group">
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
          <div className="modal-editar-cliente__form-group">
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
                    resetClienteModal();
                  }}
                  variant="secondary"
                  size="sm"
                >
                  Cancelar
                </Button>
                <Button type="submit" size="sm">
                  Editar
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalEditarCliente;
