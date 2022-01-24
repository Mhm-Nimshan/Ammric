import Communities from "./Components/Locations/Communities";

const path = {
    ADMIN: "/admin",
    PROGRAMS: "/programs",
    LOCATIONS: "/locations",
    SECURITY: "/security",
    PARAMETERS: "/parameter",
    SETTINGS: "/settings",
    HOME: "/home",
    USERPROFILE: "/userprofile"
}

const subLinks = {
    locations: [
        {name: "Councils", url: "Councils"},
        {name: "Communities", url: "Communities"},
    ],
    security: [
        {name: "Roles", url: "Roles"},
        {name: "Users", url: "Users"},
    ],
    admin: [
        {name: "Locations", url: "Locations" ,

             children: [{name: "Councils" , url: "Councils"}, {name:"Communities" , url:"Communities"}]},

        {name: "Animal Details", url: "AnimalDetails" ,

             children: [{name: "species" , url: "species"}, {name: "Breed" , url: "Breed"}, {name:"Gender" , url: "Gender"}, 
             {name: "Age Group" , url: "AgeGroup"}, {name: "Size" , url: "Size"} , {name: "Repro Status", url:"ReproStatus"} , 
            {name: "Microchip" , url: "Microchip"} , {name: "Colour" , url: "Colour"} ]},

        {name: "Animal Conditions", url: "AnimalConditions"},
        {name: "Animal Behaviours", url: "AnimalBehaviours"},
        {name: "Animal Body Parts", url: "AnimalBodyParts"},
        {name: "Clinical Notes", url: "ClinicalNotes"},
        {name: "Security", url: "Security"},
        {name: "Settings", url: "Settings"},
        {name: "Programs", url: "Programs"},
    ]    
}
// const childLink = {
//     LocationChild: ["Councils" , "Communities"],
//     AnimalDetChild: ["Species" , "Breed" , "Gender" ,"Age group" , "Size" , "Repro Status" , "Microchip" , "Status"],   
//     AnimalConChild: ["Condition types" , "Condition Values"],
//     AnimalBehChild : ["Behaviour types" , "Behaviour Values"],
//     AnimalBodChild : ["Body Part types" , "Body parts"],
//     CLinicalNoteChild : ["Problems" , "Procedures", "Treatments"],
//     SecurityChild : ["Roles" , "Users"],
//     SettingsChild : ["System" , "Branding" , "Application" , "Data sync"]
// }

// export {childLink} ;
export { subLinks };

export default path;