import {
  namesMale,
  surnamesMale,
  namesFemale,
  surnamesFemale,
} from "../data/data.js";

function generateMaleNameSurname() {
  const randomMaleName =
    namesMale[Math.floor(Math.random() * namesMale.length)];
  const randomMaleSurname =
    surnamesMale[Math.floor(Math.random() * surnamesMale.length)];
  console.log(`${randomMaleName} ${randomMaleSurname}`);
  return `${randomMaleName} ${randomMaleSurname}`;
}
function generateFemaleNameSurname() {
  const randomFemaleName =
    namesFemale[Math.floor(Math.random() * namesFemale.length)];
  const randomFemaleSurname =
    surnamesFemale[Math.floor(Math.random() * surnamesFemale.length)];
  console.log(`${randomFemaleName} ${randomFemaleSurname}`);
  return `${randomFemaleName} ${randomFemaleSurname}`;
}

export { generateMaleNameSurname, generateFemaleNameSurname };
