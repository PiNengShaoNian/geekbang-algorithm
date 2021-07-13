class MyListNode<T> {
  prev: MyListNode<T> | null = null
  next: MyListNode<T> | null = null
  value: T | null = null
}

type KeyValuePair = {
  key: number
  value: number
}
export class LRUCache {
  private capacity: number
  private map: Map<number, MyListNode<KeyValuePair>>
  private head: MyListNode<KeyValuePair>
  private tail: MyListNode<KeyValuePair>

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new MyListNode()
    this.tail = new MyListNode()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  private removeFromList(node: MyListNode<KeyValuePair>): void {
    node.prev!.next = node.next
    node.next!.prev = node.prev
    node.prev = node.next = null
  }

  private insertFront(node: MyListNode<KeyValuePair>): void {
    const oldHead = this.head.next!

    this.head.next = node
    node.prev = this.head

    oldHead.prev = node
    node.next = oldHead
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1

    const node = this.map.get(key)!
    this.removeFromList(node)
    this.insertFront(node)

    return node.value!.value
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!

      this.removeFromList(node)
      this.insertFront(node)
      node.value!.value = value
    } else {
      if (this.map.size >= this.capacity) {
        const node = this.tail.prev!
        this.removeFromList(node)
        this.map.delete(node.value!.key)
      }
      const node = new MyListNode<KeyValuePair>()
      node.value = {
        key,
        value,
      }
      this.insertFront(node)
      this.map.set(key, node)
    }
  }
}
