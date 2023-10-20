// Write a program to find the number of even numbers in an array
// Program should accept an array and display the number of even numbers contained in that array
const prompt=require("prompt-sync")();

let s=parseInt(prompt("enter a size of array"))
let arr=[]
var count=0
console.log("enter elements in array")
for(let i=0;i<s;i++){
    arr.push(prompt())

}
for(i=0;i<s;i++){
    if(arr[i]%2==0){
        count++
    }
}
console.log('the count of even number is '+count)