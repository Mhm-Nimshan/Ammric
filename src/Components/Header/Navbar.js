import react from "react";
import style from "./header.module.scss"
import { Link, Redirect } from "react-router-dom"
import PATH from "../../Constant"

const Navbar = (props) => {

    <nav className={style.nav}>
        <ul className={style.navbarnav}>
            {props.children}
        </ul>
    </nav>
    
}

export default  Navbar