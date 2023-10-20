const prompt=require("prompt-sync")()

// Write a program to sort an array in descending order

let s=parseInt(prompt("enter the size of array"))
let arr=[]
console.log("enter the elements")
for(let i=0;i<s;i++){
    arr.push(prompt())

}
for(i=0;i<s;i++){
    for(let j=i+1;j<s;j++){
        if(arr[i] < arr[j]){

            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp

        }
    }
   
    
} 
console.log("sotred array is "+arr)