// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const set = new Set(A);
    const size = set.size;
    
    for(let i=1; i<=size; i++){
        if(!set.has(i)){
            return i;
        }
        continue;
    }
    
    return size+1;
}
