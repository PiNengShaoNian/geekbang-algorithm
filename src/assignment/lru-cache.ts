export class LinkedListNode {
  prev: LinkedListNode | null = null
  next: LinkedListNode | null = null
  val: number = -1
  key: number = -1
}

class LRUCache {
  head: LinkedListNode
  tail: LinkedListNode
  map: Map<number, LinkedListNode> = new Map()
  size: number = 0
  capacity: number
  constructor(capacity: number) {
    this.head = new LinkedListNode()
    this.tail = new LinkedListNode()
    this.head.next = this.tail
    this.tail.prev = this.head
    this.capacity = capacity
  }

  insertAtFront(node: LinkedListNode) {
    const oldFirst = this.head.next!
    node.next = oldFirst
    oldFirst.prev = node
    this.head.next = node
    node.prev = this.head
  }

  removeFromList(node: LinkedListNode) {
    node.prev!.next = node.next
    node.next!.prev = node.prev
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1
    else {
      const node = this.map.get(key)!
      this.removeFromList(node)
      this.insertAtFront(node)

      return node.val
    }
  }

  removeLast() {
    const last = this.tail.prev!
    last.prev!.next = this.tail
    this.tail.prev = last.prev
    this.map.delete(last.key)
  }

  put(key: number, value: number): void {
    if (this.size === this.capacity && !this.map.has(key)) {
      this.removeLast()
      --this.size
    }

    if (!this.map.has(key)) {
      const node = new LinkedListNode()
      node.val = value
      node.key = key
      this.insertAtFront(node)
      this.map.set(key, node)
      ++this.size
    } else {
      const node = this.map.get(key)!
      node.val = value
      this.removeFromList(node)
      this.insertAtFront(node)
    }
  }
}
