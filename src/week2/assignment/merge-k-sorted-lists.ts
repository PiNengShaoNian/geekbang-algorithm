import { ListNode } from '../../model/ListNode'

export function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null
  const mergeTwoList = (
    list1: ListNode | null,
    list2: ListNode | null
  ): ListNode | null => {
    if (!list1) return list2
    if (!list2) return list1

    const dummyHead = new ListNode()
    let curHead = dummyHead
    while (list1 || list2) {
      if (!list2) {
        curHead.next = list1
        break
      }

      if (!list1) {
        curHead.next = list2
        break
      }

      if (list1.val >= list2.val) {
        curHead.next = list2
        const next: ListNode | null = list2.next
        curHead = list2
        list2 = next
      } else {
        curHead.next = list1
        const next: ListNode | null = list1.next
        curHead = list1
        list1 = next
      }
    }

    return dummyHead.next
  }

  let prev = lists[0]
  for (let i = 1; i < lists.length; ++i) {
    prev = mergeTwoList(prev, lists[i])
  }

  return prev
}
