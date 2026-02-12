/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  let stack: string[] = [];
  for (const element of s) {
    if (element === "(") stack.push(")");
    else if (element === "[") stack.push("]");
    else if (element === "{") stack.push("}");
    else if (!stack.length || stack.pop() !== element) return false;
  }

  return !stack.length;
}
// @lc code=end
