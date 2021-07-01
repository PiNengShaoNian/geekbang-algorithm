export function twoSum(numbers: number[], target: number): number[] {
  let j = numbers.length - 1
  for (let i = 0; i < numbers.length; ++i) {
    while (i < j && numbers[i] + numbers[j] > target) --j

    if (i < j && numbers[i] + numbers[j] === target) return [i + 1, j + 1]
  }

  return []
}
