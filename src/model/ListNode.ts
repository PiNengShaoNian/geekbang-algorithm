export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  *[Symbol.iterator]() {
    for (let cur: ListNode | null = this; cur; cur = cur.next) {
      yield cur.val
    }
  }
}
