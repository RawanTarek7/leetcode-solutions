/**
 A phrase is a palindrome if,
 after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 Given a string s, return true if it is a palindrome, or false otherwise.
  */

var isPalindrome = function(s) {
    var phrase = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    for(let i=0;i<phrase.length;i++){
        if(phrase[i]!==phrase[phrase.length-1-i]){
            return false
        }

    }
    return true
};