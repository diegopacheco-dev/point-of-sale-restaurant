import React, { useState } from "react";
import Heading from "../../01-atoms/Heading/Heading";
import styles from "./styles.module.css";
import Button from "../../01-atoms/Buttons/Button/Button";
import Loader from "../../01-atoms/Loader/Loader";
import ModalCrearProducto from "../../02-molecules/ModalCrearProducto/ModalCrearProducto";
import DataTable from "../../03-organisms/DataTable/DataTable";

const AdministrarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const data = {
    columns: [
      {
        label: "",
        field: "imagen",
        sort: "asc",
      },
      {
        label: "Nombre",
        field: "nombre",
        sort: "asc",
      },
      {
        label: "Categoria",
        field: "categoria",
        sort: "asc",
      },
      {
        label: "Precio",
        field: "precio",
        sort: "asc",
      },
    ],
    rows: [],
  };

  return (
    <>
      <ModalCrearProducto
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />
      <div className={styles.container}>
        <div className={styles.column1}>
          <div className={styles.header}>
            <Heading size="lg">Platos</Heading>
            <div>
              <Button action={() => setIsOpen(true)} size="md">
                Crear Plato
              </Button>
            </div>
          </div>
          <div className="body">
            <div className="data-table vertical-space-1">
              <DataTable
              shadow={false}
              data={data}
              title="Lista de platos"
              loading={loading}
            />
            </div>
          </div>
        </div>
        {/* <div className="administrar-page-template__col-2"></div> */}
      </div>
    </>
  );
};

export default AdministrarPage;
