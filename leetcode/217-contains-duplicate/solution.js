/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let shifted = false;

    do {
        shifted = false;
        
        for (let i = 0; i < nums.length; i++) {
            if (i > 0) {
                if (nums[i - 1] > nums[i]) {
                    let tempNum = nums[i];
                    nums[i] = nums[i - 1];
                    nums[i - 1] = tempNum;

                    shifted = true;
                }
                else if (nums[i - 1] === nums[i]) {
                    return true;
                }
            }
        }
    } while (shifted)

    return false;
};