const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function findMinimumInsertion(str) {
    const len = str.length;
    for (let i = 0; i < len; i++) {
        const subStr = str.substring(i);
        if (isPalindrome(subStr)) {
            return len + i; // 팰린드롬이 되는 지점부터 문자열의 끝까지 추가해야 함
        }
    }
    return len * 2; // 팰린드롬이 없는 경우 문자열 전체를 추가해야 함
}

const answer = findMinimumInsertion(input);
console.log(answer);
