
//calculator created with object initializer
//add is name of function
const calculator = {
  add: (numA, numB) => {
    if (!isNaN(numA) && !isNaN(numB)) {
      return numA + numB;
    } else {
      return 'error';
    }
  },
  sub: (numA, numB) => numA - numB,
  mul: (numA, numB) => numA * numB,
  div: (numA, numB) => numA / numB,
  
}

// export default calculator;