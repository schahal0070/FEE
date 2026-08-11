console.clear();

const prompt = require("prompt-sync")();

const section = "G4";

console.log("\nEnter student details");

let students = [];

{
    let id = parseInt(prompt("Enter id: "));
    let name = prompt("Enter name: ");
    let cgpa = parseFloat(prompt("Enter CGPA: "));

    let student = { id, name, cgpa };
    students = [...students, student];

    console.log("One object entered into Array");
}

console.log("Master Entry Completed");

var [a] = students;

console.log(`\nId : ${a.id} \nName : ${a.name} \nCGPA : ${a.cgpa}`);

console.log("\nNow update MarksBase");

const maxMarks = 100;

let marksBase = [];

{
    let idValue = parseInt(prompt("Enter Id: "));
    let dbmsMarks = parseInt(prompt("Enter DBMS Marks: "));
    let feeMarks = parseInt(prompt("Enter FEE2 Marks: "));

    let sMarks = {
        id: idValue,
        dbms: dbmsMarks,
        fee: feeMarks
    };

    marksBase.push(sMarks);

    console.log("\nMarks Base Completed");
}

function fAverage(dbmsMarks, feeMarks) {
    let average = (dbmsMarks + feeMarks) / 2;
    return average;
}

function fGrade(average) {
    let grade = "";

    if (average >= 90)
        grade = "O";
    else if (average >= 80)
        grade = "A+";
    else if (average >= 70)
        grade = "A";
    else
        grade = "B";

    return grade;
}

let srNo = 1;

console.log("\nResult");
console.log("SrNo.\tId\tName\tDBMS\tFEE\tAvg\tGrade");

for (let element1 of students) {

    for (let element2 of marksBase) {

        if (element2.id === element1.id) {

            var dbms = element2.dbms;
            var fee = element2.fee;

            var average = fAverage(dbms, fee);

            var grade = fGrade(average);

            
            break;
        }
    }

    console.log(
        `${srNo}\t${element1.id}\t${element1.name}\t${dbms}\t${fee}\t${average}\t${grade}`
    );

    srNo++;
}

console.log();