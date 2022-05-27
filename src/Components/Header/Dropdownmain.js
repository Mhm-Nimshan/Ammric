import style from "./header.module.scss";
import { Link, Redirect } from "react-router-dom";
import PATH from "../../Constant";
import logoSrc from "./AMRRIC.svg";
import path from "../../Constant";
import { getThemeProps } from "@material-ui/system";
import { useState } from "react";
import Dropdownnlist from "./Dropdownlist";

const Dropdownmain = (props) => {
  const [open, setopen] = useState(false);
  
  const onMouseEnter = () => {
    setopen(open);
  }

  const onMouseLeave = () => {
    setopen(!open);
  }

  return (
    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link className={style.itemlink} to={PATH.ADMIN}>
        <ul className={style.Droplink} onMouseEnter={() => setopen(!open)} onMouseLeave={() => setopen(open)}>  
          Admin
        </ul>
      </Link>
      {open && props.children}
      {/* {!open && props.children} */}
    </li>
  );
};

export default Dropdownmain;
