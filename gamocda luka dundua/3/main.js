let students = [
  "ana",
  "levani",
  "gio",
  "nuca",
  "alexandre",
  "ika",
  "sandro",
  "lizi",
];

let shortName = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].length > 4) {
    shortName.push(students[i]);
  }
}
console.log(shortName);
shortName.push("asd");
shortName.unshift("123");
console.log(shortName);

let ages = [12, 25, 18, 31, 7, 44, 29, 16];

let odd = ages.filter((a) => a % 2 === 1);
console.log(odd);

let arrayOne = [15, 3, -8, 22, 1];
let arrayTwo = [7, -2, 30, 11, 5];
let all = [...arrayOne, ...arrayTwo];

all.sort((a, b) => b - a);
console.log(all);

for (const c of all) {
  console.log(c);
}
