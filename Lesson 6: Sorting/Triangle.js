// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    const arr = A.slice();
    
    arr.sort((a, b) => a - b );
    
    for(let i=0; i<N-2; i++){
      if(arr[i] < 0){
        continue;
      }
      if(arr[i]+arr[i+1] > arr[i+2]){
          return 1;
      }
    }
    
    return 0;
}