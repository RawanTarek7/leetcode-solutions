/**
 Given two strings s and t, determine if they are isomorphic.
 Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 All occurrences of a character must be replaced with another character while preserving the order of characters.
 No two characters may map to the same character, but a character may map to itself.
  */


var isIsomorphic = function(s, t) {
    const arr1 = [] ,arr2 = [];
    for(let i=0; i<s.length; i++){
        const char1 = s[i];
        const char2 = t[i];
        if(arr1[char1] !== arr2[char2]) return false;
        arr1[char1] = i;
        arr2[char2] = i;
    }
    return true;
};