import React, { useState, useEffect } from 'react'

import Table from "../Common/Table/Table"
import { onDelete, onEdit } from "../Common/Table/APIUtil"


const deleteURL = "/api/community"
const editURl = "/locations/communities/edit"

const Communities = ({ history }) => {

    const [communities, setCommunities] = useState([])
    const [councils, setCouncils] = useState([])
    const [filter, setFilter] = useState("")

    const cols = ["Community", "Outstation", "LocationType"]

    const fetchCommunity = async () => {
        try {
            let res = await fetch("/api/community")
            res = await res.json();
            if (res.error) {
                console.log(res.error)
            } else {
                setCommunities(res.data)
                let councilsTemp = ["", ...new Set(res.data.map(item => item.CouncilName))]
                setCouncils(councilsTemp)
            }
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

    const displayData = () => {
        if (filter !== "") {
            return communities.filter(item => item.CouncilName === filter)
        }
        return communities
    }


    const deleteItem = onDelete(deleteURL, fetchCommunity)
    const editItem = onEdit(history, editURl)

    return (
        <div>
            <div className="flex-between">
                <button className="bt-add" onClick={onClick} > Add</button>
                <span>
                    <label htmlFor="councilSelet" >Council: </label>
                    <select id="councilSelet" style={{ margin: 0 }} value={filter} onChange={(e) => setFilter(e.target.value)} >
                        {councils.map(item => <option key={item} value={item}> {item} </option>)}
                    </select>
                </span>
                <span> No deleted</span>
            </div>
            <Table data={displayData()} onEdit={editItem} pk={"LocationId"} cols={cols} onDelete={deleteItem} />
        </div>
    )
}

export default Communities
