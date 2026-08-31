"use strict";
console.clear();
console.log();

//
const { grade, showMsg } = require("./mymodule.js");
 
//
const prompt = require("prompt-sync")();
const marks = parseFloat(prompt("Enter marks: "));

let str = "";
let result = "";

if (marks >= 0 && marks <=100){
    result = grade(marks);
    str = `Grade is $(result)`;
}
else{
    str = "Invalid Input";
}
showMsg(str);
console.log();