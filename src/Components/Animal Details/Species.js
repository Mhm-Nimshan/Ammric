import React from "react";
import Row from "../Common/Table/Row";
import Table from "../Common/Table/Table";

const species = () => {
  let cols = ["Code", "Description", "sort", "Is Default", "Icon", "Is Sysyem"];
  let data = ["bing", "Bong"];

  return (
    <div>
      <button className="bt-add" onClick={() => data.push("bing")}>
        Add
      </button>
      <Table cols={cols} data={data}></Table>
    </div>
  );
};

export default species;
