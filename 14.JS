// Write a program to add to two dimensional arrays
const prompt=require("prompt-sync")()

let size=prompt("enter a size of array")
let arr1=[];
let arr2=[];
console.log('enter the array 1 elements:')
for(let i=0;i<size;i++){
    arr1[i]=[]
    for(j=0;j<size;j++){
        arr1[i][j]=parseInt(prompt(""));
    }
}

console.log("Enter the array 2 elements :");
for(let i=0;i<size;i++){
    arr2[i]=[]
    for(let j=0;j<size;j++){
        arr2[i][j]=parseInt(prompt(""));
    }
}
let sum=[]
for(let i=0;i<size;i++){
    sum[i]=[]
    for(let j=0;j<size;j++){
        sum[i][j]=arr1[i][j]=arr2[i][j];

    }
}
console.log('sum of two array');
console.log(sum);