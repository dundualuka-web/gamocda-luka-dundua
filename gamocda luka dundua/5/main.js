const sectionWrapper = document.querySelector(".wrapper");
const mail = document.getElementById("email");
const text = document.querySelectorAll(".text");
const btn = document.getElementById("submitBtn");

console.log(sectionWrapper);
console.log(mail);
console.log(text);
console.log(btn);

text.forEach((item) => {
  console.log(item);
});

const newElement = document.createElement("h3");

newElement.textContent = "User Panel";

newElement.setAttribute("class", "title");

sectionWrapper.append(newElement);
console.log(newElement);

sectionWrapper.style.border = "5px solid Purple";
sectionWrapper.style.padding = "25px";

text.forEach((text) => {
  text.style.color = "black";
});

btn.style.backgroundColor = "Purple";
btn.style.color = "white";

mail.addEventListener("focus", () => {
  console.log("Input is focused");
});

submitBtn.addEventListener("click", () => {
  console.log("Button was pressed");
});
