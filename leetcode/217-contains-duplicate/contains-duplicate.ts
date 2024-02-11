function containsDuplicate(nums: number[]): boolean {
    let rValue:boolean = false;
    let hashMap = new Map<number, number>();

    for (let i:number = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            return true;
        }
        hashMap.set(nums[i], nums[i]);
    }

    return false;
};