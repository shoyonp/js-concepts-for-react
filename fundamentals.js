// 1. how to declare a variable using let and const
const fatherName = "Poritosh";
let season = "rainy";
season = "winter";

//  2. condition
// 6 basic condition >,<, ===, !==, <=, >=
// multiple conditioon: &&,  ||

if (fatherName === "poritosh" || season === "rainy") {
} else if (fatherName === "Poritosh") {
} else {
}

// 3. array
// index
// length, push,
const numbers = [37, 429, 24, 47];
numbers[0] = 53;

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}


// 5. function
function multiply(num1, num2){
    const result = num1 * num2;
    return  result;
}

const output = multiply(35, 78);

// 6. object
// 3 ways to access property by name
const student = {
    name: 'Purna',
    age: 19,
    fvtGames:['survible', 'role play', 'action', 'racing']
}

const myVariable = 'age'

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable