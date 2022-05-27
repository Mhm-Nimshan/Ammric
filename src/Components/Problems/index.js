import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Table from "../Common/Table/Table";
import { onDelete, onEdit } from "../Common/Table/APIUtil";

const editURl = "/problems/roles/edit";
const deleteURL = "/api/roles";
const Problems = ({ history }) => {
  const [Problems, setProblems] = useState([]);
  let cols = ["Code", "Description", "Sort", "Species", "Multi-tag"];

  const fetchProblems = async () => {
    try {
      let res = await fetch("/api/roles/all");
      res = await res.json();
      if (res.error) {
        console.log(res.error);
      } else {
        setProblems(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const deleteItem = onDelete(deleteURL, fetchProblems);
  const editItem = onEdit(history, editURl);

  return <div>
     <div>
      <div className="flex-between">
        
        <button
          className="bt-add"
          onClick={() =>  ("/security/roles/add")}
        >
          Add
        </button>
        <span> No deleted </span>
      </div>
    </div>
  </div>;
};

export default Problems;
