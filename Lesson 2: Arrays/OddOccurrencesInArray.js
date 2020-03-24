// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let element = new Set();
    
    for(let i in A){
        if(!element.has(A[i])){
            element.add(A[i]);
        }
        else{
            element.delete(A[i]);
        }
    }
    
    const result = [...element];
    return result[0];
}