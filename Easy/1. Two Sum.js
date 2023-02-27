/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 You may assume that each input would have exactly one solution, and you may not use the same element twice.
 You can return the answer in any order.
 */
class TwoSum {
    static twoSum(nums, target) {
    const hashTable = {};
    for (let i in nums)
        if (hashTable[target - nums[i]] !== undefined) return [hashTable[target - nums[i]], i];
        else hashTable[nums[i]] = i;
}}