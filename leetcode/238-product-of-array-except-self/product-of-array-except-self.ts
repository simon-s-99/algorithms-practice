function productExceptSelf(nums: number[]): number[] {
    const len:number = nums.length;
    const lastIndex:number = len - 1;
    const numbers:number[] = new Array(len).fill(1);

    let leftToRight:number = 1;
    let rightToLeft:number = 1;

    for (let i = 0; i < len; i++) {
        numbers[i] *= leftToRight;
        numbers[lastIndex - i] *= rightToLeft;
        leftToRight *= nums[i];
        rightToLeft *= nums[lastIndex - i];
    }
    
    return numbers;
};
