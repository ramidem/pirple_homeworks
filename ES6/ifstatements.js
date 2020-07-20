// Syllogism
let men = [
  {
    philosopher: "Socrates",
    isMortal: true,
  },
  {
    philosopher: "Aristotle",
    isMortal: true,
  },
  {
    philosopher: "Plato",
    isMortal: true,
  },
];

console.log("All men are mortal.");
if (men[0].philosopher === "Socrates") {
  console.log("Socrates is a man.");
  if (men[0].isMortal) {
    console.log("Therefore, socrates is a mortal");
  }
}

// Extra Credit
let isVanillaCake = true;

if (isVanillaCake || !isVanillaCake) {
  console.log("This cake is either vanilla or chocolate.");
} else if (isVanillaCake) {
  console.log("This cake is not chocolate.");
} else {
  console.log("Therefore, this cake is vanilla.");
}
