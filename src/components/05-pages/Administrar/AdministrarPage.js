import React, { useState } from "react";
import Heading from "../../01-atoms/Heading/Heading";
import "./styles.css";
import Button from "../../01-atoms/Buttons/Button/Button";
import Loader from "../../01-atoms/Loader/Loader";
import ModalCrearProducto from "../../02-molecules/ModalCrearProducto/ModalCrearProducto";

const AdministrarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const data = [];

  return (
    <>
      <ModalCrearProducto
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />
      <div className="administrar-page-template">
        <div className="administrar-page-template__col-1">
          <div className="header">
            <Heading size="lg">Platos</Heading>
            <div>
              <Button action={() => setIsOpen(true)} size="md">
                Crear Plato
              </Button>
            </div>
          </div>
          <div className="body">
            <div className="data-table vertical-space-1">
              <Heading>Lista de Platos</Heading>
              {loading ? <Loader /> : null}
              {loading ? null : (
                <div className="data-table__wrapper">
                  <h2>table</h2>
                  <table>
                    <thead className="bg-danger">
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <td>foto</td>
                      <td>Jugo de mango</td>
                      <td>S/20.90</td>
                      <td>Editar</td>
                    </tbody>
                  </table>
                </div>
              )}
              {!loading && data?.rows?.length === 0 ? <p>Tabla vacía</p> : null}
            </div>
          </div>
        </div>
        {/* <div className="administrar-page-template__col-2"></div> */}
      </div>
    </>
  );
};

export default AdministrarPage;
