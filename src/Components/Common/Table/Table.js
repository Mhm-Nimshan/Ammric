import React, { memo } from 'react'
import Row from "./Row"
import style from "./table.module.scss"

const Table = ({ data, onEdit, onDelete, cols, children, editable, deletable }) => {

    return (
        <div style={{ marginTop: "30px", maxHeight: "70vh", overflow: "auto" }}>
            <Header cols={cols} />
            <div>
                {children}
                {data && data.map(row => <Row key={row[cols[0]]} row={row} onEdit={onEdit} cols={cols} editable={editable} onDelete={onDelete} deletable={deletable} />)}
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
