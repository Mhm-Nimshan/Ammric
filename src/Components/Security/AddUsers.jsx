import React, { useState } from 'react'
import { uuid } from 'uuidv4';
import style from "./security.module.scss"

const AddUsers = ({ history, location }) => {
    const [user, setUser] = useState({ ...location.state })
    const [roles, setRoles] = useState([])

    const onAddRole = () => {
        setRoles([...roles, { key: uuid(), role: null }])
    }

    const onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setUser((prevUser) => ({ ...prevUser, [target.id]: value }))
        console.log(user)
    }

    return (
        <>
            <div className={"flex-between " + style.container} >

                <form className={style.form} >
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
                        <label className="tag" htmlFor="Password" >Password *</label> <br></br>
                        <input className="input" type="text" id="Password" onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="expire" > Expire Password</label>  <input type="checkbox" />

                    </div>
                </form>
                <div className={style.user_role} >
                    <p className="tag" style={{ marginBottom: "20px" }}> User Roles</p>
                    {roles && roles.map(role => <AddUserRole key={role.key} onDelete={() => setRoles(roles.filter(item => item !== role))} />)}
                    <span className={style.green_add} onClick={onAddRole} >  Add User Role</span>
                </div>
            </div>
            <p> <button className="bt-add"> Add</button>   <span className="cancel" onClick={() => history.goBack()} >Cancel</span> </p>

        </>
    )
}


const AddUserRole = ({ onDelete }) => {
    return <div className={style.addRoleContainer} >
        <select>
            <option> Administrator</option>
            <option> Animal Management Worker </option>
            <option> AMRRIC </option>
            <option> Veterinary </option>
        </select>
        <i className={"fas fa-trash " + style.delete} onClick={onDelete} />
    </div>
}


export default AddUsers
