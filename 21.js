// Write a program to multiply the adjacent values 
// of an array and store it in an another array

const prompt= require("prompt-sync")()
let size=prompt('enter a array size');
let arr=[]
let multi=[]
console.log("enter a array");
for(let i=0;i<size;i++){
    arr.push(prompt(""));
}
for(i=0;i<size;i++){
    multi[i]=arr[i]*arr[i+1];
}
console.log("result is :"+multi);