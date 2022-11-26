import capitalize from '../code/capitalize'; 

test('capitalizes first letter of string', () => {
  expect(capitalize('cat')).toBe('Cat');
});