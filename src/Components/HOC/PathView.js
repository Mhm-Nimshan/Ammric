import React from 'react'
import style from "./path.module.scss"
import { withRouter } from "react-router-dom"

const PathView = (WrappedComponent) => {
    return withRouter((props) => {
        let pathArr = props.location.pathname.split("/").slice(1)
        return (
            <div className={style.container} >
                <div className={style.pathRow}>
                    {pathArr.map((path, index) => (
                        <span className={style.path} key={path} > {index > 0 ? (" > " + path) : path} </span>
                    ))}
                </div>
                <WrappedComponent  {...props} />
            </div>
        )
    })
}

export default PathView
