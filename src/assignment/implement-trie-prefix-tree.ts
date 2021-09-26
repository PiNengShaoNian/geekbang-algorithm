export type char = string

class TrieNode {
  children: Map<string, TrieNode> = new Map()
  count: number = 0

  constructor(public val: char) {}
}

export class Trie {
  root = new TrieNode('')

  constructor() {}

  insert(word: string): void {
    let cur = this.root

    for (let i = 0; i < word.length; ++i) {
      const char = word[i]

      if (!cur.children.get(char)) {
        cur.children.set(char, new TrieNode(char))
      }

      cur = cur.children.get(char)!
    }

    ++cur.count
  }

  search(word: string): boolean {
    let cur = this.root

    for (let i = 0; i < word.length; ++i) {
      const char = word[i]

      if (!cur.children.get(char)) return false

      cur = cur.children.get(char)!
    }

    return cur.count > 0
  }

  startsWith(prefix: string): boolean {
    let cur = this.root

    for (let i = 0; i < prefix.length; ++i) {
      const char = prefix[i]

      if (!cur.children.get(char)) return false

      cur = cur.children.get(char)!
    }

    return true
  }
}
