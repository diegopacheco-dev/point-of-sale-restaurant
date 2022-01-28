import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const List = ({ clientes = [], SetClientePedido, searchWord = "" }) => {
  return (
    <ul className="list-container">
      {clientes?.map((cliente) => (
        <li
          key={cliente?.id}
          onClick={() => SetClientePedido(cliente)}
          className="list-item"
        >
          {cliente?.nombre + " " + cliente.apellidos}
        </li>
      ))}
      {searchWord.length > 2 && clientes.length === 0 ? (
        <li className="list-item">Sin resultados</li>
      ) : null}
    </ul>
  );
};

export default List;

List.propTypes = {
  clientes: PropTypes.array.isRequired,
};
