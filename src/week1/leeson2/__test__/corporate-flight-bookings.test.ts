import { corpFlightBookings } from '../corporate-flight-bookings'

test('corpFlightBookings', () => {
  expect(
    corpFlightBookings(
      [
        [1, 2, 10],
        [2, 3, 20],
        [2, 5, 25],
      ],
      5
    )
  ).toEqual([10, 55, 45, 25, 25])

  expect(
    corpFlightBookings(
      [
        [1, 2, 10],
        [2, 2, 15],
      ],
      2
    )
  ).toEqual([10, 25])
})
