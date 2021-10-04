import { ListNode } from '../model/ListNode'

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (k === 0 || head === null) return head
  let length = 0

  let cur = head
  while (cur) {
    ++length
    cur = cur.next!
  }

  const rotate = k % length
  if (rotate === 0) return head

  let leftHead = head

  let prevLeftHead = null
  for (let i = 0; i < length - rotate; ++i) {
    prevLeftHead = leftHead
    leftHead = leftHead.next!
  }

  let leftTail = leftHead

  while (leftTail.next) {
    leftTail = leftTail.next
  }

  leftTail.next = head
  prevLeftHead!.next = null

  if (leftHead) return leftHead
  else return head
}
