import React from "react";
import Heading from "../../01-atoms/Heading/Heading";
import Modal from "../../01-atoms/Modal/Modal";
import styles from "./styles.module.css";

const ModalDetallePedido = ({ isOpen = false, onToggle = () => {} }) => {
  return (
    <Modal isOpen={isOpen} onToggle={onToggle}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading>Detalle del Pedido</Heading>
          <Heading>Fecha</Heading>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDetallePedido;
