const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumber = require("../factorial/index.js");
let ratioAndFactorial = (num1, num2, num3) => ({
  ration: ratioOfTwoNumbers(num1, num2),
  factorial: factorialOfNumber(num3),
});
module.exports = ratioAndFactorial;
//console.log(ratioAndFactorial(4, 2, 5));
