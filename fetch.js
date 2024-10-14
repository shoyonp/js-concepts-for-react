// 1. JSON => stringify, parse
const student = {
  name: "Purna",
  age: 19,
  fvtGames: ["survible", "role play", "action", "racing"],
};

const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [25, 29, 29, 176, 459, 26, 4395];
numbers.forEach((num) => console.log(num));
numbers.map((num) => num * 2);

// for of on array like object
// loop on an object using for in

// add or remove from an array
const products = [
  { name: "laptop", price: 32000, brand: "lenevo", color: "silver" },
  { name: "phone", price: 13000, brand: "HTC", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "black" },
  { name: "sunglass", price: 2000, brand: "raybon", color: "black" },
  { name: "camera", price: 20000, brand: "canon", color: "gray" },
];

const mewProduct = { name: "webcam", price: 87333, brand: "go pro" };

//  copy products arry and then add newProduct
const newProducts = [...products, newProduct];

// creat a new array without one speciific item
// remove phone creat a new array withoit the phone

const remaining = products.filter(p => p.name !== 'phone');