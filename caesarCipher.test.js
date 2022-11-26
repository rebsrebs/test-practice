import caesarCipher from './caesarCipher';

test('offsets word by given number', () => {
  expect(caesarCipher('gab', 1)).toBe('hbc');
})

// test('offsets phrase by given number', ()=> {
//   expect(caesarCipher('i am', 1)).toBe('j bn')
// })