import React, { memo } from 'react'
import Row from "./Row"
import style from "./table.module.scss"

const Table = ({ data, onEdit, cols }) => {

    return (
        <div style={{ marginTop: "30px", maxHeight: "70vh", overflow: "auto" }}>
            <Header cols={cols} />
            <div>
                {data.map(row => <Row key={row.id} row={row} onEdit={onEdit} cols={cols} />)}
            </div>

        </div>
    )
}


const Header = ({ cols }) => {
    return <div className={" flex-center " + style.th}
        style={{ width: "100%" }}
    >
        {cols.map((key, idx) => (
            <span type="text" className={style.entry} key={key + idx}
            > {key}</span>
        ))}
        <span className={style.entry + " " + style.tool} >
        </span>
    </div>
}

export default memo(Table)
