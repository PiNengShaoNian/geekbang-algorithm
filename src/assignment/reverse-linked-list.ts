import { ListNode } from '../model/ListNode'

export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let cur = head

  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}
