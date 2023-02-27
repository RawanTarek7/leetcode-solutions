/**
 Given a pattern and a string s, find if s follows the same pattern.
 Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
  */


var wordPattern = function(pattern, s) {
    let obj = {};
    let sArr = s.split(' ');
    if (sArr.length !== pattern.length) return false;
    if (new Set (pattern.split('')).size !== new Set(sArr).size) return false;
    for (let i = 0; i < pattern.length; i++) {
        if (obj[pattern[i]] ) {
            if (obj[pattern[i]] !== sArr[i]) return false;
        } else {
            obj[pattern[i]] = sArr[i];
        }
    }
    return true;
};