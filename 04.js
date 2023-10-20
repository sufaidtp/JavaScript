// Write a program to check whether a student has passed or failed in a
//  subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).


const prompt= require("prompt-sync")();
let mark=prompt("enter a mark");
if(mark<50){
    console.log("failed");
}else{
    console.log("passed");

    }




