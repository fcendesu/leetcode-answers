/*
 * @lc app=leetcode id=20 lang=rust
 *
 * [20] Valid Parentheses
 */

use std::vec;

// @lc code=start
impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = Vec::new();
        for element in s.chars() {
            if element == '(' {
                stack.push(')');
            }
            else if element=='[' {
                stack.push(']');
            }
            else if element=='{' {
                stack.push('}');
            }
            else if stack.is_empty() || stack.pop().unwrap() != element {
                return false;
            }
        }
        stack.is_empty()
    }
}
// @lc code=end

