const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class Deque {
  constructor() {
    this.data = [];
  }

  push_front(x) {
    this.data.unshift(x);
  }

  push_back(x) {
    this.data.push(x);
  }

  pop_front() {
    return this.data.length === 0 ? -1 : this.data.shift();
  }

  pop_back() {
    return this.data.length === 0 ? -1 : this.data.pop();
  }

  size() {
    return this.data.length;
  }

  empty() {
    return this.data.length === 0 ? 1 : 0;
  }

  front() {
    return this.data.length === 0 ? -1 : this.data[0];
  }

  back() {
    return this.data.length === 0 ? -1 : this.data[this.data.length - 1];
  }
}

const deque = new Deque();
const commands = input.slice(1); 

let result = [];

commands.forEach(command => {
  const [cmd, value] = command.split(' ');
  switch (cmd) {
    case 'push_front':
      deque.push_front(parseInt(value));
      break;
    case 'push_back':
      deque.push_back(parseInt(value));
      break;
    case 'pop_front':
      result.push(deque.pop_front());
      break;
    case 'pop_back':
      result.push(deque.pop_back());
      break;
    case 'size':
      result.push(deque.size());
      break;
    case 'empty':
      result.push(deque.empty());
      break;
    case 'front':
      result.push(deque.front());
      break;
    case 'back':
      result.push(deque.back());
      break;
  }
});

console.log(result.join('\n'));
