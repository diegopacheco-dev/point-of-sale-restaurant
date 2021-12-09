import React, { useEffect, useState } from "react";
import Heading from "../../01-atoms/Heading/Heading";
import styles from "./styles.module.css";
import Button from "../../01-atoms/Buttons/Button/Button";
import Loader from "../../01-atoms/Loader/Loader";
import ModalCrearProducto from "../../02-molecules/ModalCrearProducto/ModalCrearProducto";
import DataTable from "../../03-organisms/DataTable/DataTable";
import { usePlatosServices } from "../../../services/platosServices";
import Img from "../../01-atoms/Img/Img";

const ImgPlato = ({ src }) => {
  return (
    <div className={styles.imgPlato}>
      <Img src={src} alt="plato" />
    </div>
  );
};

const AdministrarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getPlatos, platos, loadingGet } = usePlatosServices();

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

  const armarFilas = (platos) => {
    const filas = platos.map((plato) => ({
      imagen: <ImgPlato src={plato.imagen} />,
      nombre: plato.nombre,
      categoria: plato.categoria.id,
      precio: plato.precio,
    }));

    return { ...data, rows: filas };
  };

  const refetchTablaPlatos = () => {
    getPlatos();
  };

  useEffect(() => {
    getPlatos();
  }, []);

  return (
    <>
      <ModalCrearProducto
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
        reloadData={refetchTablaPlatos}
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
            <div className={styles.dataTable}>
              <DataTable
                shadow={false}
                data={armarFilas(platos)}
                title="Lista de platos"
                loading={loadingGet}
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
