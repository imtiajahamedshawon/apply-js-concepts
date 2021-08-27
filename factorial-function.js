let factorial =1;
for(let i =1; i <=5; i ++){
    factorial = factorial * i;
}
console.log(factorial);

function factorial (number){
    let factorial = 1;
    for(i = 1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var firstFactorial = factorial(7);
console.log('factorial of 7 is', firstFactorial );

var secondFactorial = factorial(9);
console.log('factorial of 9 is', secondFactorial);  