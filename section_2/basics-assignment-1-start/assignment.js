let userInput = 22; // can optionally use const b/c userInput does not change in this case
let result; // an uninitialized variable but is declared as a var

result = 18 + userInput;

result = result - 10; // or result -= 10
result = result * 4; // or result *= 4
result = result / 2; // or result /= 2

alert(result);
alert(userInput);