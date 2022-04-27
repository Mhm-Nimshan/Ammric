import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import style from "./security.module.scss";
import AddOption from "./AddOption";
import { fecthApi } from "../Common/Table/APIUtil";
import { toBeInvalid } from "@testing-library/jest-dom/dist/matchers";

const endURL = "/api/users";
const CryptoJS = require("crypto-js");

const AddUsers = ({ history, location }) => {
  const [user, setUser] = useState({ ...location.state });
  const [checkValid, setValid] = useState(false)
  const [userRoles, setRoles] = useState([]);
  const [currentRoles, setCurrentRoles] = useState([]);

  // New user - User object has no entries
  if (Object.entries(user).length == 0) {
    user["Active"] = true;
    user["ExpirePassword"] = false;
    user["Enabled"] = false;
    user["WebPortal"] = false;
    user["EditMyCouncils"] = false;
  }

  useEffect(() => {
    getRoles();
  }, []);

  const onAddRole = () => {
    setRoles([...userRoles, { key: uuid(), role: "" }]);
  };

  const onChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const username = document.getElementById("Username");
    const password = document.getElementById("Password");
    
    setUser((prevUser) => ({ ...prevUser, [target.id]: value }));
    setValid(username.checkValidity())
    setValid(CheckPassword(password))
  };

  function CheckPassword(pwd) {
    let pwdRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return pwd.value.match(pwdRegEx)
  }

  const onOptionChange = (e, key) => {
    let tempRoles = [...userRoles].map((role) =>
      role.key === key ? { ...role, role: e.target.value } : role
    );
    setRoles(tempRoles);
  };

  const onSubmit = (e, callback) => {
    e.preventDefault();
    let method = "POST";
    if (location.state)
    method = "PUT";
    
    const username = document.getElementById("Username");
    if (!username.checkValidity())
      alert("Username invalid");

    const password = document.getElementById("Password");
    console.log(user);

    if (CheckPassword(password)) {
      const newholderpass = {};
      password.password = newholderpass;

      var ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(newholderpass),
        "eEEAJEVHu3JMMX0Ilh9Z"  // Private Key  // TODO: Save it somewhere else.
      ).toString();
      user.Password = ciphertext;
      console.log(`Encrypted Pwd: ${ciphertext} - User.Pwd: ${user.Password}`);

      // Creating the user
      fecthApi(endURL, method, user).catch((err) => callback(err)); //catch, runs if the promise is rejected
      
      return true;
    } else {
      alert("password must contain at least one number, capital letter, lower case letter, and be a minimum of eight characters long");
      return false;
    }
  };

  const onError = (err) => {
    console.error(err);
    alert(err); //creates the browser error if there is one to display
  };

  const getRoles = () => {
    fetch("/api/roles/all")
      .then((res) => res.json())
      .then((data) =>
        setCurrentRoles(data.data.map((item) => item["RoleCode"]))
      );
  };

  return (
    <form>
      <div className={"flex-between " + style.container}>
        <div className={style.form}>
          <div>
            <label className="tag" htmlFor="Username">Username *</label>{" "}
            <br></br>
            <input className="input" type="email" required id="Username" value={user["Username"]} onChange={onChange}/>
          </div>
          <div>
            <label className="tag" htmlFor="Name">Name</label>{" "}
            <br></br>
            <input className="input" type="text" id="Name" required value={user["Name"]} onChange={onChange}/>
          </div>
          <div>
            <label className="tag" htmlFor="Password">Password *</label>
            <br></br>
            <input className="input" type="password" id="Password" onChange={onChange} required value={user["Password"]}/>
          </div>
          <div>
            <label className="tag" htmlFor="ExpirePassword"> {" "}Expire Password</label>
            <label className={style.switch}>
              <input type="checkbox" id="ExpirePassword" checked={user["ExpirePassword"]} onChange={onChange}/>
              <span className={style.slider}></span>
            </label>
          </div>
          <div>
            <label className="tag" htmlFor="Enabled">{" "}Is Enabled{" "}</label>
            <label className={style.switch}>
              <input type="checkbox" id="Enabled" onChange={onChange} value={user["Enabled"]}/>
              <span className={style.slider}></span>
            </label>
          </div>
          <div>
            <label className="tag" htmlFor="MyCouncils">Edit My Councils</label>
            <label className={style.switch}>
              <input type="checkbox" id="EditMyCouncils" onChange={onChange} value={user["EditMyCouncils"]}/>
              <span className={style.slider}></span>
            </label>
          </div>
          <div>
            <label className="tag" htmlFor="WebPortal">{" "}{""}Web Portal</label>
            <label className={style.switch}>
              <input type="checkbox" id="WebPortal" onChange={onChange} value={user["WebPortal"]}/>
              <span className={style.slider}></span>
            </label>
          </div>
        </div>
        <div className={style.user_role}>
          <p className="tag" style={{ marginBottom: "20px" }}>{" "}User Roles</p>
          {userRoles &&
            userRoles.map((role) => (
              <AddOption
                key={role.key}
                options={currentRoles}
                value={role.role}
                onChange={(e) => onOptionChange(e, role.key)}
                onDelete={() =>
                  setRoles(userRoles.filter((item) => item !== role))
                }
              />
            ))}
          <span className={style.green_add} onClick={onAddRole}>{" "}Add User Role</span>
        </div>
      </div>
      <button type="submit" onClick={(e) => { onSubmit(e, onError); }}>Save</button>
      <span className="cancel" onClick={() => history.goBack()}>Cancel</span>
    </form>
  );
};

export default AddUsers;
