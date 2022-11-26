import calculator from './calculator'; 

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1,2)).toBe(3);
});

test('subtracts 2 from 1 to equal -1', () => {
  expect(calculator.sub(1,2)).toBe(-1);
});

test('divides 5 by 2 to equal 2.5', () => {
  expect(calculator.div(5,2)).toBe(2.5);
});

test('multiplies 5 by 2 to equal 10', () => {
  expect(calculator.mul(5,2)).toBe(10);
});

test('tries to add 1 to a string', () => {
  expect(calculator.add(1,'red')).toBe('error');
});



