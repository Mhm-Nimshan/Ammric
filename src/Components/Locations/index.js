import React, { useState, useEffect } from 'react'

import Table from "../Common/Table/Table"
import { onDelete, onEdit } from "../Common/Table/APIUtil"

import style from "./location.module.scss"


const deleteURL = "/api/council"
const editURl = "/locations/council/edit"

const Council = ({ history, location }) => {


    const [state, setState] = useState("All")
    const [councils, setCouncils] = useState([])

    const regions = ["All", "NT", "QLD", "SA", "WA"]

    const cols = ["ShortName", "Name", "State", "Communities"]


    const fetchCouncil = async () => {
        try {
            let res = await fetch("/api/council")
            res = await res.json();
            if (res.error) {
                console.log(res.error)
            } else { setCouncils(res.data) }

        } catch (error) {
            console.log(error)
        }

    }



    useEffect(() => {
        fetchCouncil()
    }, [])

    const onClick = (e) => {
        history.push(location.pathname + "/add")
        return false
    }
    const handleRegionChange = (e, region) => {
        setState(region)
        return false
    }


    const deleteItem = onDelete(deleteURL, fetchCouncil)
    const editItem = onEdit(history, editURl)

    const getDisplayData = () => {
        let res = state === "All" ? councils : councils.filter(item => item.State === state)
        return res.filter(item => item.Active === true)
    }

    return (
        <div>
            <div className="flex-between">
                <button className="bt-add" onClick={onClick} > Add </button>
                <div className={style.regions}>
                    {regions.map((r, idx) => (
                        <span
                            key={r}
                            className={state === r ? style.current : null}
                            onClick={(e) => handleRegionChange(e, r)}
                        > {r} </span>
                    ))}
                </div>
                <span></span>
            </div>

            <Table data={getDisplayData()}
                cols={cols}
                onEdit={editItem}
                onDelete={deleteItem}
            />
        </div>
    )
}


export default Council


// Mock Data


