import React, { useState, useEffect } from 'react'

import Table from "../Common/Table/Table"
import { onDelete, onEdit } from "../Common/Table/APIUtil"


const deleteURL = "/api/community"
const editURl = "/locations/communities/edit"

const Communities = ({ history }) => {

    const [communities, setCommunities] = useState([])

    const cols = ["Community", "Outstation", "LocationType"]

    const fetchCommunity = async () => {
        try {
            let res = await fetch("/api/community")
            res = await res.json();
            if (res.error) {
                console.log(res.error)
            } else { setCommunities(res.data) }

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        fetchCommunity()
    }, [])

    const onClick = () => {
        history.push("/locations/communities/add")
    }


    const deleteItem = onDelete(deleteURL, fetchCommunity)
    const editItem = onEdit(history, editURl)

    return (
        <div>
            <div className="flex-between">
                <button className="bt-add" onClick={onClick} > Add</button>
                <span>
                    <label htmlFor="councilSelet" >Council: </label>
                    <select id="councilSelet" style={{ margin: 0 }}>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                    </select>
                </span>
                <span> No deleted</span>
            </div>
            <Table data={communities} onEdit={editItem} cols={cols} onDelete={deleteItem} />
        </div>
    )
}

export default Communities
