export function validPalindrome(s: string): boolean {
  const core = (l: number, r: number, canDelete: boolean): boolean => {
    while (l < r) {
      if (s[l] === s[r]) {
        ++l
        --r
      } else {
        if (canDelete) {
          return core(l + 1, r, false) || core(l, r - 1, false)
        } else return false
      }
    }

    return true
  }

  return core(0, s.length - 1, true)
}
