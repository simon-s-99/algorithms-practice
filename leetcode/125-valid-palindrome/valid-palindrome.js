var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    let backwardInput = "";
    for (let i = s.length - 1; i >= 0; i--) {
        backwardInput += s[i];
    }

    if (s === backwardInput) { return true; }
    else { return false; }
};
