var removeDuplicates = function(nums) {
    let arr = [];
    arr.push(nums[0])
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > arr[arr.length - 1]) {
            arr.push(nums[i]);
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);