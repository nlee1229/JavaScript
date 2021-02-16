const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

// The backticks are referred to as "template literal" which allows us to include dynamic values
let calculationDescription = `(${defaultResult} + 10)* 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);