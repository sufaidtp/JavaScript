// Program should accept 3 inputs from the user and calculate 
// simple interest for the given inputs. Formula: SI=(P*R*n)/100)
const prompt =require ('prompt-sync')();
let P=parseInt(prompt("enter a principle amount"));
let R=parseFloat(prompt("enter rate of interest"));
let n=parseFloat(prompt("enter a numbers of years"));
let SI=parseFloat(simpleinterest(P,R,n));
console.log("simpleinterest: " +SI);


function simpleinterest(P,R,n){
    let SI=((P*R*n)/100);
    return SI;
}