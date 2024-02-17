function productExceptSelf(nums: number[]): number[] {
    let numbers:number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let innerLoopProduct:number = 1;
        
        for (let j = 0; j < nums.length; j++) {
            if (j === i) { continue; }
            else if (j !== i) { innerLoopProduct *= nums[j]; }
        }

        numbers.push(innerLoopProduct);
    }
    
    return numbers;
};
