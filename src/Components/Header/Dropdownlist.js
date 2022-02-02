import { useState } from "react";
import style from "./header.module.scss";
import { Link, Redirect } from "react-router-dom";
import PATH from "../../Constant";
import logoSrc from "./AMRRIC.svg";
import path from "../../Constant";
import Dropdownmain from "./Dropdownmain";

const Dropdownlist = () => {
  function Dropdownlistitem(props) {
    return <li className={style.menuitem}>{props.children}</li>;
  }

  return (
    <div className={style.Dropdownlist}>
      <Dropdownlistitem>
        <Link className={style.itemlink} to={PATH.SETTINGS}>
          Settings
        </Link>
      </Dropdownlistitem>

      <Dropdownlistitem>
        <Link className={style.itemlink} to={PATH.PARAMETERS}>
          Parameters
        </Link>
      </Dropdownlistitem>

      <Dropdownlistitem>
        <Link className={style.itemlink} to={PATH.SECURITY}>
          Security
        </Link>
      </Dropdownlistitem>

      <Dropdownlistitem>
        <Link className={style.itemlink} to={PATH.PROGRAMS}>
          Programs
        </Link>
      </Dropdownlistitem>

      <></>

      {/* <Dropdownlistitem>
        <Link className={style.itemlink} to={PATH.}>

        </Link>
      </Dropdownlistitem>

      <Dropdownlistitem></Dropdownlistitem>

      <Dropdownlistitem></Dropdownlistitem>

      <Dropdownlistitem></Dropdownlistitem> */}
    </div>
  );
};

export default Dropdownlist;
