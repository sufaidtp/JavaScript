// Using the ‘switch case’ write a program to accept an
//  input number from the user and output the day as follows. 

const prompt= require ("prompt-sync")();

let day=prompt('day is:');
switch(day){
    case "1":console.log("sunday");
    break;
    case "2":console.log("monday");
    break;
    case "3":console.log("tuesday");
    break;
    case "4":console.log("wednesday");
    break;
    case "5":console.log("thursday");
    break;
    case "6":console.log("friday");
    break;
    case "7":console.log("saturday");
    break;
    default:console.log("enter a valied number");
}