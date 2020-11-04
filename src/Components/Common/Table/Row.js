import React from 'react'


import style from "./table.module.scss"
import modifySVG from "./pen.svg"
import deleteSVG from "./delete.svg"



const Row = ({ row, onEdit, cols }) => {

    return (
        <div className={" flex-center "}
            style={{ width: "100%" }}
        >
            {cols.map((key, idx) => (
                <span className={style.entry} key={key + idx}
                > {row[key]}</span>
            ))}
            <span className={style.entry + " " + style.tool} >

                <img src={modifySVG} className={style.icon} onClick={() => { onEdit(row) }} alt="Delete" />

                <img src={deleteSVG} className={style.icon} alt="Delete" />
            </span>
        </div>
    )
}

export default Row
