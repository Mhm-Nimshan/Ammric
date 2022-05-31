import React, { useState, useEffect } from "react";
import style from "./security.module.scss";
import Table from "../Common/Table/Table";
import { onDelete, onEdit } from "../Common/Table/APIUtil.js";

const baseURL = "/api/users";
const editURl = "/Security/Users/Edit";

const Users = ({ history }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [inactiveUsers, setDeleted] = useState([]);
  const [hideAudit, setHideAudit] = useState(true);
  const [filters, setFilters] = useState({ roles: "", enabled: "true" });
  const [roles, setRoles] = useState(["", "admin", "amrric", "vet", "amw"]);
  const [showDeleted, setShowDeleted] = useState(false);

  const fetchUsers = async () => {
    try {
      let res = await fetch(`${baseURL}/all`);
      let deleted = await fetch(`${baseURL}/all/?active=0`);
      res = await res.json();
      deleted = await deleted.json();
      // console.log(deleted)
      console.time("Finished in");

      if (res.error) console.error(res.error);
      else if (deleted.error) console.error(deleted.error);
      else {
        setUsers(res.data);
        setDeleted(deleted.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  let cols = [
    "Name",
    "Username",
    "RoleCodes",
    "Enabled",
    "WebPortal",
    "EditMyCouncils",
  ];

  let auditCols = [
    "Name",
    "LastMobileLogIn",
    "LastMobileSync",
    "LastPortalLogIn",
  ];

  const editItem = onEdit(history, editURl);
  const deleteItem = onDelete(baseURL, fetchUsers);

  // const dipalyAllData = (data) => {
  //   let allData = users;
  // }

  const displayData = (data) => {
    let filteredUsers;
    let activeFilter = true;

    //check whether the All button is clicked
    if (filters.enabled === "All") {
      /*  checking whether the View deleted Button is pressed.if the view delete button is
     pressed, copy every Inactive users to the filteredUsers Variable. else copy all the Active users to the 
     filtered users variable */
      if (showDeleted) {
        filteredUsers = data.filter((item) => item.Active === false);
      } else if (!showDeleted) {
        filteredUsers = data.filter((item) => item.Active === activeFilter);
      }

      //check whether the Enable button is clicked
    } else if (filters.enabled === "true") {
      /*  checking whether the View deleted Button is pressed.if the view delete button is
     pressed, copy every Inactive users to the filteredUsers Variable. else copy all the Active & Enabled users to the 
     filtered users variable */
      if (showDeleted) {
        filteredUsers = data.filter((item) => item.Active === false);
      } else if (!showDeleted) {
        let enableFilter = filters.enabled === "true";
        filteredUsers = data.filter(
          (item) =>
            item.Active === activeFilter &&
            data.filter((item) => item.Enabled === enableFilter)
        );
      }
      //check whether the Disabled button is clicked
    } else if (filters.enabled === "false") {
      /*  checking whether the View deleted Button is pressed.if the view delete button is
     pressed, copy every Inactive users to the filteredUsers Variable. else copy all the Active & Disabled users to the 
     filtered users variable */
      if (showDeleted) {
        filteredUsers = data.filter((item) => item.Active === false);
      } else if (!showDeleted) {
        let disableFilter = filters.enabled === "false";

        filteredUsers = data.filter(
          (item) =>
            item.Active === activeFilter && item.Enabled === !disableFilter
        );
      }
    }

    if (filters.roles)
      filteredUsers = filteredUsers.filter((item) =>
        item["RoleCodes"]?.includes(filters.roles)
      );
    return filteredUsers;
  };

  return (
    <div>
      <div className="flex-between">
        <button
          className="bt-add"
          onClick={() => history.push("/security/users/add")}
        >
          {" "}
          Add{" "}
        </button>
        <span
          className={style.plainBt}
          onClick={() => setHideAudit(!hideAudit)}
        >
          {" "}
          {hideAudit ? "View" : "Hide"} Audit Data
        </span>
        <span className={style.select}>
          <select
            className={style.selector1}
            value={filters.roles}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, roles: e.target.value }))
            }
          >
            {roles.map((item) => (
              <option key={item} value={item}>
                {" "}
                {item}{" "}
              </option>
            ))}
          </select>
          <select
            className={style.selector2}
            value={filters.enabled}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, enabled: e.target.value }))
            }
          >
            <option value={"All"}>All</option>
            <option value={true}> Enabled</option>
            <option value={false}> Disabled</option>
          </select>
        </span>
        <span
          onClick={() => setShowDeleted(!showDeleted)}
          className={style.plainBt}
        >
          {" "}
          {!showDeleted ? "View" : "Hide"} deleted
        </span>
      </div>
      <Table
        onEdit={editItem}
        onDelete={deleteItem}
        cols={hideAudit ? cols : auditCols}
        data={!showDeleted ? displayData(users) : displayData(inactiveUsers)}
        pk={"Username"}
      />
    </div>
  );
};

export default Users;
