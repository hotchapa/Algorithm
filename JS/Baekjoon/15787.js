const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split("\n")
const [N,M] = input.shift().split(" ").map(Number);
const commands = input.map((e)=> e.split(" ").map(Number))
let trains = Array.from({length:N}, ()=>Array(20).fill(0));

function firstOrder(x){
  let trainNum = x[1]-1;
  let trainSeat = x[2]-1;
  if(trains[trainNum][trainSeat] == 0){
    trains[trainNum][trainSeat] = 1;
  }
}

function secondOrder(x){
  let trainNum = x[1]-1;
  let trainSeat = x[2]-1;
  if(trains[trainNum][trainSeat] == 1){
    trains[trainNum][trainSeat] = 0;
  }
}

function thirdOrder(x){
  let trainNum = x[1]-1;
  let tempTrain = [...trains[trainNum]]
  trains[trainNum][0] = 0;

  for(let i = 1; i<20; i++){
    trains[trainNum][i] = tempTrain[i-1]; 
  } 
}

function fourthOrder(x){
  let trainNum = x[1]-1;
  let tempTrain = [...trains[trainNum]]
  trains[trainNum][19] = 0;

  for(let i = 18; i>=0; i--){
    trains[trainNum][i] = tempTrain[i+1]; 
  } 
}

function determineOrder(commands){
  for(let x of commands){
    if(x[0] === 1){
      firstOrder(x);
    }
    if(x[0] === 2){
      secondOrder(x);
    }
    if(x[0] === 3){
      thirdOrder(x);
    }
    if(x[0] === 4){
      fourthOrder(x);
    }
  }
}

determineOrder(commands)

let trainSet = new Set();

trains.forEach((train) => {
    trainSet.add(train.join('')); // Join을 안하면, 배열(객체)상태로 들어가고, 배열은 참조에 의해 비교되므로 다른 참조로 간주되므로 중복 제거가 안됨.
});

console.log(trainSet.size);

// 어떻게 풀것인가?
// 함수를 나눠볼까?
// 각 명령 로직을 함수로 표현
// 앞자리 숫자가 중요, 1번 명령인지, 2번인지... 판단할 함수가 필요
// 판단이 끝났으면,명령에 맞는 함수를 호출
// 중복을 없앰
// 최종 결과 출력

// 비어있는 열차도 고려
// 예제 답이 2인 이유임..
// 그니까 결국 중복만 없애면 되는거네