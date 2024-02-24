/*
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
    such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.
*/


// THIS SOLUTION IS WRONG AND MEGASCUFFED, WILL FIX
function threeSum(nums: number[]): number[][] {
    let result: number[][] = [];
    
    for (let i = 1; i < nums.length - 1; i++) {
        let k: number = nums.length - 1;
        for (let j = 0; j < k; j++) {
            if (k === i) { k = k - 1; }
            if (k === j) { break; }
            if (nums[i] + nums[j] + nums[k] === 0) {
                result.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
    
    return result;
};

// if (j === k || k < j) { break; }
// if (i === nums.length - 1) {
//     j = j + 1;
//     k = k - 1;
//     i = 0;
// }
// if (i === j || i === k) { continue; }
// if (nums[i] + nums[j] + nums[k] === 0) {
//     if (!result.includes([nums[i], nums[j], nums[k]])) {
//         result.push([nums[i], nums[j], nums[k]]);
//     }
// }