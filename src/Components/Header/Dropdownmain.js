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
  let blankclick;
  if ((onclick = null)) {
    setopen(open);
  }
  return (
    <li>
      <ul className={style.Droplink} onClick={() => setopen(!open)}>
        <label>Admin</label>
      </ul>
      {open && props.children}
      {/* {!open && props.children - null} */}
    </li>
  );
};

export default Dropdownmain;
