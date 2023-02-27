//Given a string s, return the longest palindromic substring in s.

function longestPalindrome(s) {
    let longest = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = i, k = i; j >= 0 && k < s.length && s[j] === s[k]; j--, k++) {
            let palindrome = s.substring(j, k + 1);
            if (palindrome.length > longest.length) {
                longest = palindrome;
            }
        }
        for (let j = i, k = i + 1; j >= 0 && k < s.length && s[j] === s[k]; j--, k++) {
            let palindrome = s.substring(j, k + 1);
            if (palindrome.length > longest.length) {
                longest = palindrome;
            }
        }
    }

    return longest;
}
