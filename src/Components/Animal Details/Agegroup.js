import React from "react";
import Row from "../Common/Table/Row";
import Table from "../Common/Table/Table";
import AnimalDetailRouter from "./AnimalDetailRouter";
import style from "./AnimalDetail.module.scss";

const Agegroup = () => {
  // const fetchRoles = async () => {
  //       try {
  //           let res = await fetch("/api/roles/all")
  //           res = await res.json();
  //           if (res.error) {
  //               console.log(res.error)
  //           } else { setRoles(res.data) }

  //       } catch (error) {
  //           console.log(error)
  //       }

  //   }
  let cols = [
    "Code",
    "Description",
    "Sort",
    "Is Default",
    "From (mths)",
    "To (mths)",
    "Species",
    "Is System",
  ];
  let data = ["sample", "sample"];
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

export default Agegroup;
