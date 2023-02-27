/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 An input string is valid if:
 Open brackets must be closed by the same type of brackets.
 Open brackets must be closed in the correct order.
 Every close bracket has a corresponding open bracket of the same type.
 */
class Solution {
    isValid(s) {
        const left = [];
        const legend = {'(': ')', '{': '}', '[': ']'};
        for (let c of s) {
            if (legend[c]) left.push(c);
            else if (legend[left.pop()] !== c) return false;
        }
        return left.length === 0;
    }
}
