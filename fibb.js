//write code to print fibonaci
// 011235

let n = 15;
let a = 0;
let b = 1;
let nextNum = 0;

for (let index = 1; index < n; index++) {
    nextNum = a + b;
    a = b;
    b = nextNum;
    
}

console.log(b);