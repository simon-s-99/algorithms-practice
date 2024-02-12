/*
    Problem definition:
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.

    (Initial function definition is declared by LeetCode.)

    Constraints:
    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.
*/

function groupAnagrams(strs: string[]): string[][] {
    let groupedAnagrams:string[][] = [];

    for (let i = 0; i < strs.length; i++) { // iterate over strings
        if (i === 0) { groupedAnagrams[0].push(strs[0]); }
        else {
            const newString:string = strs[i];
            const oldString:string = strs[i - 1];

            let newArr:string[] = newString.split("");
            let oldArr:string[] = oldString.split("");

            newArr = newArr.sort();
            oldArr = oldArr.sort();

            if (newArr === oldArr) {

            }
        }
    }

    return groupedAnagrams;
};

const test:string[] = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(test));