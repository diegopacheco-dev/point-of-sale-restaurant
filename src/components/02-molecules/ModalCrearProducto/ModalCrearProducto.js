import React, { useEffect, useState } from "react";
import "./styles.css";
import Modal from "../../01-atoms/Modal/Modal";
import Heading from "../../01-atoms/Heading/Heading";
import Loader from "../../01-atoms/Loader/Loader";
import Button from "../../01-atoms/Buttons/Button/Button";
import { useCategoriaServices } from "../../../services/categoriasServices";
import { usePlatosServices } from "../../../services/platosServices";
import { formCrearPlatoValidation } from "../../../validations/formCrearPlatoValidation";
import Img from "../../01-atoms/Img/Img";

const ModalCrearProducto = ({ isOpen, onToggle, reloadData = () => {} }) => {
  const initialValues = {
    nombre: "",
    precio: "",
    categoria: "",
  };
  const [errors, setErrors] = useState({ ...initialValues, imageFile: "" });
  const [formProducto, setFormProducto] = useState(initialValues);
  const [imageFile, setImageFile] = useState("");
  const [img, setImg] = useState("");

  const {
    getCategorias,
    categorias,
    loading: loadingCategorias,
  } = useCategoriaServices();

  const { createPlato, loadingCreate } = usePlatosServices();

  const handleChange = (e) => {
    setFormProducto({
      ...formProducto,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeImageFile = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImg(URL.createObjectURL(e.target.files[0]));
    } else {
      setImg("");
      setImageFile("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // validamos que el formulario y la imagen esten llenos
    const { errors: errorsMessage, formIsValid } = formCrearPlatoValidation({
      ...formProducto,
      imagen: imageFile,
    });
    if (!formIsValid) {
      setErrors(errorsMessage);
      return;
    }

    // obtenemos el obj categoria por su id
    const objCategoria = {
      ...categorias.find(
        (categoria) => categoria.id === formProducto.categoria
      ),
    };
    createPlato(imageFile, { ...formProducto, categoria: objCategoria }).then(
      (rpta) => {
        if (rpta.status === "ok") {
          onToggle();
          reloadData();
        }
      }
    );
  };

  useEffect(() => {
    if (isOpen) {
      setFormProducto(initialValues);
      setImageFile("");
      setImg("");
      getCategorias();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onToggle={onToggle}>
      <div className="modal-crear-producto">
        <Heading align="center">Crear Plato</Heading>
        <form onSubmit={handleSubmit}>
          <div className="modal-crear-producto__form-group">
            <label htmlFor="nombre">Nombres</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formProducto.nombre}
              onChange={handleChange}
            />
            {errors.nombre && (
              <p className="modal-crear-producto__form-group__error">
                {errors.nombre}
              </p>
            )}
          </div>
          <div className="modal-crear-producto__form-group">
            <label htmlFor="precio">Precio</label>
            <input
              id="precio"
              name="precio"
              type="number"
              value={formProducto.precio}
              onChange={handleChange}
            />
            {errors.precio && (
              <p className="modal-crear-producto__form-group__error">
                {errors.precio}
              </p>
            )}
          </div>
          <div className="modal-crear-producto__form-group">
            <label htmlFor="categoria">Categoria</label>
            <select
              id="categoria"
              name="categoria"
              value={formProducto.categoria}
              onChange={handleChange}
            >
              <option disabled value="">
                Seleccione una categoria
              </option>
              {categorias?.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
            {errors.categoria && (
              <p className="modal-crear-producto__form-group__error">
                {errors.categoria}
              </p>
            )}
          </div>
          <div className="modal-crear-producto__form-group">
            <label htmlFor="image">Imagen</label>
            <input
              id="image"
              name="image"
              type="file"
              onChange={handleChangeImageFile}
            />
            {errors.imagen && (
              <p className="modal-crear-producto__form-group__error">
                {errors.imagen}
              </p>
            )}
          </div>
          {/* VISUALIZADOR DE IMAGEN ===> */}
          {imageFile && (
            <div className="modal-crear-producto__img">
              <Img src={img} />
            </div>
          )}

          {/* <===  */}
          <div className="container-buttons">
            {loadingCategorias || loadingCreate ? (
              <Loader />
            ) : (
              <>
                <Button
                  type="button"
                  action={() => {
                    onToggle();
                    setImageFile("");
                    setImg("");
                    // setFormCliente(initialValues);
                    // resetClienteModal();
                  }}
                  variant="secondary"
                  size="sm"
                >
                  Cancelar
                </Button>
                <Button type="submit" size="sm">
                  Crear
                </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalCrearProducto;
