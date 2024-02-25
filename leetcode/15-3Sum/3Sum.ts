/*
    Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
    such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

    Notice that the solution set must not contain duplicate triplets.
*/

function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];

    // bubble sort 
    let swapped: boolean = true;
    while (swapped) {
        swapped = false;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] > nums[i]) {
                const tmp: number = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = tmp;
                swapped = true;
            }
        }
    }

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { continue; }
        
        let j: number = i + 1;
        let k: number = nums.length - 1;

        while (j < k) {
            const sum: number = nums[i] + nums[j] + nums[k];

            if (sum < 0) { j++; }
            else if (sum > 0) { k--; }
            else { 
                result.push([nums[i], nums[j], nums[k]]); 
                j++;
                while (nums[j] === nums[j - 1] && j < k) { j++; }
                k--;
                while (nums[k] === nums[k + 1] && j < k) { k--; }
            }
        }
    }

    return result;
};
