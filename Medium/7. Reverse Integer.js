/**
 Given a signed 32-bit integer x, return x with its digits reversed.
 If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 Assume the environment does not allow you to store 64-bit integers (signed or unsigned). */


var reverse = function(x) {
    let reversedStr = x.toString().split("").reverse().join("");
    if (x < 0) {
        reversedStr = reversedStr.slice(0, reversedStr.length - 1);
    }
    let reversedNumber = parseInt(reversedStr);
    if (x < 0) {
        reversedNumber *= -1;
    }

    if (reversedNumber < -Math.pow(2, 31) || reversedNumber > Math.pow(2, 31) - 1) {
        return 0;
    }
    return reversedNumber;
};
