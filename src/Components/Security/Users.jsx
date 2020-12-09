import React, { useState, useEffect } from 'react'
import style from "./security.module.scss"
import Table from "../Common/Table/Table"
import { onDelete, onEdit } from "../Common/Table/APIUtil.js"


const editURl = "/security/users/edit";
const deleteURL = "/api/users"

const Users = ({ history }) => {
    const [users, setUsers] = useState([])
    const [hideAudit, setHideAudit] = useState(true)
    const [filters, setFilters] = useState({ roles: "", enabled: "true" })

    const fetchUsers = async () => {
        try {
            let res = await fetch("/api/users/all")
            res = await res.json();
            if (res.error) {
                console.log(res.error)
            } else {
                setUsers(res.data)
            }

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchUsers()
    }, [])

    let cols = ["Username", "Name", "Email", "RoleCodes", "Active"]
    let auditCols = ["Username", "Name", "Last Mobile Log in", "Last Mobile sync", "Last Portal log in"]

    const editItem = onEdit(history, editURl)
    const deleteItem = onDelete(deleteURL, fetchUsers)


    function displayData(data) {
        console.log(data)
        let enabled = filters.enabled === "true"
        let temp = data.filter((item) => item["Active"] === enabled)
        console.log(temp)
        if (filters.roles !== null) {
            temp = temp.filter((item) => (item["RoleCodes"].includes(filters.roles)))
        }
        console.log(temp)
        return temp;
    }


    return (
        <div>
            <div className="flex-between">
                <button className="bt-add" onClick={() => history.push("/security/users/add")} > Add </button>
                <span className={style.plainBt} onClick={() => setHideAudit(!hideAudit)}> {hideAudit ? "View" : "Hide"} Audit Data</span>
                <span>
                    <select value={filters.roles} onChange={(e) => setFilters((prev) => ({ ...prev, roles: e.target.value }))}  >
                        <option value={""} > {null} </option>
                        <option value="admin" > admin</option>
                        <option value="vet"> vet</option>
                        <option value="amrric"> amrric</option>
                    </select>
                    <select
                        value={filters.enabled}
                        onChange={(e) => setFilters((prev) => ({ ...prev, enabled: e.target.value }))}

                    >
                        <option value={true} > Enabled</option>
                        <option value={false}> Disabled</option>
                    </select>

                </span>

                <span > No deleted  </span>

            </div>
            <Table onEdit={editItem} onDelete={deleteItem} cols={hideAudit ? cols : auditCols} data={displayData(users)} />
        </div>
    )

}







export default Users
