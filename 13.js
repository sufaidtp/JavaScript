// Write a program to identify whether a string is a palindrome or not

const prompt=require("prompt-sync")();

let string=prompt("enter a string");
let reverse=string.split("").reverse().join("");
if(string==reverse){
    console.log("the given string is palindrome");

}else{
    console.log("string is not palindrome");
}