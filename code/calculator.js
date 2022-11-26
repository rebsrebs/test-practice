
//calculator created with object initializer
const calculator = {
  add: (numA, numB) => numA + numB,
  sub: (numA, numB) => numA - numB,
  mul: (numA, numB) => numA * numB,
  div: (numA, numB) => numA / numB,
}

export default calculator;

// add: (numA, numB) => {
//   if (!isNaN(numA) && !isNaN(numB)) {
//     return numA + numB;
//   } else {
//     return 'error';
//   }
// },