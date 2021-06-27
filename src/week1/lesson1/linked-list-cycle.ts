import { ListNode } from '../../model/ListNode'

export const hasCycle = (head: ListNode | null): boolean => {
  let slow: ListNode | null
  let fast: ListNode | null

  slow = fast = head

  while (fast !== null) {
    fast = fast.next

    if (fast) fast = fast.next
    else break
    slow = slow!.next
    if (fast === slow) return true
  }

  return false
}
