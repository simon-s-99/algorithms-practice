/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length === t.length) {
        const sSorted = s.split('').sort().toString();
        const tSorted = t.split('').sort().toString();

        if (sSorted === tSorted) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
};