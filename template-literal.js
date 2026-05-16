let name = "Sola Agboola";
let city = "Lagos";
let job = "FrontDev";
let sentence = `My name is ${name}, I live in ${city} and I am a ${job}`;
console.log(`My name is ${name}, I live in ${city} and I am a ${job}`);

const firstName = "Emeka";
const lastName = "Obi";
const score = 87;
const total = 100;
const passed = score >= 50;
const msg = `Line one
Line two
Line three`;

console.log(`${firstName} ${lastName}`);

console.log(`${firstName} scored ${87} out of ${total}`);

console.log(`${firstName}: ${passed ? "Pased!" : "Failed!!"} `);
console.log(`${msg}`);

// const products = [
//   { name: "Laptop", price: 400000, inStock: true },
//   { name: "Mouse", price: 8000, inStock: false },
//   { name: "Keyboard", price: 15000, inStock: true },
// ];
// let results = products.map((product, index) => {
//   return `${product.name} — ${product.price} — ${product.inStock ? "Available" : "Out of stock"}`;
// });
// results.forEach((item) => console.log(item));

// const buildURL = (product) => {
//   return `https://api.shop.com/products/${product}`;
// };

// console.log(buildURL("laptop"));

// const order = {
//   id: 1042,
//   customer: {
//     name: "Sade",
//     contact: {
//       email: "sade@email.com",
//     },
//   },
// };

// const emptyOrder = null;

// console.log(order?.customer?.name);
// console.log(order?.customer?.phone?.number);

const product = {
  name: "Headphones",
  specs: {
    battery: "20hrs",
    // no colour, no weight
  },
  seller: null,
};

console.log(`${product?.specs?.battery ?? "Unknown"}`);
console.log(`${product?.specs?.colour ?? "Not Specified"}`);
console.log(`${product?.seller?.name ?? "No Seller info"}`);

const users = [
  { name: "Tolu", age: 23, address: { city: "Lagos" }, score: 91 },
  { name: "Ada", age: 21, address: null, score: 78 },
  { name: "Bayo", age: 28, address: { city: "Abuja" }, score: 65 },
];

const userStrings = users.map((user) => {
  return `${user?.name} lives in ${user?.address?.city ?? "Location Unknown"} and scored ${user.score}%`;
});

userStrings.forEach((item) => console.log(item));

const userPassed = users.filter((user) => {
  return user.score >= 70;
});

userPassed.forEach((item) => console.log(`${item.name} passed`));
const buildProfileUrl = (user) =>
  `https://app.com/profile/${user.name.toLowerCase()}`;

// Example:
console.log(buildProfileUrl(users[0]));

console.log(buildProfileUrl(users[1]));
