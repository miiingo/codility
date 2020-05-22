// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    let values = new Set();
    
    for(let i=0; i<N; i++){
        values.add(A[i]);
    }
    
    return values.size;
}
