// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = S.length;
    const charOpen = '(';
    const charClose = ')';
    let stack = [];
    
    for(let i=0; i<N; i++){
        if(S.charAt(i) == charOpen){
            stack.push(i);
        }
        if(S.charAt(i) == charClose){
            if(stack.length > 0){
                stack.pop();
            }
            else{
                return 0;
            }
        }
    }
    
    if(stack.length > 0){
        return 0;
    }
    else{
        return 1;
    }
}