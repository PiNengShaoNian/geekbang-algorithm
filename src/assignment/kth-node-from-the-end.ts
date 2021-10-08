import { ListNode } from '../model/ListNode'

export function getKthFromEnd(
  head: ListNode | null,
  k: number
): ListNode | null {
  let fast = head
  let slow = head

  for (let i = 0; i < k; ++i) {
    fast = fast!.next
  }

  while (fast) {
    fast = fast.next
    slow = slow!.next
  }

  return slow
}
