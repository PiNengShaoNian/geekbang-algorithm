class MyListNode {
  value: {
    key: number
    value: number
  } | null = null
  next: MyListNode | null = null
  prev: MyListNode | null = null
}

class LRUCache {
  private capacity: number
  private head: MyListNode
  private tail: MyListNode
  private map: Map<number, MyListNode>
  constructor(capacity: number) {
    this.capacity = capacity
    this.head = new MyListNode()
    this.tail = new MyListNode()

    this.head.next = this.tail
    this.tail.prev = this.head
    this.map = new Map()
  }

  private removeFromList(node: MyListNode) {
    node.prev!.next = node.next
    node.next!.prev = node.prev
  }

  private insertFront(node: MyListNode) {
    const oldHead = this.head.next!
    node.next = oldHead
    oldHead.prev = node

    node.prev = this.head
    this.head.next = node
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1

    const node = this.map.get(key)!
    this.removeFromList(node)
    this.insertFront(node)

    return node.value!.value
  }

  put(key: number, value: number): void {
    if (!this.map.has(key) && this.map.size >= this.capacity) {
      const node = this.tail.prev!
      this.removeFromList(node)
      this.map.delete(node.value!.key)
    }

    if (this.map.has(key)) {
      const node = this.map.get(key)!
      this.removeFromList(node)
      this.insertFront(node)
      node.value!.value = value
    } else {
      const newNode = new MyListNode()
      newNode.value = {
        key,
        value,
      }
      this.insertFront(newNode)
      this.map.set(key, newNode)
    }
  }
}
