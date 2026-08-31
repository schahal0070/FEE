"use strict";
console.clear();
console.log();

import { grade, showMsg } from "/mymodule.js";

import promptSync from "prompt-sync";
const prompt = promptSync();

const marks = parserFloat(prompt("Enter Marks : "));

let str = "";
let result = "";

if(marks >= 0 && marks <= 100){
    result = grade(marks);
    str = `Grade is $(result)`;
}
else{
    str = "Invalid Input";
}
showMsg(str);

console.log();