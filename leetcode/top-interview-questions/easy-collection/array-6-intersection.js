var intersect = function(nums1, nums2) {
    let askArr;
    let checkArr;
    if (nums1.length > nums2.length) {
        askArr = nums2;
        checkArr = nums1;
    } else {
        askArr = nums1;
        checkArr = nums2;
    }
    let matchedArr = [];
    for (let i = 0; i < askArr.length; i++) {
        let askItem = askArr[i];
        if (checkArr.indexOf(askItem) !== -1) {
            matchedArr.push(askItem);
            let remove = checkArr.indexOf(askItem);
            checkArr.splice(remove, 1);
        }
    }
    return matchedArr;
};