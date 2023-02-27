/**
 Given a sorted array of distinct integers and a target value, return the index if the target is found.
 If not, return the index where it would be if it were inserted in order.
 You must write an algorithm with O(log n) runtime complexity.
 */

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while(start < end){
        let mid = Math.floor((start+end)/2);
        if (nums[mid] === target) return mid;
        nums[mid] > target ? end = mid : start = mid + 1;
    }
    if (start === end){
        return target <= nums[start] ? start : start + 1;
    }
};