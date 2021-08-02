export function lemonadeChange(bills: number[]): boolean {
  const count = []
  count[5] = 0
  count[10] = 0

  for (const bill of bills) {
    switch (bill) {
      case 5:
        ++count[5]
        break
      case 10:
        ++count[10]
        if (count[5]) --count[5]
        else return false
        break
      case 20:
        if (count[10] && count[5]) {
          --count[10]
          --count[5]
        } else if (count[5] >= 3) {
          count[5] -= 3
        } else return false
        break
    }
  }

  return true
}
