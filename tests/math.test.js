const math = require('../math');
test('soma 2 + 3 igual a 5', () => { 
expect(math.add(2, 3)).toBe(5); 
}); 
test('Subtracao 3 - 2 igual a 1', () => { 
expect(math.subtract(3, 2)).toBe(1); 
}); 
test('Multiplicacao 2 x 3 igual a 6', () => { 
expect(math.multiply(2, 3)).toBe(6); 
}); 
test('Divisao 10 / 2 igual a 5', () => { 
expect(math.divide(10, 2)).toBe(5); 
});