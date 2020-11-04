import React, { useState } from 'react'

import Table from "../Common/Table/Table"

import style from "./location.module.scss"

const data = [{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 1 }
    , { "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 2 },
{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 3 },
{ "Short Name": "Abc", "Name": "abc", "State": "QLD", "Communities": 46, id: 4 },
{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 5 },
{ "Short Name": "Abc", "Name": "abc", "State": "WA", "Communities": 46, id: 6 },
{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 7 },
{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 8 },
{ "Short Name": "Abc", "Name": "ddd", "State": "VIC", "Communities": 46, id: 9 },
{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 10 },
{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 11 },
{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 12 },
{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46, id: 13 }

]

const Locations = ({ history, location }) => {


    const [state, setState] = useState("All")

    const regions = ["All", "NT", "QLD", "SA", "WA"]

    const cols = ["Short Name", "Name", "State", "Communities"]

    const onClick = (e) => {
        history.push(location.pathname + "/add")
        return false
    }
    const handleRegionChange = (e, region) => {
        setState(region)
        return false
    }

    function onEdit() {
        let url = "/locations/council/edit"
        return function (data) {
            history.push({ pathname: url, state: { ...data } })
        }
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

            <Table data={state === "All" ? data : data.filter(item => item.State === state)}
                cols={cols}
                onEdit={onEdit()} />
        </div>
    )
}


export default Locations


// Mock Data


