import React from "react";
import Table from "../Common/Table/Table";

const index = () => {
  let cols = ["Program Name", "Start Date", "End  date", "Activites"];
  let data = ["bing", "Bong", "bing", "Bong"];
  return (
    <div>
      <button className="bt-add">Add</button>
      <Table cols={cols} data={data}></Table>
    </div>
  );
};

export default index;
