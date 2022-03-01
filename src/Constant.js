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

  // ANIMALDETAILS:"/animaldetails"
};

const subLinks = {
  locations: ["council", "communities"],
  security: ["roles", "users"],
  admin: ["locations", "security", "settings", "programs"],
};

export { subLinks };

export default path;
