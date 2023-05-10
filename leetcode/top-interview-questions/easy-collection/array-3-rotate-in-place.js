var rotate = function(nums, k) {
    if (nums.length === 0) {
        return [];
    }
    if (k > nums.length) {
        k = k % nums.length;
    }
    const numsCopy = [...nums];
    const toRotate = numsCopy.splice(-k, nums.length);
    numsCopy.unshift(toRotate);
    const copy = numsCopy.flat();
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = copy[i];
    }
    console.log(nums)
    return nums;
};

rotate([0,1,2,3,4,5,6], 3);