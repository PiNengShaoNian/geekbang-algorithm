import { hasPath } from '../has-path'

test('hasPath', () => {
  expect(
    hasPath(
      [
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
      ],
      [0, 4],
      [4, 4]
    )
  ).toBeTruthy()
 
  expect(
    hasPath(
      [
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 1, 0],
        [1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0],
      ],
      [0, 4],
      [4, 4]
    )
  ).toBeFalsy()
})
