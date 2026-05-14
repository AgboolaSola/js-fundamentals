const student = {
  name: "Emeka",
  course: "Frontend Dev",
  age: 21,
  city: "Abuja",
};

const { name, course } = student;
console.log(name, course);

const { grade = "95" } = student;
console.log(grade);
const { city: userLocation } = student;
console.log(userLocation);

const marks = [95, 80, 72, 60, 45];
const fruits = ["mango", "pawpaw", "banana", "orange"];

const [first, second] = marks;
const [, secondFruit] = fruits;
const [firstFruit, ...otherFruits] = fruits;

console.log(first, second, secondFruit, firstFruit, otherFruits);

const product = {
  name: "Laptop",
  price: 400000,
  brand: "HP",
  inStock: true,
};

const showProduct = ({ name, price, brand }) => console.log(name, price, brand);
showProduct(product);

const checkStock = ({ name, inStock }) =>
  console.log(inStock ? `${name} is avaible` : `${name} is not availble`);
checkStock(product);

const order = {
  id: 1042,
  item: "Headphones",
  buyer: {
    buyername: "Ada",
    city: "Port Harcourt",
  },
};

const {
  item,
  buyer: { buyername, city },
} = order;
console.log(`${buyername} bought ${item} from ${city}`);

const teams = [
  { name: "Tolu", role: "Designer", score: 88 },
  { name: "Emeka", role: "Developer", score: 95 },
  { name: "Sade", role: "Manager", score: 76 },
  { name: "Bayo", role: "Developer", score: 91 },
];

const teamRole = teams.map(({ name, role }) => {
  return `${name} is a ${role}`;
});

console.log(teamRole);

const developers = teams.filter(({ role }) => role === "Developer");
console.log(developers);

const passMark = teams.filter(({ score }) => score > 90);
console.log(passMark);

const [{ name, role, score }] = teams;
console.log(name, role, score);
