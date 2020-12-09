import React, { useState } from 'react'

import { fecthApi } from "../Common/Table/APIUtil"


const endURL = "/api/council"

const updateCommunity = (data, callback) => {
    fecthApi(endURL, "PUT", data)
        .then((res) => res.json())
        .then((res) => res.error && callback(res.error))
}

const addCommunity = (data, callback) => {
    fecthApi(endURL, "POST", data)
        .then((res) => res.json())
        .then((res) => res.error && callback(res.error))
}



const AddLocation = ({ history, location }) => {
    const [item, setItem] = useState({ ...location.state })
    const onCancel = (e) => {
        history.goBack()
        return false
    }

    const onError = (err) => {
        console.log(err)
    }



    const operation = () => { location.state ? updateCommunity(item, onError) : addCommunity(item, onError) }

    return (
        <form>
            <div>
                <label className="tag" htmlFor="short" >Short Name*</label> <br></br>
                <input className="input" type="text" id="short"
                    onChange={(e) => { setItem({ ...item, "ShortName": e.target.value }) }}
                    required value={item["ShortName"]} /> </div>
            <div>
                <label className="tag" htmlFor="name" >Name</label> <br></br>
                <input className="input" type="text" id="name"
                    onChange={(e) => { setItem({ ...item, "Name": e.target.value }) }}
                    value={item["Name"]} /> </div>
            <div>
                <label className="tag" htmlFor="state">State</label> <br></br>
                <select className="input" id="state"
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
            <div> <button className="bt-add" onClick={operation}  >  Add </button>
                <span onClick={onCancel} className="cancel">Cancel</span>  </div>
        </form>
    )
}

export default AddLocation
