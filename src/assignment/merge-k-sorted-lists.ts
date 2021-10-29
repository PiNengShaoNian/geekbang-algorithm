import { ListNode } from '../model/ListNode'

const mergeTwoSortedList = (list1: ListNode | null, list2: ListNode | null) => {
  const dummy: ListNode = new ListNode(-1)

  let i: ListNode | null = list1
  let j: ListNode | null = list2
  let cur: ListNode | null = dummy

  for (; i || j; ) {
    if (!j || (i && i.val <= j.val)) {
      cur!.next = i
      cur = i
      i = i!.next
    } else {
      cur!.next = j
      cur = j
      j = j.next
    }
  }

  return dummy.next
}

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null
  let ans: ListNode | null = lists[0]
  for (let i = 1; i < lists.length; ++i) {
    ans = mergeTwoSortedList(ans, lists[i])
  }

  return ans
}
