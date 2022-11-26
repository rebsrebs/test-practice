import analyzeArray from '../code/analyzeArray';

test('returns message if array has a string', () => {
  expect(analyzeArray([1,3,'red'])).toBe('array must only contain numbers');
})

test('returns message if array has a null item', () => {
  expect(analyzeArray([1,3,null])).toBe('array must only contain numbers');
})

test('returns message if array has an empty item', () => {
  expect(analyzeArray([1,3,''])).toBe('array must only contain numbers');
})

test('returns average, min, max and length of array', () => {
  expect(analyzeArray([1,3,5])).toStrictEqual({average: 3, min: 1, max: 5, length: 3});
})