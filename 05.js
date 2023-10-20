// Program should accept an input from the user and display their grade as follows

const prompt=require("prompt-sync")();
let mark=parseFloat(prompt("enter a mark :"));
if(mark>=90 && mark<=100){
    console.log("a grade");

}else if(mark>=80 && mark<=89){
    console.log("b grade");

}else if(mark>=70 && mark<=79){
    console.log('c grade');

}else if(mark>=60 && mark<=69){
    console.log('d grade');

}else if(mark>=50 && mark<=59){
    console.log('e grade');

}else if(mark<=50){
    console.log('filed');
}


