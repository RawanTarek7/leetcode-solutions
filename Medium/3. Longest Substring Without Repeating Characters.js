//Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0, right = 0, maxLen = 0;

    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right++]);
            maxLen = Math.max(maxLen, set.size);
        } else {
            set.delete(s[left++]);
        }
    }

    return maxLen;
}