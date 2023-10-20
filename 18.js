//  Grades are computed using a weighted average. Suppose 
// that the written test counts 70%,  lab exams 20% and assignments 10%

const prompt = require('prompt-sync')()
console.log("Enter the marks scored by the students");
let writtenTest =parseFloat(prompt("Written test = "));
let labExams=parseFloat(prompt("Lab exams = "));
let Assignments=parseFloat(prompt("Assignments = "));

let grade = ((writtenTest*70)/100 + (labExams*20)/100 + (Assignments*10)/100);
console.log("Grade of the student is "+grade);