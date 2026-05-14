const names = ["Ada", "Tolu", "Emeka", "Sade", "Bayo"];
const scores = [45, 82, 30, 91, 67, 55, 78];

const nameUpper = names.map((name) => name.toUpperCase());

const passPeeps = scores.filter((score) => score > 60);

const greetNames = names.map((name) => `Hello  ${name}`);

const shortNames = names.filter((name) => name.length <= 3);

console.log(nameUpper);
console.log(passPeeps);
console.log(greetNames);
console.log(shortNames);
