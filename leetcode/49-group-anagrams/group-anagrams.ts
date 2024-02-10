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
    let groupedAnagrams:string[][];

    for (let i = 0; i < strs.length; i++) { // iterate over strings
        const iterationString:string = strs[i];
        let charMap = new Map<string, number>();

        for (let j = 0; j < iterationString.length; j++) { // iterate over characters
            const iterationChar = iterationString[j];

            if (charMap.has(iterationChar)) { // if current char is already in hashmap increase value by 1
                let charCount; // <-- this is ugly but avoids undefined error
                charCount = charMap.get(iterationChar);
                charMap.set(iterationChar, charCount + 1);
            }
            else {
                charMap.set(iterationChar, 1);
            }
        }
    }

    return groupedAnagrams;
};