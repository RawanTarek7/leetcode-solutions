/**
 You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 The digits are ordered from most significant to least significant in left-to-right order.
 The large integer does not contain any leading 0's.
 Increment the large integer by one and return the resulting array of digits. */


function plusOne(digits) {
    let lessThan10 = true;
    for (let i = digits.length - 1; i >= 0 && lessThan10; i--) {
        digits[i]++;
        lessThan10 = digits[i] >= 10;
        lessThan10 && (digits[i] = 0);
    }
    lessThan10 && digits.unshift(1);
    return digits;
}