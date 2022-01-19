import React from 'react'


import style from "./header.module.scss"
import { Link, Redirect } from "react-router-dom"
import PATH from "../../Constant"
import logoSrc from "./AMRRIC.svg"
import path from '../../Constant'

const index = (history) => {
    let userIcon = "https://freesvg.org/img/abstract-user-flat-4.png"

    return (
        <div className={style.container}>
            <img
                className={style.logo}
                alt="logo"
                src={logoSrc}></img>
            <nav className={style.nav}>
                <Link className={style.link} to={PATH.HOME}>Home</Link>
                <Link className={style.link} to={PATH.PROGRAMS}>Programs</Link>
                <Link className={style.link} to={PATH.LOCATIONS}>Locations</Link>
                <Link className={style.link} to={PATH.SECURITY}>Security</Link>
                <Link className={style.link} to={PATH.PARAMETERS}>Parameters</Link>
                <Link className={style.link} to={PATH.SETTINGS}>Settings</Link>
                <Link className={style.link} to={PATH.ADMIN}>Admin</Link>
            </nav>

        <nav>
            <button className={style.userSession} type="button" >
                <Link className={style.uniquelink} to={PATH.USERPROFILE}>
                <span className={style.span}> John Smith </span>
                <img className={style.userIcon} src={userIcon} alt="user pic" />
                </Link>
            </button>
        </nav>
        </div>
    )
}

export default index
