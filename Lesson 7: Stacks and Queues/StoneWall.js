// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = H.length;
    let lastH = [];
    let blocks = 0;
    
    for(let i=0; i<N; i++){
        while(lastH.length > 0 && H[i] < lastH[lastH.length-1]){
            lastH.pop();
        }
        if(lastH.length <= 0 || H[i] > lastH[lastH.length-1]){
            lastH.push(H[i]);
            blocks++;
        }
    }
    
    return blocks;
}