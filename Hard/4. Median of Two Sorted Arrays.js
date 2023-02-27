/**
 Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 The overall run time complexity should be O(log (m+n)). */



var findMedianSortedArrays = function(nums1, nums2) {
    const subset = [...nums1, ...nums2].sort((a, b) => a - b);
    const medianIndex = Math.floor(subset.length / 2);
    let result = 0;
    if (subset.length % 2 !== 0) {
        result = subset[medianIndex];
    } else {
        const left = subset[medianIndex - 1];
        const right = subset[medianIndex];
        result = (left + right) / 2;
    }
    return result;
};