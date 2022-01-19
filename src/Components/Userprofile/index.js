import React from "react";
import style from "./userprofile.module.scss"
// import style from "./security.module.scss";

const Userprofile = ({}) => {

    return (

    <form className={style.form}>
        

            <section className={style.UserInfo}>
            <p><label className={style.usrname} >Username:&nbsp;Sample</label></p>              
            <p><label>Roles:&nbsp;Sample</label></p>
            </section>
            
            <section>
                <label>Name:</label>
                <input className={style.inputactual}  type="text" ></input> 
            </section>
            

             <section>
                <label>Email:</label>
                <input className={style.inputactual} type="text" ></input> 
            </section>

            <section>
                <label>Password:</label>
                <input className={style.inputpass} type="text" ></input> 
                <button className= {style.change}> Change Password</button> 
            </section>
            


            <div>
                <button className={style.save} type="button">Save</button>
            </div>

        
    </form>

    )

}

export default Userprofile;

