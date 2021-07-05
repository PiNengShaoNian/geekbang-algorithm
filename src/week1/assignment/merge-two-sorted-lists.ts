import { ListNode } from '../../model/ListNode'

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(-1, null)

  let curHead = dummyHead
  for (; l1 || l2; ) {
    if (!l2 || (l1 && l1.val <= l2.val)) {
      curHead.next = l1
      curHead = l1
      const next = l1.next
      l1.next = null
      l1 = next
    } else if (l2) {
      curHead.next = l2
      curHead = l2
      const next = l2.next
      l2.next = null
      l2 = next
    }
  }

  return dummyHead.next
}
