var twoSum = function(numbers, target) {
    let i = 0;
    for (let j = numbers.length - 1; j >= 0;) {
        if (numbers[i] + numbers[j] > target) { j--; }
        else if (numbers[i] + numbers[j] < target) { i++; }
        else { return [ i + 1, j + 1 ]; }
    }
};
