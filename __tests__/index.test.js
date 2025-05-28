import sum from '../index.js'

test.each([
  [1, 2, 3],
  [-1, -3, -4],
  [4, -6, -2],
])('sum\'s main flow', (num1, num2, result) => {
  expect(sum(num1, num2)).toBe(result)
})
