/*
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
    find two numbers such that they add up to a specific target number. Let these two numbers 
    be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

    Return the indices of the two numbers, index1 and index2, added by one as an 
    integer array [index1, index2] of length 2.

    The tests are generated such that there is exactly one solution. 
    You may not use the same element twice.

    Your solution must use only constant extra space.
*/

function twoSum(numbers: number[], target: number): number[] {
    let i:number = 0;
    for (let j = numbers.length - 1; j >= 0;) {
        if (numbers[i] + numbers[j] > target) { j--; }
        else if (numbers[i] + numbers[j] < target) { i++; }
        else { return [ i + 1, j + 1 ]; }
    }
};
