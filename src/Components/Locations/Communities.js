import React from 'react'

import Table from "../Common/Table/Table"

const mockup = [{ Community: "1", Outstation: "2", Type: "Community", id: 1 },
{ Community: "1", Outstation: "2", Type: "Community", id: 2 },
{ Community: "1", Outstation: "2", Type: "Community", id: 3 },
{ Community: "1", Outstation: "2", Type: "Community", id: 4 },
{ Community: "1", Outstation: "2", Type: "Community", id: 5 },
{ Community: "1", Outstation: "2", Type: "Community", id: 6 },]

const Communities = ({ history }) => {

    const onEdit = () => {
        let url = "/locations/communities/edit"
        return (data) => {
            history.push({ pathname: url, state: { ...data } })
        }
    }

    const cols = ["Community", "Outstation", "Type"]

    const onClick = () => {
        history.push("/locations/communities/add")
    }

    return (
        <div>
            <div className="flex-between">
                <button className="bt-add" onClick={onClick} > Add</button>
                <span>
                    <label htmlFor="councilSelet" >Council: </label>
                    <select id="councilSelet" style={{ margin: 0 }}>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                    </select>
                </span>
                <span> No deleted</span>
            </div>
            <Table data={mockup} onEdit={onEdit()} cols={cols} />
        </div>
    )
}

export default Communities
