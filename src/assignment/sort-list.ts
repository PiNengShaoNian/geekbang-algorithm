import { ListNode } from '../model/ListNode'
import { mergeTwoLists } from './merge-two-sorted-lists'

export function sortList(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(-1, head)

  let n = 0

  let node = head

  while (node) {
    ++n
    node = node.next
  }

  for (let subLength = 1; subLength < n; subLength *= 2) {
    let prev = dummyHead
    let cur = dummyHead.next

    while (cur) {
      const head1 = cur

      for (let i = 1; i < subLength && cur.next; ++i) {
        cur = cur?.next
      }

      const head2 = cur.next
      cur.next = null
      cur = head2

      for (let i = 1; i < subLength && cur && cur.next; ++i) {
        cur = cur.next
      }

      let next: ListNode | null = null

      if (cur) {
        next = cur.next
        cur.next = null
      }

      const merged = mergeTwoLists(head1, head2)
      prev.next = merged

      while (prev.next) {
        prev = prev.next
      }

      cur = next
    }
  }

  return dummyHead.next
}
