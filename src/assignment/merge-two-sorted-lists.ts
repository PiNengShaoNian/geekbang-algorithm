import { ListNode } from '../model/ListNode'

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(-1)

  let cur = dummyHead
  for (; l1 || l2; ) {
    if (!l1 || (l2 && l2.val < l1.val)) {
      cur.next = l2
      cur = l2!
      l2 = l2!.next

      if (!l1) break
    } else {
      cur.next = l1
      cur = l1
      l1 = l1.next

      if (!l2) break
    }
  }

  return dummyHead.next
}
