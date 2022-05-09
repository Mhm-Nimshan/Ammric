import React from 'react'
import Card from "./Card"
import style from "./card.module.css"


const menu = [{
    title: "Animal Details",
    description: "Species, Gender, Age Groups,Size, Repro Status, Microchip and Colour",
    url: "animal"
}, {
    title: "Conditions",
    description: "ConditionTypes and Condition Values",
    url: "conditions"
}, {
    title: "Behaviours",
    description: "Behaviour Types and Behaviours",
    url: "behaviours"
}, {
    title: "Body Parts",
    description: "Body Part Types and Body Parts",
    url: "parts"
}, {
    title: "Clinical Notes",
    description: "Problems, Procedures, Treatments Cliinical Note Tempaltes",
    url: "notes"
},


]


const index = () => {
    return (
        <div className={style.container}>

            {menu.map(item => <Card key={item.title} title={item.title} description={item.description} url={`/parameter/${item.url}`} />)}
        </div>
    )
}

export default index
