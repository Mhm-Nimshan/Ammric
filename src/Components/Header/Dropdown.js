
import style from "./header.module.scss"
import { Link, Redirect } from "react-router-dom"
import PATH from "../../Constant"
import logoSrc from "./AMRRIC.svg"
import path from '../../Constant'
import { getThemeProps } from "@material-ui/system"

const Dropdown = (props) => {

    return(

       <ul>
            {props.children}
        </ul>
    )
}

export default Dropdown