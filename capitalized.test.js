const capitalized = require('./capitalized.js');

test('Should return the first letter Capitalized', ()=>{
    expect(capitalized.capitalized('hello')).toMatch(/^[A-Z]/);
});