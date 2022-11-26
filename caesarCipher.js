function caesarCipher(phrase, num) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  phrase = phrase.toLowerCase();
  let cipher = '';

  for (let i = 0; i < phrase.length; i++) {
    let current = phrase.charAt(i);

    if (current === ' '){
      var newChar = ' ';
    } else {
      let currentIndex = alphabet.indexOf(current);
      let newIndex = parseInt(currentIndex) + parseInt(num);
      var newChar = alphabet[newIndex];
      }
      
    cipher += newChar;
  }

  return cipher;
}

export default caesarCipher