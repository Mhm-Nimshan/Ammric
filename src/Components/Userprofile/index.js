import React from "react";
// import style from "./security.module.scss";

const Userprofile = ({}) => {

    return (

    <form>
        <div>
            <div>
                <label>Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample</label> 
            </div>

            <div>
                <br></br>
                <label>Roles:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sample</label> 
            </div>

            <div>
                <br></br>
                <br></br>
                <br></br>
                <label>Name:</label>&nbsp;&nbsp;&nbsp;
                <input type="text" ></input> 
            </div>

             <div>
                <br></br>
                <br></br>
                <br></br>
                <label>Email:</label>&nbsp;&nbsp;&nbsp;
                <input type="text" ></input> 
            </div>

             <div>
                <br></br>
                <br></br>
                <br></br>
                <label>Password:</label>&nbsp;&nbsp;&nbsp;
                <input type="text" ></input> &nbsp;
                <button> Change Password</button> 
            </div>


            <div>
                <br></br>
                <button type="button">Save</button>
            </div>

        </div>
    </form>

    )

}

export default Userprofile;

