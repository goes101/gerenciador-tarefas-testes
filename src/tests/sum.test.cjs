
const sum = require('../sum.cjs');

test('Soma dois números corretamente', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Retorna erro quando os parâmetros não são números', () => {
  expect(() => sum('1', 2)).toThrow(
    'Os parâmetros devem ser números'
  );
});
