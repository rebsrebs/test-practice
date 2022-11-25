function calculator(a,b, op) {
  if (op === 'sum') {
    return a + b;
  } else if (op === 'subtract') {
    return a - b;
  } else if (op === 'multiply') {
    return a * b;
  } else if (op === 'divide') {
    return a/b;
  }
}

export default calculator; 