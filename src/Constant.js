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
  security: ["roles", "users"],
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

// const childLink = {
//   LocationChild: ["Councils", "Communities"],
//   AnimalDetChild: [
//     "Species",
//     "Breed",
//     "Gender",
//     "Age group",
//     "Size",
//     "Repro Status",
//     "Microchip",
//     "Status",
//   ],
//   AnimalConChild: ["Condition types", "Condition Values"],
//   AnimalBehChild: ["Behaviour types", "Behaviour Values"],
//   AnimalBodChild: ["Body Part types", "Body parts"],
//   CLinicalNoteChild: ["Problems", "Procedures", "Treatments"],
//   SecurityChild: ["Roles", "Users"],
//   SettingsChild: ["System", "Branding", "Application", "Data sync"],
// };

// export { childLink };
export { subLinks };

export default path;
