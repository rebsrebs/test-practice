import caesarCipher from '../code/caesarCipher';

test('offsets word by given number', () => {
  expect(caesarCipher('gab', 1)).toBe('hbc');
})

test('offsets phrase by given number', ()=> {
  expect(caesarCipher('i am', 1)).toBe('j bn')
})

test('offsets phrase by given number when offset totals over 25', ()=> {
  expect(caesarCipher('zebra', 1)).toBe('afcsb')
})

test('offsets phrase by given number when offset totals below zero', ()=> {
  expect(caesarCipher('bit', -3)).toBe('yfq')
})

