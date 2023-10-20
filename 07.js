const prompt=require("prompt-sync")();

// Write a program to print the multiplication table of given numbers.

let num =prompt("enter a number");

for(i=1;i<=10;i++){
    let multiplication=num*i;
    console.log(i+"x"+num+"="+multiplication+"\n");
}