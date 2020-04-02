// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    const totalSum = A.reduce((a, b) => a + b);
    let leftSum = A[0];
    let rightSum = totalSum - A[0];
    let minDiff = Number.MAX_SAFE_INTEGER;
    let diff;

    for(let P=1; P<N; P++){
        diff = Math.abs(leftSum - rightSum);
        if(diff < minDiff){
            minDiff = diff;
        }
        leftSum += A[P];
        rightSum -= A[P];
    }

    return minDiff;
}