import React, { useEffect, useState } from "react";
// import AddRoles from "./Security/AddRoles";
import Table from "../Common/Table/Table";
import { onDelete, onEdit } from "../Common/Table/APIUtil";

const editURl = "/security/roles/edit";
const deleteURL = "/api/roles";
const Roles = ({ history }) => {
  const [Roles, setRoles] = useState([]);
  let cols = ["RoleCode", "RoleName", "Description", "System", "UserCount"];

  const fetchRoles = async () => {
    try {
      let res = await fetch("/api/roles/all");
      res = await res.json();
      if (res.error) {
        console.log(res.error);
      } else {
        setRoles(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const deleteItem = onDelete(deleteURL, fetchRoles);
  const editItem = onEdit(history, editURl);

  return (
    <div>
      <div className="flex-between">
        <button
          className="bt-add"
          onClick={() => history.push("/security/roles/add")}
        >
          Add
        </button>
        <span> No deleted </span>
      </div>
      <Table
        onEdit={editItem}
        cols={cols}
        data={Roles}
        onDelete={deleteItem}
        pk={"RoleCode"}
      />
    </div>
  );
};

export default Roles;