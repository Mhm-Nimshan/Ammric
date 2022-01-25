import React from "react";
import style from "./userprofile.module.scss"
// import style from "./security.module.scss";
 let userIcon = "https://freesvg.org/img/abstract-user-flat-4.png"

const Userprofile = ({}) => {

    return (

    <form className={style.form}>
        

            <section className={style.UserInfo}>
            <p><label className={style.usrname} >Username:&nbsp;Sample</label></p>              
            <p><label className={style.roles}>Roles:&nbsp;Sample</label></p>
            </section>
            
             <section className={style.profilechange}>
            <p><img className={style.userIcon} src={userIcon} alt="user pic"/></p>
            <a href="url"className={style.hyperlink}>change</a>
            </section>
            
            <section >
                <label>Name:</label>
                <input className={style.inputactual}  type="text" ></input>                 
            </section>
        
            <section >
                <label>Email:</label>
                <input className={style.inputactual} type="text" ></input> 
            </section>

            <section>
                <label>Password:</label>
                <input className={style.inputpass} type="text" ></input> 
                <button className= {style.change}> Change Password</button> 
            </section>

            
            
           

           
                <button className={style.save} type="button">Save</button>
            

        
    </form>

    )

}

export default Userprofile;

