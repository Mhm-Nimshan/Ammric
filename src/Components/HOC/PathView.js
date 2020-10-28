import React from 'react'
import style from "./path.module.scss"
import { withRouter } from "react-router-dom"

const PathView = (WrappedComponent) => {
    return withRouter((props) => {
        let pathArr = props.location.pathname.split("/").slice(1)
        console.log(pathArr)
        return (
            <div className={style.container} >
                {pathArr.map(p => (
                    <h4 key={p} > {p} </h4>
                ))}

                <WrappedComponent />
            </div>
        )
    })
}

export default PathView
