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
  if (Object.entries(user).length == 0)
    // New user - User object has no entries
    user["ExpirePassword"] = false;
  user["WebPortal"] = false;
  user["EditMyCouncils"] = false;
  const [userRoles, setRoles] = useState([]);
  const [currentRoles, setCurrentRoles] = useState([]);

  useEffect(() => {
    getRoles();
  }, []);

  const onAddRole = () => {
    setRoles([...userRoles, { key: uuid(), role: "" }]);
  };

  const onChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setUser((prevUser) => ({ ...prevUser, [target.id]: value }));
  };

  const onOptionChange = (e, key) => {
    let tempRoles = [...userRoles].map((role) =>
      role.key === key ? { ...role, role: e.target.value } : role
    );
    setRoles(tempRoles);
  };

  const onSubmit = (e, callback) => {
    e.preventDefault();
    let method = "POST";
    if (location.state) {
      method = "PUT";
    }

    const email = document.getElementById("Email");
    if (!email.checkValidity()) {
      alert("email invalid");
    } else {
      console.log("email valid");
    }

    const password = document.getElementById("Password");
    function CheckPassword(inputtxt) {
      var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (inputtxt.value.match(decimal)) {
        console.log("validpass");

        const newholderpass = {};
        password.password = newholderpass;

        var ciphertext = CryptoJS.AES.encrypt(
          JSON.stringify(newholderpass),
          "eEEAJEVHu3JMMX0Ilh9Z"
        ).toString();
        user.Password = ciphertext;
        fecthApi(endURL, method, user).catch((err) => callback(err)); //catch, runs if the promise is rejected

        console.log("Encrypt Data -");
        console.log(ciphertext);
        console.log(user);

        return true;
      } else {
        alert(
          "password must contain at least one number, capital letter, lower case letter, and be a minimum of eight characters long "
        );
        return false;
      }
    }
    CheckPassword(password);
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
            <label className="tag" htmlFor="Email">
              Email *
            </label>{" "}
            <br></br>
            <input
              className="input"
              type="email"
              required
              id="Email"
              value={user["Email"]}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="tag" htmlFor="Name">
              Name
            </label>{" "}
            <br></br>
            <input
              className="input"
              type="text"
              id="Name"
              required
              value={user["Name"]}
              onChange={onChange}
            />
          </div>

          <div>
            <label className="tag" htmlFor="MyCouncils">
              Edit My Councils
            </label>
            <label className={style.switch}>
              <input
                type="checkbox"
                id="EditMyCouncils"
                onChange={onChange}
                value={user["EditMyCouncils"]}
              />
              <span className={style.slider}></span>
            </label>
          </div>
          <div>
            <label className="tag" htmlFor="WebPortal">
              {" "}
              {""}Web Portal
            </label>
            <label className={style.switch}>
              <input
                type="checkbox"
                id="WebPortal"
                onChange={onChange}
                value={user["WebPortal"]}
              />
              <span className={style.slider}></span>
            </label>
          </div>
          <div>
            <label className="tag" htmlFor="Password">
              Password *
            </label>
            <br></br>
            <input
              className="input"
              type="password"
              id="Password"
              onChange={onChange}
              required
              value={user["Password"]}
            />
          </div>
          <div>
            <label className="tag" htmlFor="ExpirePassword">
              {" "}
              Expire Password
            </label>
            <label className={style.switch}>
              <input
                type="checkbox"
                id="ExpirePassword"
                checked={user["ExpirePassword"]}
                onChange={onChange}
              />
              <span className={style.slider}></span>
            </label>
          </div>
          <div>
            <label className="tag" htmlFor="Active">
              {" "}
              Is Enabled{" "}
            </label>

            <label className={style.switch}>
              <input
                type="checkbox"
                id="Active"
                checked={user["Active"]}
                onChange={onChange}
              />
              <span className={style.slider}></span>
            </label>
          </div>
        </div>
        <div className={style.user_role}>
          <p className="tag" style={{ marginBottom: "20px" }}>
            {" "}
            User Roles
          </p>
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
          <span className={style.green_add} onClick={onAddRole}>
            {" "}
            Add User Role
          </span>
        </div>
      </div>
      <button
        className="bt-add"
        onClick={(e) => {
          onSubmit(e, onError);
        }}
      >
        {" "}
        Add
      </button>{" "}
      <span className="cancel" onClick={() => history.goBack()}>
        Cancel
      </span>
    </form>
  );
};

export default AddUsers;
