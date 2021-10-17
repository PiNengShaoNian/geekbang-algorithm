export function equationsPossible(equations: string[]): boolean {
  const fa: number[] = []
  const find = (x: number): number => {
    return x === fa[x] ? x : (fa[x] = find(fa[x]))
  }

  for (let i = 0; i < 26; ++i) {
    fa[i] = i
  }

  let notEqual: string[] = []

  for (let i = 0; i < equations.length; ++i) {
    if (equations[i][1] === '!') {
      notEqual.push(equations[i])
    } else {
      const a = equations[i][0].charCodeAt(0) - 97
      const b = equations[i][3].charCodeAt(0) - 97

      //   ['a==b', 'e==c', 'b==c', 'a!=e']
      //   当fa[b] = find(a)建树时,e和a被分到了两个分量中
      //   b -> a
      //   c -> e
      //   c -> b

      //   使用fa[find(b)] = find(a)建树就不会出现问题
      //   b -> a
      //   c -> e
      //   e -> a
      fa[find(b)] = find(a)
    }
  }

  for (const x of notEqual) {
    const a = x[0].charCodeAt(0) - 97
    const b = x[3].charCodeAt(0) - 97

    if (find(a) === find(b)) return false
  }

  return true
}
