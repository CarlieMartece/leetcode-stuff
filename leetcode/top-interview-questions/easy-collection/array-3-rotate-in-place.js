var rotate = function(nums, k) {
    if (nums.length === 0) {
        return [];
    }
    if (k > nums.length) {
        k = k % nums.length;
    }
    let swapIndexes = [];
    for (let i = 0; i < nums.length; i++) {
        swapIndexes.push(i);
    }
    const toRotate = swapIndexes.splice(-k, nums.length);
    swapIndexes.unshift(toRotate);
    const swaps = swapIndexes.flat();
    const numsCopy = [...nums];
    for (let i = 0; i < nums.length; i++) {
        nums[i] = numsCopy[swaps[i]];
    }
    return nums;
};

rotate([0,1,2,3,4,5,6], 3);