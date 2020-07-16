//outputs NaN: not a number
// let num1 = +process.argv[2];
// let num2 = +process.argv[3];
// console.log(num1+num2)

//ex 1
// var today = new Date();
// console.log(today)

//ex 2
// function randomNumber(min, max) {  
//     return Math.floor(Math.random() * (max - min) + min); 
// }  
// console.log(randomNumber(1,100))

//ex 3 , outputs 12
// let num1 = +process.argv[1];
// let num2 = +process.argv[2];
// console.log(num1+num2)

//or
const argumentList = process.argv;
const addThese = argumentList.slice(2,argumentList.length);

let sum = 0;
let solution = addThese.forEach((value) => {
  // convert to a number
  sum += Number(value);
  return sum;
});

console.log(sum);

//ex 4
// let string = process.argv[3]
// if()
