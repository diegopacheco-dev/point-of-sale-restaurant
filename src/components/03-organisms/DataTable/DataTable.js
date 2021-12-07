import React from "react";
import Heading from "../../01-atoms/Heading/Heading";
import { MDBDataTableV5 } from "mdbreact";
import "./styles.css";
import Loader from "../../01-atoms/Loader/Loader";

const DataTable = ({
  title = "",
  data = [],
  loading = true,
  shadow = true,
}) => {
  return (
    <div className="data-table vertical-space-1">
      <Heading>{title}</Heading>
      {loading ? <Loader /> : null}
      {loading ? null : (
        <div className={`table__wrapper ${shadow? 'shadow': ''}`}>
          <MDBDataTableV5
          noRecordsFoundLabel="Tabla vacia"
            responsive
            striped
            hover
            data={data}
            searchTop
            searchBottom={false}
          />
        </div>
      )}
    </div>
  );
};

export default DataTable;
