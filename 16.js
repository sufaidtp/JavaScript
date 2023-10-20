// Write a program to check whether a given number is prime or not

const prompt= require("prompt-sync")()
let num=parseInt(prompt("enter a number"));
let flag=0;

if(num<=1){
    flag=1;

}else{
    for(let i=2;i<num;i++){
        if(num%i==0){
            flag=1;
            break;
        }
    }
}

if(flag==0){

    console.log(num+"is a prime number");

}else{
    console.log(num+"is not prime number");
}