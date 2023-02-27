/**
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/

class StringProcessor {
    static longestCommonPrefix(strs) {
        if (!strs[0]) {
            return '';
        }
        let preprefix = '', prefix = '';
        for (let i = 0; i < strs[0].length; i++) {
            prefix += strs[0][i];
            for (let j = 0; j < strs.length; j++) {
                if (!strs[j].startsWith(prefix)) {
                    return preprefix;
                }
            }
            preprefix = prefix;
        }
        return prefix;
    }
}
