// basic reduce use
var nums = [2, 3, 4, 5, 6];
var result = nums.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log(result);

// reduce with function block
var function_result = nums.reduce((accumulator, currentNumber) => { return accumulator + currentNumber; }, 0);
console.log(function_result);

// reduce with no initial value
var nums = [2, 3, 4, 5, 6];
var result = nums.reduce((accumulator, currentNumber) => accumulator + currentNumber);
console.log(result);

// reduce on a string
var word = ['h', 'e', 'l', 'l', 'o'];
var result = word.reduce((accumulator, currentNumber) => accumulator + currentNumber);
console.log(result);