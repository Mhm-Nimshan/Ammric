import React, { memo } from 'react'
import Row from "./Row"


const Table = ({ data }) => {
    let keys = data.length > 0 ? Object.keys(data[0]) : [];
    console.log(data)
    return (
        <div style={{ marginTop: "30px", maxHeight: "60vh" }}>
            <Row isHeader={true} row={keys} />
            {data.map(row => <Row key={row} row={row} />)}
        </div>
    )
}

export default memo(Table)
