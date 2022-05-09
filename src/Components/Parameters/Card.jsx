import React from 'react'
import style from "./card.module.css"

import { withRouter } from "react-router-dom"



const Card = ({ title, description, history, url }) => {

    const onClick = () => { history.push(url) }

    return (
        <div className={style.cardContainer} onClick={onClick} >
            <p className={style.title}> {title} </p>

            <p className={style.desc}>{description} </p>

        </div>
    )
}

export default withRouter(Card)
