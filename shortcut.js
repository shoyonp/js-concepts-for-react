// 'purna', 16, true, {}, []
// '', 0, flase, null, undefined
//  check truthy
let myVar = 5;
// check any truthy
if(myVar){
    myVar = myVar*100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negetive or falsy anything
if(!myMoney){

}

const money = 800;
let food;
if(money > 100){
    food = 'biriyani';
}
else{
    food = 'cha';
}

// ternary 
let food1 = money > 100 ? 'biriyani' : 'cha';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// num to string convertion
const num1 = 736;
// console.log(num1);
const numsrt = num1 + '';
// console.log(numsrt);

//  string to number  
const input = '560';
const inputnum = +input;
// console.log(inputnum);

// 
let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();
// use && if left side is ttue then rignt side will be executed
isActive && showUser();
// use ||  if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;