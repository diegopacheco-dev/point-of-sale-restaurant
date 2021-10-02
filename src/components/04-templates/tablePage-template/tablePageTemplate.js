import "./styles.css";

const TablePageTemplate = () => {
  return (
    <div className="table-page-template">
      <div className="table-page-template__col-1">
        <div className="header">
          <div style={{ height: "10rem", backgroundColor: "lightgray" }}>
            <h2>Header</h2>
          </div>
        </div>
        <div className="body">
          <div style={{ height: "25rem", backgroundColor: "lightgray" }}>
            <h2>Body</h2>
          </div>
        </div>
      </div>
      <div className="table-page-template__col-2">
        <div style={{ height: "45rem", backgroundColor: "lightgray" }}>
          <h2>Aside</h2>
        </div>
      </div>
    </div>
  );
};

export default TablePageTemplate;
