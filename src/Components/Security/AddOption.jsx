import React from 'react'
import style from "./security.module.scss"


const AddOption = ({ onDelete, options, value, onChange }) => {
    return (
        <div className={style.addContainer} >
            <select value={value} onChange={onChange} >
                {options.map(o => <option key={o}> {o} </option>)}

            </select>
            <i className={"fas fa-trash " + style.delete} onClick={onDelete} />
        </div>
    )
}

export default AddOption
