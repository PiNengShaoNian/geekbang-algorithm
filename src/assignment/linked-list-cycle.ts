import { ListNode } from '../model/ListNode'

export function hasCycle(head: ListNode | null): boolean {
  let fast = head
  let slow = head

  while (fast) {
    fast = fast.next
    if (fast) fast = fast.next
    else return false

    slow = slow!.next

    if (slow === fast) return true
  }

  return false
}
