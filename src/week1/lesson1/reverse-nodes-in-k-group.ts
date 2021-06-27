import { ListNode } from '../../model/ListNode'

/**
 * 反转[first, last)范围内的链表
 * @param first
 * @param last
 * @returns
 */
const reverseList = (
  first: ListNode,
  last: ListNode | null
): [ListNode, ListNode] => {
  if (first === last) return [first, last]

  let prev: ListNode | null = null
  let cur: ListNode | null = first

  while (cur && cur !== last) {
    const next: ListNode | null = cur.next

    cur.next = prev
    prev = cur
    cur = next
  }

  return [prev!, first]
}

const getEnd = (start: ListNode, k: number): [ListNode | null, boolean] => {
  let ans: ListNode | null = start
  for (; ans && k > 0; ans = ans.next, --k);
  return [ans, k === 0]
}

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  const protect = new ListNode(-1, head)
  let last = protect
  let cur = head
  while (cur) {
    const [nextGroupStart, needReverse] = getEnd(cur, k)

    if (!needReverse) break

    const [nextStart, nextEnd] = reverseList(cur, nextGroupStart)
    last.next = nextStart
    nextEnd.next = nextGroupStart
    cur = nextGroupStart
    last = nextEnd
  }

  return protect.next
}
