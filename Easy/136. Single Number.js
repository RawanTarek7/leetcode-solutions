/**
 Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 You must implement a solution with a linear runtime complexity and use only constant extra space. */


var singleNumber = function(nums) {
    var result = nums[0];
    for(var i = 1; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;

};