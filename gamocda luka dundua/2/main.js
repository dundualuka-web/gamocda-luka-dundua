const button = document.querySelector(".button");
button.addEventListener("click", () => {
  console.log("Button pressed");
});

const input = document.querySelector(".input");
input.addEventListener("blur", () => {
  console.log(input.value);
});

let score = 99;
if (score > 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
