/**
  Given an integer x, return true if x is a palindrome and false otherwise.
 */
class PalindromeChecker {
    static isPalindrome(x) {
        const s = x.toString();
    return s === s.split('').reverse().join('');
}}