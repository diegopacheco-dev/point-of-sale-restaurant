import React from "react";
import Heading from "../../01-atoms/Heading/Heading";
import { MDBDataTableV5 } from "mdbreact";

const DataTable = ({ title, data, loading = true }) => {
  return (
    <div className="vertical-space-1">
      {loading ? (
        <p>Cargando...</p>
      ) : data?.rows.length > 0 ? (
        <>
          <Heading>{title}</Heading>
          <MDBDataTableV5 striped hover data={data} searchTop searchBottom={false}/>
        </>
      ) : (
        <p>Tabla vacía</p>
      )}
    </div>
  );
};

export default DataTable;
