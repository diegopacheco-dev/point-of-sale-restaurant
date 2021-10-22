import React from "react";
import Heading from "../../01-atoms/Heading/Heading";
import { MDBDataTableV5 } from "mdbreact";
import "./styles.css";

const DataTable = ({ title = "", data = [], loading = true }) => {
  console.log("table ", data);
  return (
    <div className="data-table vertical-space-1">
      {loading ? (
        <p>Cargando...</p>
      ) : data?.rows?.length > 0 ? (
        <>
          <Heading>{title}</Heading>
          <div className="data-table__wrapper">
            <MDBDataTableV5
              responsive
              striped
              hover
              data={data}
              searchTop
              searchBottom={false}
            />
          </div>
        </>
      ) : (
        <p>Tabla vacía</p>
      )}
    </div>
  );
};

export default DataTable;
