/**
 Given a string s consisting of words and spaces, return the length of the last word in the string.
 A word is a maximal
 substring
 consisting of non-space characters only. */


var lengthOfLastWord = function(s) {
    var s1=s.replace(/^\s+|\s+$/gm,'');
    var array =s1.split(/\s+/)
    var last =array[array.length-1]
    return last.length
};