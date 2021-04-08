/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
  let c = { left: 0, right: 0 }
  let result = [0]

  // Increment based on char
  function determineCount(i) {
    if (s.charAt(i) === "(") c.left += 1
    if (s.charAt(i) === ")") c.right += 1
    if (c.right === c.left && c.left > 0) result.push(c.left + c.right)
  }

  // Right -> Left
  for (let i = s.length - 1; i >= 0; i--) {
    determineCount(i)
    if (c.left > c.right || i === 0) c = { left: 0, right: 0 }
  }

  // Left -> Right
  for (let i = 0; i < s.length; i++) {
    determineCount(i)
    if (c.right > c.left) c = { left: 0, right: 0 }
  }

  return Math.max(...result)
}

console.log(longestValidParentheses("(()()()((())))))"))