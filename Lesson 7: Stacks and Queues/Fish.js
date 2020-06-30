// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    const alive = [];
    
    alive.push(0);
    let i = 1;
    while(i < N){
        if(B[i] == 0 && B[alive[alive.length-1]] == 1){
            if(A[i] > A[alive[alive.length-1]]){
                alive.pop();
            }
            else{
                i++;
            }
        }
        else{
            alive.push(i);
            i++;
        }
    }
    
    return alive.length;
}