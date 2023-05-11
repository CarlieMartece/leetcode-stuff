var containsDuplicate = function(nums) {
    nums = nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,9,8,3,31,4,35,26,42,2]))