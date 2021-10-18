import React, { useState, useEffect, useCallback } from 'react'
import style from "./location.module.scss"
import { fecthApi } from "../Common/Table/APIUtil"



const endURL = "/api/community"
const AddCommunities = ({ history, location }) => {


    const [community, setCommunity] = useState({ LocationTypeCode: "community", UseLotNumbers: true, Outstation: "", ...location.state })
    const [councils, setCouncils] = useState([])
    const [Communities, setCommunities] = useState([])


    const fetchCouncils = useCallback(
        async () => {
            try {
                let fetchData = await fetch("/api/council")
                fetchData = await fetchData.json()

                if (fetchData.error) {
                    throw new Error(fetchData.error)
                } else {

                    setCouncils([{ CouncilId: -1, ShortName: "" }, ...fetchData.data])
                }
                if (community.CouncilId) {
                    fetchCommunities(community.CouncilId)
                }
            } catch (error) {
                console.log(error)
            }
        },
        [community.CouncilId],
    )

    const fetchCommunities = async (councilId) => {
        try {
            let fetchData = await fetch(`/api/community?councilId=${councilId}`)
            fetchData = await fetchData.json()

            if (fetchData.error) {
                throw new Error(fetchData.error)
            } else {
                fetchData = [...new Set(fetchData.data.map(item => item.Community).filter(item => item))]
                console.log(fetchData)
                setCommunities(["", ...fetchData])
            }

        } catch (error) {
        }
    }

    useEffect(() => {
        fetchCouncils()
    }, [fetchCouncils])


    const onCancel = () => {
        history.goBack()
        return false;
    }



    const handleChange = (e) => {
        const selectedIndex = e.target.options.selectedIndex;
        const councilId = e.target.options[selectedIndex].getAttribute('data-key')
        fetchCommunities(councilId)
        onChangeValue("CouncilId", councilId)
        onChangeValue("CouncilName", e.target.value)
    }

    const onChangeValue = (key, value) => {
        setCommunity((prev) => ({ ...prev, [key]: value }))
        console.log(community)
    }

    const onError = (err) => { console.log(err) }


    const onSubmit = (e, callback) => {
        e.preventDefault()
        let method = "POST"
        if (location.state) {
            method = "PUT"
        }
        fecthApi(endURL, method, community)
            .then(onCancel)
            .catch((err) => callback(err))
    }

    return (
        <form>
            <p>   <label htmlFor="councilSelect" className="tag" >Council <br></br></label>
                <select id="councilSelect" className={style.select} value={community.CouncilName} onChange={handleChange}   >
                    {
                        councils.map(council => <option value={council.Name} data-key={council.CouncilId} key={council.CouncilId} > {council.Name} </option>)
                    }
                </select></p>
            <p>   <label htmlFor="CommunitySelect" className="tag" >Conmmunity<br></br></label>
                <select id="CommunitySelect" className="select" value={community.Community} onChange={(e) => { onChangeValue("Community", e.target.value) }}   >
                    {Communities.map(item => <option value={item} key={item} > {item} </option>)}
                </select></p>
            <p>   <label htmlFor="Type" className="tag"> Type <br></br></label>
                <select id="Type" className="select" value={community.LocationTypeCode} onChange={(e) => onChangeValue("LocationTypeCode", e.target.value)} >
                    <option value={"community"}> Community</option>
                    <option value={"outstn"}> OutStation</option>
                </select></p>
            <p>   <label htmlFor="AddressType" className="tag"> AddressType <br></br></label>
                <select id="AddressType" className="select" value={community.UseLotNumbers} onChange={(e) => onChangeValue("UseLotNumbers", e.target.value)} >
                    <option value={true}> Lot Number</option>
                    <option value={false}> Street Number</option>
                </select></p>

            <p>   <label htmlFor="name" className="tag"> Name <br></br></label>
                <input id="name" type="text" className="input" value={community.Outstation} onChange={(e) => onChangeValue("Outstation", e.target.value)} />

            </p>

            <div> <button className="bt-add" onClick={(e) => onSubmit(e, onError)} >  Add </button>
                <span onClick={onCancel} className="cancel" >Cancel</span>  </div>
        </form >
    )
}

export default AddCommunities
