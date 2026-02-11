/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  let origin = x;
  if (x < 0) return false;
  let reverse = 0;
  let digit = 0;
  while (x) {
    digit = x % 10;
    reverse = reverse * 10 + digit;
    x = (x - digit) / 10;
  }
  if (origin === reverse) return true;

  return false;
}
// @lc code=end
