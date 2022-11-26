import Calculator from './calculator'; 

test('adds 1 + 2 to equal 3', () => {
  expect(Calculator(1,2,'sum')).toBe(3);
});

// test('adds 1 + 2 to equal 3', () => {
//   expect(calculator(1,2,'sum')).toBe(3);
// });

// test('5 - 2 to equal 3', () => {
//   expect(calculator(5,2,'subtract')).toBe(3);
// });

// test('5 * 2 to equal 10', () => {
//   expect(calculator(5,2,'multiply')).toBe(10);
// });

// test('64 / 2 to equal 32', () => {
//   expect(calculator(64,2,'divide')).toBe(32);
// });