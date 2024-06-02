// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// const [E, S, M] = input[0].split(" ").map(Number);

// let e = 1, s = 1, m = 1;
// let count = 1;

// while (true) {
//   if (e === E && s === S && m === M) {
//     break;
//   }

//   e++;
//   s++;
//   m++;
//   count++;

//   if (e > 15) e = 1;
//   if (s > 28) s = 1;
//   if (m > 19) m = 1;
// }

// console.log(count);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [E, S, M] = input[0].split(" ").map(Number);

let year = 1;

while (true) {
  if ((year - E) % 15 === 0 && (year - S) % 28 === 0 && (year - M) % 19 === 0) {
    console.log(year);
    break;
  }
  year++;
}
