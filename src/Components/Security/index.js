import React from 'react'

import Table from "../Common/Table/Table"

const Roles = ({ history }) => {

    let cols = ["Role Code", "Name", "Description", "System", "Users"]

    function onEdit() {
        let url = "/security/roles/edit"
        return function (data) {
            history.push({ pathname: url, state: { ...data } })
        }
    }



    return (
        <div>
            <div className="flex-between">
                <button className="bt-add" onClick={() => history.push("/security/roles/add")} > Add </button>
                <span > No deleted  </span>

            </div>
            <Table onEdit={onEdit()} cols={cols} data={data} />
        </div>
    )
}


const data = [{ "Role Code": "Admin", "Name": "Administration", "Description": "System settings, user groups, users and permissions", "System": true, "Users": 1 },
{ "Role Code": "amw", "Name": "Animal Management Worker", "Description": "Records some treatments, animal welfare data, registrations, etc.", "System": "", "Users": 0 }
]

export default Roles
