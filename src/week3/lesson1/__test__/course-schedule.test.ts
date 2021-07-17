import { canFinish } from '../course-schedule'

test('canFinish', () => {
  expect(
    canFinish(20, [
      [0, 10],
      [3, 18],
      [5, 5],
      [6, 11],
      [11, 14],
      [13, 1],
      [15, 1],
      [17, 4],
    ])
  ).toBeFalsy()
})
