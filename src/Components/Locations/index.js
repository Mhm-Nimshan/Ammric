import React, { useState, useEffect } from 'react'
import style from "./location.module.scss"
import Table from "../Common/Table/Table"
import { onDelete, onEdit } from "../Common/Table/APIUtil"


const baseURL = "/api/council"
const editURl = "/locations/council/edit"

const Council = ({ history, location }) => {
    const [state, setState] = useState("All")
    const [councils, setCouncils] = useState([])
    const cols = ["ShortName", "Name", "State", "Communities", "Active"]

    // Set regions array dinamically based on the councils list
    let regions = ["All"]
    let groupByState = councils.reduce(function (r, a) {
                            r[a.State] = r[a.State] || [];
                            r[a.State].push(a);
                            return r;
                        }, Object.create(null));
    regions = regions.concat(Object.keys(groupByState).sort())

    const fetchCouncils = async () => {
        try {
            let res = await fetch(baseURL)
            res = await res.json();
            if (res.error)
                console.error(res.error)
            else
                setCouncils(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCouncils()
    }, [])

    const onClick = (e) => {
        history.push(location.pathname + "/add")
        return false
    }
    const handleRegionChange = (e, region) => {
        setState(region)
        return false
    }

    const editItem = onEdit(history, editURl)
    const deleteItem = onDelete(baseURL, fetchCouncils)

    const getDisplayData = () => {
        let activeCouncils = councils.filter(council => council.Active)
        if (state === "All")
            return activeCouncils
        return activeCouncils.filter(council => council.State === state)
    }

    return (
        <div>
            <div className="flex-between">
                <button className="bt-add" onClick={onClick} > Add </button>
                <div className={style.regions}>
                    {regions.map((r, idx) => (
                        <span key={r}
                              className={state === r ? style.current : null}
                              onClick={(e) => handleRegionChange(e, r)}>
                            {r}
                        </span>
                    ))}
                </div>
                <span></span>
            </div>

            <Table data={getDisplayData()}
                cols={cols}
                onEdit={editItem}
                onDelete={deleteItem}
                pk={"Id"}/>
        </div>
    )
}

export default Council
