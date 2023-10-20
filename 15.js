// Write a program to accept an array and display it on the console using functions

const prompt= require("prompt-sync")()

function main(){
    let arr=[];
    getArray(arr);
    displayArray(arr);
}

function getArray(arr){

    let size=parseInt(prompt("enter a size of array"));
    console.log("enter the elements");
    for(let i=0;i<size;i++){
        arr[i]=parseInt(prompt(""));
    }
}

function displayArray(arr){
    console.log('enterd array is :');
    console.log(arr);
}

main();