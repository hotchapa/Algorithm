const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const [n, k] = input.shift().split(" ").map(x=> +x);
const arr = input.shift().split(" ").map(x=> +x);

function selectionSort(n, k, arr) {
  let swapList = [];
  for (let i = n - 1; i > 0; i--) {
      let maxIdx = 0;
      for (let j = 1; j <= i; j++) {
          if (arr[j] > arr[maxIdx]) {
              maxIdx = j;
          }
      }
      if (maxIdx !== i) {
          let temp = arr[i];
          arr[i] = arr[maxIdx];
          arr[maxIdx] = temp;
          swapList.push([arr[i], arr[maxIdx]].sort((a, b) => a - b));
      }
  }
  if (swapList.length < k) {
      console.log(-1);
  } else {
      console.log(swapList[k - 1].join(' '));
  }
}

selectionSort(n,k,arr)