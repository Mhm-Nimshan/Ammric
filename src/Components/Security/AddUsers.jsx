import React, { useState } from 'react'
import { uuid } from 'uuidv4';
import style from "./security.module.scss"
import AddOption from "./AddOption"
import {fecthApi} from "../Common/Table/APIUtil"



const endURL = "/api/users"

const updateUser = (data, callback) => {
    fecthApi(endURL, "PUT", data)
        .then((res) => res.json())
        .then((res) => res.error && callback(res.error))
}

const addUser = (data, callback) => {
    fecthApi(endURL, "POST", data)
        .then((res) => res.json())
        .then((res) => res.error && callback(res.error))
}


const AddUsers = ({ history, location }) => {
    const [user, setUser] = useState({ ...location.state })
    const [roles, setRoles] = useState([])

    const onAddRole = () => {
        setRoles([...roles, { key: uuid(), role: "" }])
    }

    const onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setUser((prevUser) => ({ ...prevUser, [target.id]: value }))
    }


    const onOptionChange = (e, key) => {
        let tempRoles = [...roles].map(role => role.key === key ? { ...role, role: e.target.value } : role)
        setRoles(tempRoles)
    }
    return (
        <form>
            <div className={"flex-between " + style.container} >

                <div className={style.form} >
                    <div>
                        <label className="tag" htmlFor="Username" >User Name *</label> <br></br>
                        <input className="input" type="text" id="Username" required value={user["Username"]} onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="Name" >Name</label> <br></br>
                        <input className="input" type="text" id="Name" value={user["Name"]} onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="Email" >Email</label> <br></br>
                        <input className="input" type="text" id="Email" value={user["Email"]} onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="isEnabled" > Is Enabled </label>
                        <input type="checkbox" id="isEnabled" checked={user["isEnabled"]} onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="Password"  >Password *</label> <br></br>
                        <input className="input" type="text" id="Password" onChange={onChange} required />
                    </div>
                    <div>
                        <label className="tag" htmlFor="expire" > Expire Password</label>  <input type="checkbox" />

                    </div>
                </div>
                <div className={style.user_role} >
                    <p className="tag" style={{ marginBottom: "20px" }}> User Roles</p>
                    {roles && roles.map(role => <AddOption key={role.key} options={options} value={role.role} onChange={(e) => onOptionChange(e, role.key)} onDelete={() => setRoles(roles.filter(item => item !== role))} />)}
                    <span className={style.green_add} onClick={onAddRole} >  Add User Role</span>
                </div>
            </div>
            <button className="bt-add"> Add</button>   <span className="cancel" onClick={() => history.goBack()} >Cancel</span>

        </form>
    )
}
const options = ["", "Administrator", "Animal Management Worker", "AMRRIC", "Veterinary"]




export default AddUsers
