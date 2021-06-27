import { ListNode } from '../../model/ListNode'

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head

  let prev: ListNode | null = null
  let cur: ListNode | null = head

  while (cur) {
    const next: ListNode | null = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}
