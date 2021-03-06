import Communities from "./Components/Locations/Communities";

const path = {
  ADMIN: "/admin",
  PROGRAMS: "/programs",
  LOCATIONS: "/locations",
  SECURITY: "/security",
  PARAMETERS: "/parameter",
  SETTINGS: "/settings",
  HOME: "/home",
  USERPROFILE: "/userprofile",
  ANIMALDETAILS: "/animaldetails",
};

const subLinks = {
  locations: ["council", "communities"],
  security: ["Roles", "Users"],
  animaldetails: [
    "species",
    "breed",
    "gender",
    "age group",
    "size",
    "Repro status",
    "Microchip",
    "Colour",
  ],
};

export { subLinks };

export default path;
