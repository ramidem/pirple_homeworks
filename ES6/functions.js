// Syllogism
let mortalMen = ["Socrates", "Aristotle", "Plato"];

let isMortal = (name = "name", arr = mortalMen) =>
  arr.some((man) => man.toLowerCase() == name.toLowerCase());

let titleCase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

let syllogism = (name) => {
  if (isMortal(name)) {
    return `All men are mortal.\n${titleCase(
      name
    )} is a man.\nTherefore, ${titleCase(name)} is a mortal.`;
  } else {
    return `This man is unknown`;
  }
};

console.log(isMortal("socrates"));
console.log(isMortal(""));
console.log(syllogism("socrates"));
console.log(syllogism("aRisTotLE"));
console.log(syllogism("PLATO"));
console.log(syllogism("Elon Musk"));

