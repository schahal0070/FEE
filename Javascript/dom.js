const newSection2 = document.createElement("Section");
newSection2.id = "b";
newSection2.textContent= "Section2";

newSection2.classList.add("box");
newSection2.classList.add("bg1");
newSection2.classList.add("box", "bg1");

document.body.append(newSection2);
newSection2.style.color = "white";
newSection2.textContent += " 🤪";
document.body.prepend(newSection2);

const newSection3 = document.createElement("section");
newSection3.id = "c";
newSection3.classList.add("box", "bg1");
document.body.append(newSection3);
// document.body.prepend(newSection3);
newSection3.classList.remove("bg1")
newSection3.textContent = "Section3";
newSection3.style.backgroundColor = "seagreen";

newSection3.style.width = "20rem";
newSection3.style.height ="10rem";
newSection3.style.cssTect = "width:20rem; height:10rem";

const Section1 = document.getElementById("a");
document.body.insertBefore(newSection3, section1);

newSection2.remove();
document.getElementById("b").remove();
newSection2.style.cssText = "color: red, font-size: 20px";
//DOM Traversal
document.body.firstElementChild.style.color = "red";
document.body.lastElementChild.style.color = "red";
