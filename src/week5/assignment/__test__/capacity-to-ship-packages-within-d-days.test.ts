import { shipWithinDays } from '../capacity-to-ship-packages-within-d-days'

test('shipWithinDays', () => {
  expect(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(15)
  expect(shipWithinDays([1, 2, 3, 1, 1], 4)).toBe(3)
})
