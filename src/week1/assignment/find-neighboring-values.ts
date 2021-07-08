type ListNode<T> = {
  prev: ListNode<T> | null
  next: ListNode<T> | null
  value: T
}

type DoublyLinkedList<T> = {
  last: null | ListNode<T>
}

const addLast = <T>(list: DoublyLinkedList<T>, val: T): ListNode<T> => {
  const newNode: ListNode<T> = {
    prev: null,
    next: null,
    value: val,
  }
  if (list.last === null) {
    list.last = newNode
  } else {
    list.last.next = newNode
    newNode.prev = list.last
    list.last = newNode
  }

  return newNode
}

const deleteNode = <T>(list: DoublyLinkedList<T>, node: ListNode<T>): void => {
  const prev = node.prev
  const next = node.next

  if (prev) {
    prev.next = next
  }

  if (next) {
    next.prev = prev
  }
  node.prev = node.next = null

  if (list.last === node) {
    list.last = prev
  }
}

type NumWithIndex = {
  index: number
  value: number
}

export const findNeighboringValues = (nums: number[]): number[] => {
  const numsWithIndex: NumWithIndex[] = []

  for (let i = 0; i < nums.length; ++i) {
    numsWithIndex[i] = { index: i, value: nums[i] }
  }

  const list: DoublyLinkedList<NumWithIndex> = {
    last: null,
  }

  numsWithIndex.sort((a, b) => a.value - b.value)
  const numToNodeMap: Map<number, ListNode<NumWithIndex>> = new Map()
  for (const num of numsWithIndex) {
    const newNode = addLast(list, num)
    numToNodeMap.set(num.value, newNode)
  }

  const ans: number[] = []

  for (let i = nums.length - 1; i >= 1; --i) {
    const num = nums[i]

    const node = numToNodeMap.get(num)!
    const prevValue = node.prev?.value.value ?? Infinity
    const nextValue = node.next?.value.value ?? Infinity
    const cmp = Math.abs(prevValue - num) - Math.abs(nextValue - num)
    if (cmp === 0) {
      ans[node.value.index - 1] = Math.min(prevValue, nextValue)
    } else if (cmp < 0) {
      ans[node.value.index - 1] = prevValue
    } else {
      ans[node.value.index - 1] = nextValue
    }
    deleteNode(list, node)
  }

  return ans
}
