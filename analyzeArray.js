function analyzeArray(array){

  // make sure array has numbers
  if (!array.some(isNaN) === false) {
    return 'array must only contain numbers';
  } else {
    let length = array.length;
    let sum = 0;
    for (let i=0;i<length;i++){
      console.log(`array[i] is ${array[i]}`);
      sum = sum + array[i];
      console.log(`sum is ${sum}`);
    }
    let average = sum/length;
    return {
      'length': length,
      'average': average
    }
  }
}

export default analyzeArray