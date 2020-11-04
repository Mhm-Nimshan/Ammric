import React, { useState } from 'react'

import style from "./location.module.scss"

const AddLocation = ({ history, location }) => {
    const [item, setItem] = useState({ ...location.state })
    const onCancel = (e) => {
        history.goBack()
        return false
    }
    return (
        <form>
            <div>
                <label className={style.tag} htmlFor="short" >Short Name*</label> <br></br>
                <input className={style.input} type="text" id="short"
                    onChange={(e) => { setItem({ ...item, "Short Name": e.target.value }) }}
                    required value={item["Short Name"]} /> </div>
            <div>
                <label className={style.tag} htmlFor="name" >Name</label> <br></br>
                <input className={style.input} type="text" id="name"
                    onChange={(e) => { setItem({ ...item, "Name": e.target.value }) }}
                    value={item["Name"]} /> </div>
            <div>
                <label className={style.tag} htmlFor="state">State</label> <br></br>
                <select className={style.select} id="state"
                    onChange={(e) => { setItem({ ...item, "State": e.target.value }) }}
                    value={item["State"]} >
                    <option value="ACT">ACT</option>
                    <option value="NSW">NSW</option>
                    <option value="NT">NT</option>
                    <option value="QLD">QLD</option>
                    <option value="SA">SA</option>
                    <option value="TAS">TAS</option>
                    <option value="VIC">VIC</option>
                    <option value="WA">WA</option>
                </select>

            </div>
            <div> <button className="bt-add" style={{ marginRight: "30px" }} >  Add </button>
                <span onClick={onCancel} className={style.cancel}>Cancel</span>  </div>
        </form>
    )
}

export default AddLocation
