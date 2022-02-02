import style from "./header.module.scss";
import { Link, Redirect } from "react-router-dom";
import PATH from "../../Constant";
import logoSrc from "./AMRRIC.svg";
import path from "../../Constant";
import { getThemeProps } from "@material-ui/system";
import { useState } from "react";

const Dropdownmain = (props) => {
  const [open, setopen] = useState(false);
  return (
    <li>
      <ul
        className={style.Droplink}
        onMouseEnter={() => setopen(!open)}
        onMouseLeave={() => setopen(open)}
      >
        <Link to={PATH.ADMIN}>Admin</Link>
      </ul>
      {open && props.children}
      {!open && null}
    </li>
  );
};

export default Dropdownmain;
