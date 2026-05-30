const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

console.log(` ${day}/${month}/${year}`);

const name = "ilarion";
const upperName = name.toUpperCase();

console.log(` ${upperName}`);

window.addEventListener("DOMContentLoaded", () => {
  const savedText = localStorage.getItem("userText");
  if (savedText) {
    console.log(savedText);
  } else {
  }
});

document.getElementById("saveBtn").addEventListener("click", function () {
  const inputValue = document.getElementById("myInput").value;
  localStorage.setItem("userText", inputValue);
});

window.addEventListener("load", () => {
  const savedText = localStorage.getItem("userText");
  console.log(savedText);
});

let count = 1;

// const timer = setInterval(() => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }, 1000);
