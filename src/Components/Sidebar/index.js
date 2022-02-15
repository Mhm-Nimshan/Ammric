import React from "react";
import { withRouter, Link } from "react-router-dom";
import style from "./sidebar.module.scss";
import { subLinks } from "../../Constant";
import { childLink } from "../../Constant";
import path from "../../Constant";

const index = ({ location }) => {
  let pathArr = location.pathname.split("/");
  let keyPath = pathArr.length > 1 ? pathArr[1] : "";
  let sublink = subLinks[keyPath];
  // let childLinks = childLink [sublink]

  return (
    <div className={style.sidebar}>
      {sublink &&
        sublink.map((l) => (
          <Link className={style.link} key={l} to={`/${keyPath}/${l}`}>
            {l}
          </Link>
        ))}
    </div>
  );
};

export default withRouter(index);
