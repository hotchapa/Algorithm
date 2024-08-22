const maps = ["X591X", "X1X5X", "X231X", "1XXX1"];

function solution(maps) {
  let n = maps.length;
  let m = maps[0].length;
  
  let answer = [];
  const visited = Array.from({length:n}, ()=> Array(m).fill(false));
  
  
  function dfs(x,y){      
      let stack = [[x,y]];
      let ac = 0;

      while(stack.length > 0){
        let [cx,cy] = stack.pop();
        if(cx < 0 || cx >= n || cy < 0 || cy >= m || visited[cx][cy] == true || maps[cx][cy] == "X"){
          continue;
        } 
        ac += Number(maps[cx][cy]);
        visited[cx][cy] = true;

        for(let i = 0; i<4; i++){
          //상하좌우
          let dx = [1,-1,0,0];    
          let dy = [0,0,-1,1];
          let nx = dx[i] + cx;
          let ny = dy[i] + cy;
          stack.push([nx,ny])
      }
    }
    
    return ac;
  }
      
          

  
  for(let i =0; i<n; i++){
         for(let j =0; j<m; j++){
             if(!visited[i][j] && maps[i][j] != "X"){
                answer.push(dfs(i,j));
             }
         }
     }
  
  answer.sort((a,b)=>a-b);
  if(answer.length == 0){
    return [-1];
  }
  return answer;
}

solution(maps);
