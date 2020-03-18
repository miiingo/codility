// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const resultA = Math.ceil(A / K);
    const resultB = Math.ceil((B+1) / K);
    const result = resultB - resultA;
    
    return result;
}