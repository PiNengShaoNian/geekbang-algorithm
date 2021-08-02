import { TopVotedCandidate } from '../online-election'

test('TopVotedCandidate', () => {
  {
    const top = new TopVotedCandidate(
      [0, 1, 1, 0, 0, 1, 0],
      [0, 5, 10, 15, 20, 25, 30]
    )

    expect(top.q(3)).toBe(0)
    expect(top.q(12)).toBe(1)
    expect(top.q(12)).toBe(1)
    expect(top.q(25)).toBe(1)
    expect(top.q(15)).toBe(0)
    expect(top.q(24)).toBe(0)
    expect(top.q(8)).toBe(1)
  }

  {
    const top = new TopVotedCandidate([1, 2, 3, 4, 4, 5], [0, 1, 2, 3, 4, 5])
    expect(top.q(5)).toBe(4)
    expect(top.q(4)).toBe(4)
    expect(top.q(3)).toBe(4)
    expect(top.q(2)).toBe(3)
    expect(top.q(1)).toBe(2)
    expect(top.q(0)).toBe(1)
  }

  {
    const top = new TopVotedCandidate([1], [0])
    expect(top.q(0)).toBe(1)
    expect(top.q(100)).toBe(1)
  }
})
