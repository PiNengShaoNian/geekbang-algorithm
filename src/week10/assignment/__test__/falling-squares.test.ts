import { fallingSquares } from '../falling-squares'

test('fallingSquares', () => {
  expect(
    fallingSquares([
      [10296, 819],
      [8666, 1732],
      [8986, 959],
    ])
  ).toEqual([819, 2551, 3510])
})
