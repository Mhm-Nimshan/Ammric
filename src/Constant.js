const path = {
    ADMIN: "/admin",
    PROGRAMS: "/programs",
    LOCATIONS: "/locations",
    SECURITY: "/security",
    PARAMETERS: "/parameter",
    SETTINGS: "/settings",
    HOME: "/"
}

const subLinks = {
    locations: ["council", "communities"],
    security: ["roles", "users"],
    admin: ["Locations" , "Animal details" , "Animal conditions" , "Animal behaviours" , "Animal body parts" , "Clinical Notes" ,"Security", "Settings" , "Programs"]
}

export { subLinks };

export default path;