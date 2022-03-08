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
    // if user is new if the entry of user on server side is equivalent to 0
    user["ExpirePassword"] = false;
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
      fecthApi(endURL, method, user)
        .then((res) => res.json()) //promise, runs this on response from server
        .catch((err) => callback(err)); //catch, runs if the promise is rejected
    }

    const password = document.getElementById("Password");
    function CheckPassword(inputtxt) {
      var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (inputtxt.value.match(decimal)) {
        console.log("validpass");
        return true;
      } else {
        console.log("invalid");
      }
    }

    CheckPassword(password);

    // var ciphertext = CryptoJS.AES.encrypt(
    //   JSON.stringify(password),
    //   "my-secret-key@123"
    // ).toString();

    // console.log("Encrypt Data -");
    // console.log(ciphertext);

    // // Decrypt
    // var bytes = CryptoJS.AES.decrypt(ciphertext, "my-secret-key@123");
    // var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    // //log decrypted Data
    // console.log("decrypted Data -");
    // console.log(decryptedData);
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
            <label className="tag" htmlFor="Username">
              User Name *
            </label>{" "}
            <br></br>
            <input
              className="input"
              type="text"
              id="Username"
              required
              value={user["Username"]}
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
              value={user["Name"]}
              onChange={onChange}
            />
          </div>
          <div>
            <label className="tag" htmlFor="Email">
              Email *
            </label>{" "}
            <br></br>
            <input
              className={style.input}
              type="email"
              required
              id="Email"
              value={user["Email"]}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="MyCouncils">Edit My Councils</label>
            <input
              type="checkbox"
              id="MyCouncils"
              onChange={onChange}
              value={user["MyCouncils"]}
            />
          </div>
          <div>
            <label htmlFor="WebPortal">Web Portal</label>
            <input
              type="checkbox"
              id="WebPortal"
              onChange={onChange}
              value={user["WebPortal"]}
            />
          </div>
          <div>
            <label className="tag" htmlFor="Password">
              Password *
            </label>{" "}
            <br></br>
            <input
              className={style.password}
              type="text"
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
            <input
              type="checkbox"
              id="ExpirePassword"
              checked={user["ExpirePassword"]}
              onChange={onChange}
            />
          </div>
          <div>
            <label className="tag" htmlFor="Active">
              {" "}
              Is Enabled{" "}
            </label>
            <input
              type="checkbox"
              id="Active"
              checked={user["Active"]}
              onChange={onChange}
            />
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
