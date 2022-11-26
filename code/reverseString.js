function reverseString(word) {
  let reversed = '';
  for (let i = word.length - 1; i >=0; i--) {
    reversed = reversed.concat(word.charAt(i));
  }
  return reversed;
}

export default reverseString;