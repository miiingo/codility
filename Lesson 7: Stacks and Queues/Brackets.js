// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = S.length;
    let stack = [];
    
    for(let i=0; i<N; i++){
        switch(S.charAt(i)){
            case '(':
            case '{':
            case '[':
                stack.push(S.charAt(i));
                break;
            case ')':
                if(stack[stack.length-1] == '('){
                    stack.pop();
                }
                else{
                    return 0;
                }
                break;
            case '}':
                if(stack[stack.length-1] == '{'){
                    stack.pop();
                }
                else{
                    return 0;
                }
                break;
            case ']':
                if(stack[stack.length-1] == '['){
                    stack.pop();
                }
                else{
                    return 0;
                }
                break;
        }
    }
    
    if(stack.length > 0){
        return 0;
    }
    else{
        return 1;
    }
}