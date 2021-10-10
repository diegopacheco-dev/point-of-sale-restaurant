import React, { useState } from "react";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";
import "./styles.css";
import PropTypes from "prop-types";

const Categories = ({ categories = [], seleccionarCategoria = () => {} }) => {
  const [idCategoriaActiva, setIdCategoriaActiva] = useState("");

  return (
    <div className="categories-container">
      {categories.map((cat) => (
        <ButtonWithIcon
          key={cat.id}
          type="categoria"
          onClick={() => {
            seleccionarCategoria(cat.id);
            setIdCategoriaActiva(cat.id);
          }}
          id={cat.id}
          idSelected={idCategoriaActiva}
          nameIcon={cat.boxIconName}
          sizeIcon="md"
        >
          {cat.nombre}
        </ButtonWithIcon>
      ))}
    </div>
  );
};

export default Categories;

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      boxIconName: PropTypes.string.isRequired,
    })
  ),
};
