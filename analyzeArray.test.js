//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

import analyzeArray from './analyzeArray';

// test('returns length of array', () => {
//   expect(analyzeArray([1,3,5])).toStrictEqual({'length': 3});
// })

test('returns length and average of array', () => {
  expect(analyzeArray([1,3,5])).toStrictEqual({'length': 3, 
  'average': 3});
})

test('returns message if array has any non-numbers', () => {
  expect(analyzeArray([1,3,'r'])).toBe('array must only contain numbers');
})

// test('returns average, min, max and length of array', () => {
//   expect(analyzeArray([1,3,5])).toBe({average: 3, min: 1, max: 5, length: 3});
// })