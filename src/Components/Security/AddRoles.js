import React, { useState } from 'react'
import CheckboxTree from 'react-checkbox-tree';
import { uuid } from "uuidv4"



import style from "./security.module.scss"
import AddOption from "./AddOption"
import { fecthApi } from "../Common/Table/APIUtil"


const nodes = [{
    value: 'Mobile Application',
    label: 'Mobile Application',
    children: [
        {
            value: '(screen) All Councils', label: '(screen) All Councils',
            children: [{ value: "(button) Add Locations to Council", label: "(button) Add Locations to Council" }]
        },
        {
            value: '(screen) All Location', label: '(screen) All Location', children:
                [
                    { value: "(button) Floating Add for Location", label: "(button) Floating Add for Location" },
                    { value: "(tab) Houses In a Location", label: "(tab) Houses In a Location" },
                    { value: "(tab) Stray animals in a Location", label: "(tab) Stray animals in a Location" },
                    { value: "(tab) Comments for a location", label: "(tab) Comments for a location" },
                ]
        },
        { value: '(screen) House', label: '(screen) House' },
        { value: '(screen) Animal', label: '(screen) Animal' },
        { value: '(screen) Settings', label: '(screen) Settings' },
    ],
},
{
    value: "Web Portal",
    label: "Web Portal"
}];



const endURL = "/api/roles"

const updateRoles = (data, callback) => {
    fecthApi(endURL, "PUT", data)
        .then((res) => res.json())
        .then((res) => res.error && callback(res.error))
}

const addRoles = (data, callback) => {
    fecthApi(endURL, "POST", data)
        .then((res) => res.json())
        .then((res) => res.error && callback(res.error))
}


const AddRoles = ({ history, location }) => {

    const [role, setRole] = useState({ RoleCode: "", RoleName: "", Description: "", ...location.state })
    const [permission, setPermission] = useState({ checked: [""], expanded: [] })
    const [users, setUsers] = useState([])


    const onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setRole((prevRole) => ({ ...prevRole, [target.id]: value }))
    }

    const onError = (err) => {
        console.log(err)
    }

    const addUsers = (e) => {
        e.preventDefault();
        setUsers([...users, { key: uuid(), user: "" }])
    }

    const deleteUsers = (toDelete) => {

        setUsers(users.filter(user => user !== toDelete))
    }

    const operation = () => { location.state ? updateRoles(role, onError) : addRoles(role, onError) }

    return (
        <div>
            <div className={"flex-between " + style.container} >

                <div className={style.form} >
                    <div>
                        <label className="tag" htmlFor="Role Code" >Role Code*</label> <br></br>
                        <input className="input" type="text" id="RoleCode" required value={role["RoleCode"]} disabled={!!location.state} onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="RoleName" >Name</label> <br></br>
                        <input className="input" type="text" id="RoleName" value={role["RoleName"]} onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="Description" >Description</label> <br></br>
                        <textarea className="input" id="Description" value={role["Description"]} onChange={onChange} style={{ minHeight: "100px" }} />
                    </div>
                    <div>
                        <p className="tag"> <span>Users</span>  </p>
                        {users.map(user => <AddOption options={options} key={user.key} onDelete={() => deleteUsers(user)} />)}
                        <span className={style.green_add} onClick={addUsers} > add users </span>

                    </div>


                </div>
                <div className={style.permissionContainer}  >
                    <p  ><span className="tag">Permission</span> </p>
                    <div className={style.permission} >
                        <CheckboxTree
                            iconsClass="fa5"
                            nodes={nodes}
                            checked={permission.checked}
                            expanded={permission.expanded}
                            onCheck={checked => setPermission({ ...permission, checked })}
                            onExpand={expanded => setPermission({ ...permission, expanded })}
                            nativeCheckboxes={true}
                            showNodeIcon={false}
                        />

                    </div>


                </div>


            </div>
            <button className="bt-add" onClick={operation} >  Add </button>
            <span className="cancel" onClick={() => history.goBack()}>Cancel</span>
        </div>
    )
}

const options = ["", "jack", "mike", "john", "eric"]

export default AddRoles
