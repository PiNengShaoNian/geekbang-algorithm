import { solve } from '../surrounded-regions'

test('surrounded-regions', () => {
  const board = [
    ['X', 'O', 'X', 'X'],
    ['O', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'O'],
    ['O', 'X', 'O', 'X'],
  ]
  solve(board)
  
  expect(board).toEqual([
    ['X', 'O', 'X', 'X'],
    ['O', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'O'],
    ['O', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'O'],
    ['O', 'X', 'O', 'X'],
  ])
})
