import React from 'react'


import style from "./table.module.scss"
import modifySVG from "./pen.svg"
import deleteSVG from "./delete.svg"



const Row = ({ row, isHeader }) => {
    let data = (row instanceof Array) ? row : Object.values(row)
    return (
        <div className={" flex-center  " + (isHeader ? style.th : "")}
            style={{ width: "100%" }}
        >
            {data && data.map((entry, idx) => (
                <span className={style.entry} key={entry + idx}> {entry} </span>
            ))}
            <span className={style.entry + " " + style.tool} >
                <img src={modifySVG} className={style.icon} alt="Delete" />
                <img src={deleteSVG} className={style.icon} alt="Delete" />

            </span>
        </div>
    )
}

export default Row
