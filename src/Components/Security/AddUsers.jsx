import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import style from "./security.module.scss";
import AddOption from "./AddOption";
import { fecthApi } from "../Common/Table/APIUtil";
import { toBeInvalid } from "@testing-library/jest-dom/dist/matchers";
import eyesrc from "./ShowPass.svg" 
import { Link } from "react-router-dom";

const endURL = "/api/users";
const CryptoJS = require("crypto-js");

const AddUsers = ({ history, location }) => {
  const [user, setUser] = useState({ ...location.state });
  const [checkValid, setValid] = useState(false)
  const [checkEmailValid, setEmailValid] = useState(false); 
  const [userRoles, setRoles] = useState([]);
  const [currentRoles, setCurrentRoles] = useState([]);
  const [buttontext, Setbuttontext] = useState("");
  const [errorMessage, setErrorMessage] = useState('')

    
 let IsUpdating = false
 let newuser = false



  if (Object.entries(user).length == 0){
    // New user - User object has no entries
    
    Setbuttontext("Add")
    user["ExpirePassword"] = false;
    user["WebPortal"] = false;
    user["EditMyCouncils"] = false; 
    
  }  

  else if(Object.entries(user).length >= 3 && Object.entries(user).length <= 14 ){
    newuser = true
    IsUpdating = false
  }
  
  else if(Object.entries(user).length >= 15){
    IsUpdating = true
    newuser = false
  }
  
 
  console.log( {newuser})
  console.log( {IsUpdating})
  console.log(Object.entries(user).length)



// if(Object.entries(user).length > 0){
//     setUpdating(true)
    
//     // console.log('Updating', Object.entries(user).length, user)
//   }

  

  useEffect(() => {
    getRoles();
  }, []);

  const onAddRole = () => {
    setRoles([...userRoles, { key: uuid(), role: "" }]);
  };

  const RevPass=() =>{
    let inputpass = document.getElementById("password");
    if (inputpass.type === "password") {
    inputpass.type = "text";
  } else {
    inputpass.type = "password";
  }
  }

  
   
  
  

  //LOGIC FOR ONCHANGE
  const onChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value; //replcate this logic for the show password button
    setUser((prevUser) => ({ ...prevUser, [target.id]: value }));
    
 const email = document.getElementById("Username");

  
 
   if ((!email.checkValidity()) && (newuser)) {
      setEmailValid(false)
      Setbuttontext("Add")
    } 

    else if (!email.checkValidity() && !newuser){
      setEmailValid(false)
      Setbuttontext("Update")
    
      
    }

    else if (email.checkValidity() && !newuser){
      setEmailValid(true)
      Setbuttontext("Update")
      
    }

        else if (email.checkValidity() && newuser){
      setEmailValid(true)
      Setbuttontext("Add")
      
    }

      
    else {
      setEmailValid(true)
      Setbuttontext("Add")
    }

   

     const password = document.getElementById("Password");
    function CheckPassword(inputtxt) {
      var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (inputtxt.value.match(decimal) && (newuser)) {
        // alert('Please provide a valid Password')
        console.log({IsUpdating})
        console.log({newuser})
        console.log("validpass");
        setValid(true)
        Setbuttontext("WhenNew")
      } 

      // else if (inputtxt.value.match(decimal) && setEmailValid(false))
      // {setValid(false)}

    

       else if (inputtxt.value.match(decimal) && !newuser ){
      Setbuttontext("whenUpdate")
      console.log("this")
      setValid(true)
    }

      else if (!inputtxt.value.match(decimal) && !newuser ){
      Setbuttontext("whenUpdate")
      console.log("this")
      setValid(false)
    }

    
  
      else {
        Setbuttontext("state3")
        setValid(false)
      }
    }
    CheckPassword(password);


    

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

    const email = document.getElementById("Username");
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
        setErrorMessage('')
        return false;
      }
    }
    CheckPassword(password);
  };

  const onError = (err) => {
    console.error(err);
    alert(err+ "Bijja"); //creates the browser error if there is one to display
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
              Email *
            </label>{" "}
            <br></br>
            <input
              className="input"
              type="email"
              required
              id="Username"
              value={user["Username"]}
              onChange={onChange}
            />
            <span className="ValidMsg"> {checkEmailValid ? "" : "Email is not in valid email format"}</span>
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
            <span className={style.plainBt} onClick={RevPass}><img  className={style.eye} src={eyesrc}/> {RevPass ? "Show Password" : "Hide Password"}</span>
             
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
              {""}Web Portal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <label className={style.switch}>
              <input
                type="checkbox"
                id="WebPortal"
                onChange={onChange}
                value={user["WebPortal"]}
                >
                  </input>  
              <span className={style.slider}></span>
            </label>
          </div>
         
          <div>
            <label className="tag" htmlFor="ExpirePassword">
              {" "}
            Expire Password&nbsp;
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
            <label className="tag" htmlFor="Enabled">
              {" "}
              Is Enabled{" "}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>

            <label className={style.switch}>
              <input
                type="checkbox"
                id="Enabled"
                checked={user["Enabled"]}
                onChange={onChange}
              />
              <span className={style.slider}></span>
            </label>
          </div>
        </div>
        {/* <div className={style.user_role}>
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
        </div> */}
      </div>
      <div>
      <button
        to={{pathname: '/security/Users'}} 
        type="submit"
        className={checkValid ? "activeBtn" : "inactiveBtn"} 
        disabled={!checkEmailValid}
        onClick={(e) => {
          onSubmit(e, onError);
        }}
             
        >        
          {buttontext}
      </button>
      <span className="cancel" onClick={() => history.goBack()}>
        Cancel
      </span>
      </div>
    </form>
  );
};

export default AddUsers;