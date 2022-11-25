import capitalize from './capitalize'; 

test('capitalizes first letter of string', () => {
  expect(capitalize('cat')).toBe('Cat');
});