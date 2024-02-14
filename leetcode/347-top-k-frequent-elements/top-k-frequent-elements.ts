/*
    Given an integer array nums and an integer k, return the k most frequent elements. 
    You may return the answer in any order.
*/

function topKFrequent(nums: number[], k: number): number[] {
    let frequentNums = new Map<number, number>();

    // count each occurance of a number in the nums array
    // store this count in the hashmap
    for (let i = 0; i < nums.length; i++) {
        if (frequentNums.has(nums[i])) {
            const valuePlusOne:number = frequentNums.get(nums[i]) + 1;
            frequentNums.set(nums[i], valuePlusOne);
        }
        else {
            frequentNums.set(nums[i], 1);
        }
    }

    // sort hashmap by values 
    const frequentNumsArray = new Map(
        Array.from(frequentNums)
        .sort((a, b) => b[1] - a[1])
        );
    
    // get array of keys from sorted hashmap
    const frequentNumsKeys:number[] = [...frequentNumsArray.keys()];

    // only return k nr of values
    const topKFrequent:number[] = frequentNumsKeys.slice(0, k);

    return topKFrequent;
};