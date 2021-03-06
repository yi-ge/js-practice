/**
 * @param {string} s
 * @return {character}
 */
export const firstUniqChar = function (s) {
  const due = new Set()
  const queue = new Set()
  for (const n of s) {
    if (queue.has(n)) {
      queue.delete(n)
      due.add(n)
    } else if (!due.has(n)) {
      queue.add(n)
    }
  }

  return Array.from(queue)[0] || ' '
}
