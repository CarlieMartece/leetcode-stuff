var moveZeroes = function(nums) {
    let numsCopy = [...nums];
    let count = 0;
    for (let i = 0; i <= numsCopy.length; i++) {
        if (numsCopy[i] === 0) {
            count++;
            numsCopy.splice(i, 1);
            i--;
        }
    }
    for (let i = 0; i < count; i++) {
        numsCopy.push(0);
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = numsCopy[i];
    }
    return nums;
};

console.log(moveZeroes([0,0,1]))