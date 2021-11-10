const calculator = require('./calculator');

test('Adds: sum of 10 and 2 should be 12', ()=>{
    expect(calculator.add( 10, 2)).toBe(12)
});

test('Subtract: 10 - 2 should be 8', ()=>{
  expect(calculator.subtract( 10, 2)).toBe(8)
});

test('Divide: 10/2 should be 5', ()=>{
    expect(calculator.divide(10,2)).toBe(5);
});

test('Multiply: product of 10 and 2 should be 20', ()=>{
    expect(calculator.multiply(10,2)).toBe(20);
});