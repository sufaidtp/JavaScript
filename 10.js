// Write a program to interchange the values of two arrays.
// Program should accept an array from the user, swap the values of two arrays and display it on the console

const prompt=require("prompt-sync")();

const s=parseInt(prompt("enter size of array"));
let arr1=[]
let arr2=[]
console.log('enter the value of array1');
for(let i=0;i<s;i++){
    arr1.push(prompt())

}
console.log('enter the value of arry 2');
for(let i=0;i<s;i++){
    arr2.push(prompt())
}

for(i=0;i<s;i++){
let temp=arr1[i];
arr1[i]=arr2[i];
arr2[i]=temp;
}

console.log("array 1 after swapping"+arr1);
console.log("array 2 after swapping"+arr2);