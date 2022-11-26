function analyzeArray(array){

  // make sure array has numbers
  if (!array.some(isNaN) == false || array.includes(null) == true || array.includes('') == true) {
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
    let min = Math.min(...array);
    let max = Math.max(...array);

    return {
      'length': length,
      'min': min,
      'max': max,
      'average': average
    }
  }
}

export default analyzeArray