import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const List = ({ clientes = [], SetClientePedido }) => {
  return clientes.length > 0 ? (
    <ul class="list-container">
      {clientes?.map((cliente) => (
        <li
          key={cliente?.id}
          onClick={() => SetClientePedido(cliente)}
          className="list-item"
        >
          {cliente?.nombre + " " + cliente.apellidos}
        </li>
      ))}
    </ul>
  ) : null;
};

export default List;

List.propTypes = {
  clientes: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
};
