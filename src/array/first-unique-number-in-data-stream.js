/**
 * @param nums: a continuous stream of numbers
 * @param number: a number
 * @return: returns the first unique number
 */
export const firstUniqueNumber = function (nums, number) {
  const due = new Set()
  const queue = new Set()
  for (const n of nums) {
    if (queue.has(n)) {
      queue.delete(n)
      due.add(n)
    } else if (!due.has(n)) {
      queue.add(n)
    }

    if (n === number) break
  }

  if (!due.has(number) && !queue.has(number)) return -1

  return Array.from(queue)[0] || -1
}
