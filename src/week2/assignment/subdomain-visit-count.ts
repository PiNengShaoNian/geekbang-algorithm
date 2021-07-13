export function subdomainVisits(cpdomains: string[]): string[] {
  const domainToCountMap: Map<string, number> = new Map()

  const getSubDomains = (str: string): string[] => {
    const ans: string[] = []
    ans.push(str)
    for (let i = 0; i < str.length; ++i) {
      if (str[i] === '.') {
        ans.push(str.slice(i + 1))
      }
    }
    return ans
  }
  for (const count_domain of cpdomains) {
    const [count, domain] = count_domain.split(' ')
    const subDomains = getSubDomains(domain)
    for (const subDomain of subDomains) {
      domainToCountMap.set(
        subDomain,
        (domainToCountMap.get(subDomain) ?? 0) + +count
      )
    }
  }

  return Array.from(domainToCountMap.entries()).map(
    ([domain, count]) => `${count} ${domain}`
  )
}
