
import style from "./header.module.scss"
import { Link, Redirect } from "react-router-dom"
import PATH from "../../Constant"
import logoSrc from "./AMRRIC.svg"
import path from '../../Constant'

const Dropitem = (props) => {

    return(
        <ul>
           <li><Link className={style.link} to={PATH.SETTINGS}>Settings</Link></li> 
           <li><Link className={style.link} to={PATH.PARAMETERS}>Parameters</Link></li>
           <li><Link className={style.link} to={PATH.SECURITY}>Security</Link></li>
           <li><Link className={style.link} to={PATH.PROGRAMS}>Programs</Link></li>
        </ul>


    )

}

export default Dropitem