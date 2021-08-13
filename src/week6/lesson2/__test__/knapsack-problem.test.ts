import { knapsackProblem } from '../knapsack-problem'

test('knapsackProblem', () => {
  expect(knapsackProblem([1, 3, 4, 2, 5], [3, 23, 243, 23, 1], 5)).toBe(246)
})
