import React from "react";
import Row from "../Common/Table/Row";
import Table from "../Common/Table/Table";

const Gender = () => {
  let cols = ["Code", "Description", "Sort", "Is Default", "Icon", "Is System"];
  let data = ["1", "2", "3"];

  return (
    <div>
      <button className="bt-add">Add</button>
      <Table cols={cols} data={data} pk={"Code"}></Table>
    </div>
  );
};

export default Gender;
