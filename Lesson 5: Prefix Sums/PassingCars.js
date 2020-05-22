// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let west_cars = 0;
    let passing_cars = 0;
    
    for(let i=A.length-1; i>=0; i--){
        switch(A[i]){
            case 0:
                passing_cars += west_cars;
                break;
            case 1:
                west_cars++;
                break;
        }
        if(passing_cars > 1000000000){
            return -1;
        }
    }
    
    return passing_cars;
}