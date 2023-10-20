// Write a program to find the sum of all the odd numbers for a given limit
// Program should accept an input as limit from the user and display the sum of all the odd numbers within that limit

const prompt=require("prompt-sync")();
var num=prompt("enter number");
var sum=0;

for(i=1 ; i<=num ; i++){
    if(i%2!=0){
        sum=sum+i;
    }
}

console.log("sum of odd number"+sum);