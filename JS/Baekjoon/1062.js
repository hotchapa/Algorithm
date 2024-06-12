// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split("\n");
// let [N,K] = input.shift().split(" ").map(Number);
// let words = input.slice(0).map((e)=>e.split(""));
// let learndWords = ["a","n","t","i","c"];
// K -= learndWords.length;

// let alph = new Map();

// alph = {"a" : 1,"b" : 0,"c" : 1,"d" : 0,"e" : 0,"f" : 0,"g" : 0,"h" : 0,"i" : 1,"j" : 0,"k" : 0,"l" : 0,"m" : 0,"n" : 1,"o" : 0,"p" : 0,"q" : 0,"r" : 0,"s" : 0,"t" : 1,"u" : 0,"v" : 0,"w" : 0,"x" : 0,"y" : 0,"z" : 0}

// for(let x of words){
//   for(let i = 0; i<x.length; i++){
//     for(let j = 0; j<learndWords.length; j++){
//       if(x[i] != learndWords[j]){
//         alph[x[i]] += 1;
//       }
//     }
//   }
// }
// console.log(typeof(alph));
// let alphArray = [...alph];
// alphArray.sort((a,b)=> a[1]-b[1]);
// console.log(alphArray);


const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, K] = input.shift().split(" ").map(Number);
let words = input.slice(0).map((e)=>e.split(""));

// 기본으로 알아야 할 문자
const baseLetters = new Set(["a", "n", "t", "i", "c"]);
K -= baseLetters.size;

if (K < 0) {
    console.log(0);
    process.exit();
}
// 모든 문자 중 baseLetters에 포함되지 않는 문자만 추출
let uniqueLetters = new Set();
words.forEach(word => {
    word.forEach(char => {
        if (!baseLetters.has(char)) {
            uniqueLetters.add(char);
        }
    });
});

let uniqueLettersArray = Array.from(uniqueLetters);
let maxReadableWords = 0;

const canReadAllWords = (learnedSet) => {
    return words.reduce((count, word) => {
        return word.every(char => learnedSet.has(char)) ? count + 1 : count;
    }, 0);
};

const backtrack = (start, learnedSet) => {
    if (learnedSet.size - baseLetters.size === K) {
        maxReadableWords = Math.max(maxReadableWords, canReadAllWords(learnedSet));
        return;
    }

    for (let i = start; i < uniqueLettersArray.length; i++) {
        if (!learnedSet.has(uniqueLettersArray[i])) {
            learnedSet.add(uniqueLettersArray[i]);
            backtrack(i + 1, learnedSet);
            learnedSet.delete(uniqueLettersArray[i]);
        }
    }
};

if (uniqueLettersArray.length <= K) {
    maxReadableWords = N;
} else {
    let learnedSet = new Set(baseLetters);
    backtrack(0, learnedSet);
}

console.log(maxReadableWords);
