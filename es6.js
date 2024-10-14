const numbers = [37, 429, 19, 47];
const student = {
    name: 'Purna',
    age: 19,
    fvtGames:['survible', 'role play', 'action', 'racing']
}

// 1. template string
const about = `Her name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked games ${student.fvtGames[0]}`
console.log(about);

//  2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z; 
const doMath = (num1, num2) => {
    const sum = num1 +  num2;
    return sum; 
}

// spread operator
const newNumber = [...numbers];

//  creat a new array from an older array and an element
const currentNumbers = [...numbers, 66];

numbers.push(99);
numbers.push(99);
numbers.push(99);


console.log(numbers);
console.log(newNumber);
console.log(currentNumbers);