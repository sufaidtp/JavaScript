// Write a program to print the following pattern

const prompt= require("prompt-sync")();
const n=parseInt(prompt("enter a nunber"));

for(let i=1;i<=n;i++){
    let r=" ";
    for(let j=1;j<=i;j++){
        r+=j+" ";


    }
    console.log(r);
}