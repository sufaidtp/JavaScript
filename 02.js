const prompt=require("prompt-sync")()
// accept two inputs from the user and output their sum.

const num1 =parseInt(prompt("enter a number"))
const num2 =parseFloat(prompt("enter a number"))
const sum=num1 + num2
console.log(sum)