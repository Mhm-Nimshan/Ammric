import React, { useState } from 'react'



import PathView from "../HOC/PathView"
import Table from "../Common/Table/Table"

import style from "./location.module.scss"

const data = [{ "Short Name": "Abc", "Name": "abc", "State": "SA", "Communities": 46 }]

const Locations = (props) => {

    const [current, setCurrent] = useState(0)


    const regions = ["All", "NT", "QLD", "SA", "WA"]

    const onClick = (e) => {
        console.log("clicked")
        return false
    }
    const handleRegionChange = (e, idx) => {
        setCurrent(idx)
        return false
    }
    return (
        <div>
            <div className="flex-between">
                <button className="bt-add" onClick={onClick} > Add </button>
                <div className={style.regions}>
                    {regions.map((r, idx) => (

                        <span
                            key={r}
                            className={current === idx ? style.current : null}
                            onClick={(e) => handleRegionChange(e, idx)}
                        > {r} </span>
                    ))}
                </div>
                <span></span>
            </div>

            <Table data={data} />
        </div>
    )
}


export default PathView(Locations)


// Mock Data


