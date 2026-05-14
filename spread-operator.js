const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node", "Python", "SQL"];

const fullStack = ["React", ...frontend, ...backend, "MongoDB"];
console.log(fullStack);

const mySkills = [...frontend];
mySkills.push("Typescript");

console.log(frontend);

console.log(mySkills);

const product = {
  name: "Laptop",
  brand: "HP",
  price: 400000,
  inStock: true,
};

const productCopy = { ...product };
console.log(productCopy);

const saleProduct = { ...product, price: 320000 };
console.log(saleProduct);

const outOfStock = { ...product, inStock: false, reason: "sold out" };
console.log(outOfStock);

console.log(product);

const multiply = (...numbers) => {
  return numbers.reduce((total, n) => total * n, 1);
};

console.log(multiply(2, 4, 2, 0.5));
