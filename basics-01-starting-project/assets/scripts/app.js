const defaultResult = 0;
let currentResult = defaultResult;

defaultResult = (currentResult + 10) * 3;

let calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';

outputResult(currentResult, calculationDescription);