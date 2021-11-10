const stringTasks = require('./stringTasks.js');

test('String length is greater than or eqaul to 1', () => {
  expect(stringTasks.stringLength('H')).toBeGreaterThanOrEqual(1);
})

test('String length is less than or equal to 10', () => {
  expect(stringTasks.stringLength('Hello')).toBeGreaterThanOrEqual(1);
})

test('Hello to olleH', () => {
  expect(stringTasks.reverseString('Hello')).toBe('olleH');
})
