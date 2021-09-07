import { slidingPuzzle, slidingPuzzle1 } from '../sliding-puzzle'

test('slidingPuzzle', () => {
  expect(
    slidingPuzzle([
      [1, 2, 3],
      [4, 0, 5],
    ])
  ).toBe(1)
  expect(
    slidingPuzzle([
      [1, 2, 3],
      [5, 4, 0],
    ])
  ).toBe(-1)

  expect(
    slidingPuzzle([
      [4, 1, 2],
      [5, 0, 3],
    ])
  ).toBe(5)

  expect(
    slidingPuzzle1([
      [1, 2, 3],
      [4, 0, 5],
    ])
  ).toBe(1)
  expect(
    slidingPuzzle1([
      [1, 2, 3],
      [5, 4, 0],
    ])
  ).toBe(-1)

  expect(
    slidingPuzzle1([
      [4, 1, 2],
      [5, 0, 3],
    ])
  ).toBe(5)
})
