import React, { useEffect, useState } from "react";
import Row from "../Common/Table/Row";
import Table from "../Common/Table/Table";

const Gender = ({ history }) => {
  let cols = ["Code", "Description", "Sort", "Is Default", "Icon", "Is System"];
  const [Gender, SetGender] = useState([]);

  const fetchGender = async (history) => {
    try {
      let res = await fetch("/api/gender");
      res = await res.json();
      if (res.error) {
        console.log(res.error);
      } else {
        SetGender(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGender();
  }, []);

  return (
    <div>
      <button className="bt-add">Add</button>
      <Table cols={cols} data={Gender} pk={"Code"}></Table>
    </div>
  );
};

export default Gender;
