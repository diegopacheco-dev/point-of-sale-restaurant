import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const List = ({ clientes = [], action }) => {
  clientes = [
    { name: "diego" },
    { name: "erick" },
    { name: "loan" },
    { name: "mateo" },
  ];

  return clientes.length > 0 ? (
    <ul class="list-container">
      {clientes.map((cliente, id) => (
        <li key={id} onClick={() => action()} className="list-item">
          {cliente.name}
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
