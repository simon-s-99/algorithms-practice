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
    let anagramsMap = new Map<string, string[]>();

    for (let i = 0; i < strs.length; i++) {
        const word:string = strs[i];
        const sortedWord:string = word.split("").sort().toString();
        if (anagramsMap.has(sortedWord)) {
            anagramsMap.get(sortedWord).push(word);
        }
        else {
            anagramsMap.set(sortedWord, [word]);
        }
    }

    anagramsMap.forEach((value) => 
        groupedAnagrams.push(value)
    );

    return groupedAnagrams;
};
