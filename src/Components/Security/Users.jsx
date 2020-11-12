import React, { useState } from 'react'
import style from "./security.module.scss"
import Table from "../Common/Table/Table"

const Users = ({ history }) => {
    const [hideAudit, setHideAudit] = useState(true)
    const [filters, setFilters] = useState({ roles: null, enabled: "true" })

    let cols = ["Username", "Name", "Email", "Roles", "isEnabled"]
    let auditCols = ["Username", "Name", "Last Mobile Log in", "Last Mobile sync", "Last Portal log in"]
    function onEdit() {
        let url = "/security/users/edit"
        return function (data) {
            history.push({ pathname: url, state: { ...data } })
        }
    }


    function displayData() {
        let temp;
        let enabled = filters.enabled === "true"
        temp = data.filter((item) => item["isEnabled"] === enabled)
        if (filters.roles !== null) {
            temp = temp.filter((item) => (item["Roles"].includes(filters.roles)))
        }

        return temp;
    }


    return (
        <div>
            <div className="flex-between">
                <button className="bt-add" onClick={() => history.push("/security/users/add")} > Add </button>
                <span className={style.plainBt} onClick={() => setHideAudit(!hideAudit)}> {hideAudit ? "View" : "Hide"} Audit Data</span>
                <span>
                    <select value={filters.roles} onChange={(e) => setFilters((prev) => ({ ...prev, roles: e.target.value }))}  >
                        <option value={null} > {null} </option>
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
            <Table onEdit={onEdit()} cols={hideAudit ? cols : auditCols} data={displayData()} />
        </div>
    )

}

const data = [{
    "Username": "jack", "Name": "abc", "Email": "eircliamhjx@gmaim.com", "Roles": "admin,amm",
    "isEnabled": true, "Last Mobile Log in": "12 Jun 2020, 9:25 am", "Last Mobile sync": "12 Jun 2020, 9:25 am", "Last Portal log in": "12 Jun 2020, 9:25 am"
},
{ "Username": "liu", "Name": "ddd", "Email": "ezxcliamhjx@gmaim.com", "Roles": "amm", "isEnabled": true, "Last Mobile Log in": "12 Jun 2020, 9:25 am", "Last Mobile sync": "12 Jun 2020, 9:25 am", "Last Portal log in": "12 Jun 2020, 9:25 am" },
{ "Username": "jack", "Name": "abc", "Email": "eircliamhjx@gmaim.com", "Roles": "admin,vet", "isEnabled": true, "Last Mobile Log in": "12 Jun 2020, 9:25 am", "Last Mobile sync": "12 Jun 2020, 9:25 am", "Last Portal log in": "12 Jun 2020, 9:25 am" },
{ "Username": "jack", "Name": "abc", "Email": "eircliamhjx@gmaim.com", "Roles": "admin,amm", "isEnabled": true, "Last Mobile Log in": "12 Jun 2020, 9:25 am", "Last Mobile sync": "12 Jun 2020, 9:25 am", "Last Portal log in": "12 Jun 2020, 9:25 am" },
{ "Username": "jack", "Name": "abc", "Email": "eircliamhjx@gmaim.com", "Roles": "admin,amm", "isEnabled": false, "Last Mobile Log in": "12 Jun 2020, 9:25 am", "Last Mobile sync": "12 Jun 2020, 9:25 am", "Last Portal log in": "12 Jun 2020, 9:25 am" },
]







export default Users
