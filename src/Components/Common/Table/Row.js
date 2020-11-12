import React from 'react'


import style from "./table.module.scss"
import modifySVG from "./pen.svg"
import deleteSVG from "./delete.svg"



const Row = ({ row, onEdit, cols, editable = true, deltetable = true }) => {

    function booleanIcon(isTrue) {
        return isTrue ? <i className="fas fa-check" /> : <i className="fas fa-times" />
    }

    return (
        <div className={" flex-center "}
            style={{ width: "100%" }}
        >
            {cols.map((key, idx) => (
                <span className={style.entry} key={key + idx}
                > {typeof row[key] === "boolean" ? booleanIcon(row[key]) : row[key]}</span>
            ))}
            <span className={style.entry + " " + style.tool} >

                {editable ? <img src={modifySVG} className={style.icon} onClick={() => { onEdit(row) }} alt="Edit" /> : <span />}

                {deltetable ? <img src={deleteSVG} className={style.icon} alt="Delete" /> : <span />}
            </span>
            {/* last two icons */}
        </div>
    )
}

export default Row
