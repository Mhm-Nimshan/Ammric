import React, { useState } from 'react'
import style from "./location.module.scss"


const AddCommunities = ({ history, location }) => {


    const [item, setItem] = useState({ ...location.state })

    const onCancel = () => {
        history.goBack()
        return false;
    }

    const onClick = (e) => {
        e.preventDefault()
    }

    return (
        <form>
            <p>   <label htmlFor="councilSelect" className="tag" >Council <br></br></label>
                <select id="councilSelect"
                    className={style.select}>
                    <option value={1}> 1</option>
                    <option value={2}> 2</option>
                    <option value={3}> 3</option>
                    <option value={4}> 4</option>
                    <option value={5}> 5</option>
                </select></p>
            <p>   <label htmlFor="CommunitySelect" className="tag" >Conmmunity<br></br></label>
                <select id="CommunitySelect" className="select" >
                    <option value={1}> 1</option>
                    <option value={2}> 2</option>
                    <option value={3}> 3</option>
                    <option value={4}> 4</option>
                    <option value={5}> 5</option>
                </select></p>
            <p>   <label htmlFor="Type" className="tag"> Type <br></br></label>
                <select id="Type" className="select" >
                    <option value={1}> 1</option>
                    <option value={2}> 2</option>
                    <option value={3}> 3</option>
                    <option value={4}> 4</option>
                    <option value={5}> 5</option>
                </select></p>
            <p>   <label htmlFor="name" className="tag"> Name <br></br></label>
                <input id="name" type="text" className="input" />

            </p>

            <div> <button className="bt-add" onClick={onClick} >  Add </button>
                <span onClick={onCancel} className="cancel" >Cancel</span>  </div>
        </form >
    )
}

export default AddCommunities
