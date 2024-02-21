/*
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
    and removing all non-alphanumeric characters, it reads the same forward and backward. 
    Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.
*/

function isPalindrome(s: string): boolean {
    let input:string = s;
    input = input.replace(/[^a-zA-Z]/, "");

    let backwardInput = "";
    for (let i = input.length - 1; i >= 0; i--) {
        backwardInput += input[i];
    }

    if (input === backwardInput) { return true; }
    else { return false; }
};
