//Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.


var containsDuplicate = function(nums) {
    let hashMap={}
    for(let i=0;i<nums.length;i++){
        if(hashMap[nums[i]]){
            return true;
        }else{
            hashMap[nums[i]]=true
        }
    }
    return false
};