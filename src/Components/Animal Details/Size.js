import React from "react";
import Row from "../Common/Table/Row";
import Table from "../Common/Table/Table";
import AnimalDetailRouter from "./AnimalDetailRouter";
import style from "./AnimalDetail.module.scss";

const Size = () => {
  let cols = [
    "Code",
    "Description",
    "Sort",
    "Is Default",
    "Icon",
    "Species",
    "Is System",
  ];
  let data = ["1", "2", "3"];

  return (
    <div>
      <div className={style.Child}>
        <button className="bt-add">Add</button>
        <label for="species" className={style.label}>
          Species
        </label>
        <select name="species" id="species" className={style.select}></select>
      </div>
      <Table cols={cols} data={data}></Table>
    </div>
  );
};

export default Size;
