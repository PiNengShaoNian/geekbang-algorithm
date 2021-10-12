export function accountsMerge(accounts: string[][]): string[][] {
  const emailToAccountIndex: Map<string, number> = new Map()
  const fa: number[] = []
  const find = (x: number): number => {
    return x === fa[x] ? x : (fa[x] = find(fa[x]))
  }
  for (let i = 0; i < accounts.length; ++i) {
    fa[i] = i
  }

  for (let i = 0; i < accounts.length; ++i) {
    const [_, ...emails] = accounts[i]

    for (const email of emails) {
      if (!emailToAccountIndex.has(email)) {
        emailToAccountIndex.set(email, i)
      } else {
        fa[find(i)] = find(emailToAccountIndex.get(email)!)
      }
    }
  }

  let indexToAccountEmails: Map<number, Set<string>> = new Map()

  for (let i = 0; i < accounts.length; ++i) {
    const [_, ...emails] = accounts[i]
    const fa = find(i)
    if (!indexToAccountEmails.has(fa)) {
      indexToAccountEmails.set(fa, new Set(emails))
    } else {
      const s = indexToAccountEmails.get(fa)!

      for (const e of emails) {
        s.add(e)
      }
    }
  }

  return Array.from(indexToAccountEmails.entries()).map(([key, val]) => [
    accounts[key][0],
    ...Array.from(val).sort(),
  ])
}
