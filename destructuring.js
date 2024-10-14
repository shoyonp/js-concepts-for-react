// 1. array destructuring
const number = [42, 28];
// const x = number[0];
// const y = number[1];

// const [x, y] = [42, 28];
const [x, y] = [number];

function boxify(num1, num2){
    const nums = [num1, num2]
    return nums;
}

// const [frist, second] = [47, 39];
const [frist, second] = boxify(47, 39);

// console.log(boxify(47, 39));
const student = {
    name: 'Purna',
    age: 19,
    fvtGames:['survible', 'role play', 'action', 'racing']
}

// const [firstGame, secondGame] = ['survible', 'role play', 'action', 'racing'];
const [firstGame, secondGame] = student.fvtGames;

// objext destructuring
// const {name, age} = {name: 'purna', age: 19}; 
const {name, age} = { id: 19, name:'purna', salary: 35000, age: 19}; 

const employe ={
    id: 'vs code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification:{
        height: 88,
        weight: 57,
        address: 'newyork',
        drink: 'warter',
        watch:{
            color: 'black',
            price: 300,
            brand: 'gramin'
        }
    }
}

const {machine, id} = employe;
const {weight, address} = employe.specification;
const {brand} = employe?.specification?.watch;