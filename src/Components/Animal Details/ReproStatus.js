import React from "react";
import Table from "../Common/Table/Table";
import style from "./AnimalDetail.module.scss";

const Repro = () => {
  let cols = [
    "Code",
    "Description",
    "Sort",
    "Is Default",
    "Male Icon",
    "Female Icon",
    "Is System",
  ];
  let data = ["1", "2", "3"];
  return (
    <div>
      <button className="bt-add">Add</button>
      <Table cols={cols} data={data}></Table>
    </div>
  );
};

export default Repro;
