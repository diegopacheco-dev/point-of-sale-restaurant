import React from "react";
import Heading from "../../01-atoms/Heading/Heading";
import { MDBDataTableV5 } from "mdbreact";
import "./styles.css";
import Loader from "../../01-atoms/Loader/Loader";

const DataTable = ({
  title = "",
  data = [],
  loading = true,
}) => {
  return (
    <div className="data-table vertical-space-1">
      <Heading>{title}</Heading>
      {loading ? <Loader /> : null}
      {loading ? null : (
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
      )}
      {!loading && data?.rows?.length === 0 ? <p>Tabla vacía</p> : null}
    </div>
  );
};

export default DataTable;
