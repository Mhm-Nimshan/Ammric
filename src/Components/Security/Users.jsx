import React, { useState, useEffect } from "react";
import style from "./security.module.scss";
import Table from "../Common/Table/Table";
import { onDelete, onEdit } from "../Common/Table/APIUtil.js";

const baseURL = "/api/users";
const editURl = "/security/users/edit";

const Users = ({ history }) => {
  const [users, setUsers] = useState([]);
  const [hideAudit, setHideAudit] = useState(true);
  const [filters, setFilters] = useState({ roles: "", enabled: "true" });
  const [roles, setRoles] = useState(["", "admin", "amrric", "vet"]);

  let cols = [
    "Name",
    "Email",
    "Roles",
    "Active",
    "WebPortal",
    "EditMyCouncils",
  ];
  let auditCols = [
    "Name",
    "Last Mobile Log in",
    "Last Mobile sync",
    "Last Portal log in",
  ];

  const fetchUsers = async () => {
    try {
      let res = await fetch(`${baseURL}/all`);
      res = await res.json();
      console.time("Finished in");

      if (res.error) console.error(res.error);
      else setUsers(res.data);
    } catch (error) {
      console.error(error);
    }

    console.timeLog("Finished in");
    console.timeEnd("Finished in");
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const editItem = onEdit(history, editURl);
  const deleteItem = onDelete(baseURL, fetchUsers);

  const displayData = (data) => {
    let enableFilter = filters.enabled === "true";
    let filteredUsers = data.filter((user) => user.Active === enableFilter);
    if (filters.roles)
      filteredUsers = filteredUsers.filter((user) =>
        user["Roles"]?.includes(filters.roles)
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
          {/* {" "}
          {hideAudit ? "View" : "Hide"} Audit Data */}
        </span>
        <span>
          <select
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
            value={filters.enabled}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, enabled: e.target.value }))
            }
          >
            <option value={true}> Enabled</option>
          
          </select>
        </span>
        <span>No deleted</span>
      </div>
      <Table
        onEdit={editItem}
        onDelete={deleteItem}
        cols={hideAudit ? cols : auditCols}
        data={displayData(users)}
        pk={"Username"}
      />
    </div>
  );
};

export default Users;
