// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    let count = new Array(N+1).fill(0);
    
    for(let i in A){
        if(A[i] > N){
            return 0;
        }
        if(count[A[i]] > 0){
            return 0;
        }
        count[A[i]]++;
    }
    
    for(let i=1; i>N+1; i++){
        if(count[i] != 1){
            return 0;
        }
    }
    
    return 1;
}