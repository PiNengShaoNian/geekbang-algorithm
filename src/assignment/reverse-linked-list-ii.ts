import { ListNode } from '../model/ListNode'

//[left, right)
const reverse = (left: ListNode, right: ListNode) => {
  let prev = null
  let cur = left
  while (cur && cur !== right) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next!
  }

  left.next = null
  return [prev, left]
}

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let leftNode = head
  let leftPrevNode = null
  for (let i = 1; i < left; ++i) {
    leftPrevNode = leftNode
    leftNode = leftNode!.next
  }

  let rightNext = leftNode
  for (let i = 0; i <= right - left; ++i) {
    rightNext = rightNext!.next
    if (!rightNext) break
  }

  const [l, r] = reverse(leftNode!, rightNext!)

  if (leftPrevNode) {
    leftPrevNode.next = l
  }

  r!.next = rightNext

  return leftPrevNode ? head : l
}
