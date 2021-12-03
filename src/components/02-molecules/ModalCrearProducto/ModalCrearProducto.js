import React, { useState } from "react";
import "./styles.css";
import Modal from "../../01-atoms/Modal/Modal";
import Heading from "../../01-atoms/Heading/Heading";

const ModalCrearProducto = ({ isOpen, onToggle, reloadData = () => {} }) => {
  const initialValues = {
    nombre: "",
    precio: "",
    categoria: "",
  };
  const [formProducto, setFormProducto] = useState(initialValues);
  const [imageFile, setImageFile] = useState("");
  const [img, setImg] = useState("");

  const handleChange = (e) => {
    setFormProducto({
      ...formProducto,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImageFile = (e) => {
    setImageFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Modal isOpen={isOpen} onToggle={onToggle}>
      <div className="modal-crear-producto">
        <Heading align="center">Crear Plato</Heading>
        <form>
          <div className="modal-crear-producto__form-group">
            <label htmlFor="nombre">Nombres</label>
            <input
              required
              id="nombre"
              name="nombre"
              type="text"
              value={formProducto.nombre}
              onChange={handleChange}
            />
          </div>
          <div className="modal-crear-producto__form-group">
            <label htmlFor="precio">Precio</label>
            <input
              required
              id="precio"
              name="precio"
              type="number"
              value={formProducto.precio}
              onChange={handleChange}
            />
          </div>
          <div className="modal-crear-producto__form-group">
            <label htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              name="categoria"
              value={formProducto.categoria}
              onChange={handleChange}
            >
              <option value="">Seleccione una categoria</option>
            </select>
          </div>
          <div className="modal-crear-producto__form-group">
            <label htmlFor="image">Imagen</label>
            <input
              required
              id="image"
              name="image"
              type="file"
              onChange={handleChangeImageFile}
            />
          </div>
          <img src={img} style={{ width: "100%" }} alt="" />
        </form>
      </div>
    </Modal>
  );
};

export default ModalCrearProducto;
