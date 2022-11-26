// function calculator(a,b, op) {
//   if (op === 'sum') {
//     return a + b;
//   } else if (op === 'subtract') {
//     return a - b;
//   } else if (op === 'multiply') {
//     return a * b;
//   } else if (op === 'divide') {
//     return a/b;
//   }
// }

const Calculator = function(a, b, op) {

  const sum = () => a + b;
  const subtract = () => a - b;
  const multiply = () => a * b;
  const divide = () => a / b;

  let result = '';
  if (op === 'sum') {
    result = sum
  } else if (op === 'subtract') {
    result = subtract;
  } else if (op === 'multiply') {
    result = multiply;
  } else if (op === 'divide') {
    result = divide;
  }

  return { result};

};



// export default calculator; 
// export default Calculator; 