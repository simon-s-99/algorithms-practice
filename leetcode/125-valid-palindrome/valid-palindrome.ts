/*
    A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
    and removing all non-alphanumeric characters, it reads the same forward and backward. 
    Alphanumeric characters include letters and numbers.
    Given a string s, return true if it is a palindrome, or false otherwise.
*/

function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    let backwardInput = "";
    for (let i = s.length - 1; i >= 0; i--) {
        backwardInput += s[i];
    }
    
    if (s === backwardInput) { return true; }
    else { return false; }
};
