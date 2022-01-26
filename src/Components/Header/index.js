
import React, {useState} from 'react'

import style from "./header.module.scss"
import { Link, Redirect } from "react-router-dom"
import PATH from "../../Constant"
import logoSrc from "./AMRRIC.svg"
import path from '../../Constant'
import Dropdown from 'react-animated-dropdown';



const index = (history, props) => {
    let userIcon = "https://freesvg.org/img/abstract-user-flat-4.png"

    

    return (
        <div className={style.container}>
            <img
                className={style.logo}
                alt="logo"
                src={logoSrc}></img>
            <nav className={style.nav}>
                <Link className={style.link} to={PATH.HOME}>Home</Link>
                
                
                

        
            <ul>
              <li><Link className={style.link} to={PATH.ADMIN}>Admin</Link></li>
              <li><Link className={style.link} to={PATH.SETTINGS}>Settings</Link></li>
              <li><Link className={style.link} to={PATH.PARAMETERS}>Parameters</Link></li>
              <li><Link className={style.link} to={PATH.SECURITY}>Security</Link></li>
              <li><Link className={style.link} to={PATH.PROGRAMS}>Programs</Link></li>
            </ul>
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
