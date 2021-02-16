const defaultResult = 0;
let currentResult = defaultResult;

function addNums(num1, num2) {  // defining a function (can have as many params)
    const result = num1 + num2;
    alert('The result is ' + result);
}

addNums(2,5); // calling a function
addNums(3,3);

currentResult = (currentResult + 10) * 3 / 2 - 1;

// The backticks are referred to as "template literal" which allows us to include dynamic values
let calculationDescription = `(${defaultResult} + 10)* 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
