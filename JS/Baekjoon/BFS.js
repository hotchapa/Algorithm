
const graph = [
  [],
  [2,3,4],
  [1],
  [1,5,6],
  [1,7],
  [3,8],
  [3],
  [4],
  [5]
]
let visited = new Array(graph.length).fill(false);
function bfs(graph,start,visited){
  queue = new Queue();
  queue.enqueue(start);

  // 현재 노드 방문 처리
  visited[start] = true;
  // 큐가 빌 때 까지 반복
  while(queue.getLength() != 0){
    v = queue.dequeue();
    console.log(v);
    for(let i of graph[v]){
      if(!visited[i]){
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
}

bfs(graph,1,visited)