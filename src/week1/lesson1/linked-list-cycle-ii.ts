import { ListNode } from '../../model/ListNode'

export const detectCycle = (head: ListNode | null): ListNode | null => {
  let slow: ListNode | null
  let fast: ListNode | null
  slow = fast = head

  for (;;) {
    if (fast === null) return null

    fast = fast.next

    if (fast) fast = fast.next
    else return null

    slow = slow!.next

    if (slow === fast) break
  }

  for (slow = head; slow !== fast; slow = slow!.next, fast = fast!.next);

  return slow
}
