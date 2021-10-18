import React, { useState, useEffect } from 'react'
import { uuid } from 'uuidv4';
import style from "./security.module.scss"
import AddOption from "./AddOption"
import { fecthApi } from "../Common/Table/APIUtil"



const endURL = "/api/users"



const AddUsers = ({ history, location }) => {
    const [user, setUser] = useState({ ...location.state })
    const [userRoles, setRoles] = useState([])
    const [currentRoles, setCurrentRoles] = useState([])

    useEffect(() => {
        getRoles()
    }, [])

    const onAddRole = () => {
        setRoles([...userRoles, { key: uuid(), role: "" }])
    }

    const onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setUser((prevUser) => ({ ...prevUser, [target.id]: value }))
    }


    const onOptionChange = (e, key) => {
        let tempRoles = [...userRoles].map(role => role.key === key ? { ...role, role: e.target.value } : role)
        setRoles(tempRoles)
    }

    const onSubmit = (e, callback) => {
        e.preventDefault()
        let method = "POST"
        if (location.state) {
            method = "PUT"
        }
        fecthApi(endURL, method, user)
            .catch((err) => callback(err))
    }

    const onError = (err) => {
        console.log(err)
    }

    const getRoles = () => {
        fetch("/api/roles/all")
            .then(res => res.json())
            .then(data => setCurrentRoles(data.data.map(item => item["RoleCode"])))
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
                        <label className="tag" htmlFor="Active" > Is Enabled </label>
                        <input type="checkbox" id="Active" checked={user["Active"]} onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="Password"  >Password *</label> <br></br>
                        <input className="input" type="text" id="Password" onChange={onChange} required value={user["Password"]} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="expire" > Expire Password</label>
                        <input type="checkbox" id="ExpirePassword" checked={user["ExpirePassword"]} onChange={onChange} />

                    </div>
                </div>
                <div className={style.user_role} >
                    <p className="tag" style={{ marginBottom: "20px" }}> User Roles</p>
                    {userRoles && userRoles.map(role => <AddOption key={role.key} options={currentRoles} value={role.role} onChange={(e) => onOptionChange(e, role.key)} onDelete={() => setRoles(userRoles.filter(item => item !== role))} />)}
                    <span className={style.green_add} onClick={onAddRole} >  Add User Role</span>
                </div>
            </div>
            <button className="bt-add" onClick={(e) => { onSubmit(e, onError) }} > Add</button>   <span className="cancel" onClick={() => history.goBack()} >Cancel</span>

        </form>
    )
}





export default AddUsers
