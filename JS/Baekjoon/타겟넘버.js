function solution(numbers, target) {
  return dfs(numbers, target, 0, 0);
}

function dfs(numbers, target, index, sum) {
  if(index == numbers.length) {
      return sum == target ? 1 : 0;
  }

  return dfs(numbers, target, index + 1, sum + numbers[index]) + 
          dfs(numbers, target, index + 1, sum - numbers[index]);
}


