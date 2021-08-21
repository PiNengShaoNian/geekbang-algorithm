type char = string

class TrieNode {
  child: Map<char, TrieNode> = new Map()
  count: number = 0
}

export class Trie {
  private root = new TrieNode()
  constructor() {}

  insert(word: string): void {
    let curr: TrieNode = this.root
    for (const ch of word) {
      if (!curr.child.has(ch)) {
        curr.child.set(ch, new TrieNode())
      }

      curr = curr.child.get(ch)!
    }

    ++curr.count
  }

  search(word: string): boolean {
    let curr = this.root
    for (const ch of word) {
      if (!curr.child.has(ch)) return false

      curr = curr.child.get(ch)!
    }

    return curr.count > 0
  }

  startsWith(prefix: string): boolean {
    let curr = this.root

    for (const ch of prefix) {
      if (!curr.child.has(ch)) return false

      curr = curr.child.get(ch)!
    }

    return true
  }
}
