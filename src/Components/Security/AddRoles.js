import React, { useState } from 'react'
import CheckboxTree from 'react-checkbox-tree';


import style from "./security.module.scss"




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




const AddRoles = ({ history, location }) => {

    const [role, setRole] = useState({ ...location.state })
    const [permission, setPermission] = useState({ checked: [""], expanded: [] })



    const onChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setRole((prevRole) => ({ ...prevRole, [target.id]: value }))
        console.log(role)
    }


    return (
        <div>
            <div className={"flex-between " + style.container} >

                <form className={style.form} >
                    <div>
                        <label className="tag" htmlFor="Role Code" >Role Code*</label> <br></br>
                        <input className="input" type="text" id="Role Code" required value={role["Role Code"]} onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="Name" >Name</label> <br></br>
                        <input className="input" type="text" id="Name" value={role["Name"]} onChange={onChange} />
                    </div>
                    <div>
                        <label className="tag" htmlFor="Description" >Description</label> <br></br>
                        <textarea className="input" id="Description" value={role["Description"]} onChange={onChange} style={{ minHeight: "100px" }} />
                    </div>
                    <div>
                        <p className="tag"> <span>Users</span>  </p>
                        <span className={style.green_add} > add users </span>

                    </div>


                </form>
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
            <div> <button className="bt-add" >  Add </button>
                <span className="cancel" onClick={() => history.goBack()}>Cancel</span>  </div>
        </div>
    )
}

export default AddRoles
