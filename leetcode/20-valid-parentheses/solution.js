/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = new Map;
    map.set("{", "}");
    map.set("(", ")");
    map.set("[", "]");
    map.set("}", "{");
    map.set(")", "(");
    map.set("]", "[");

    let stack = new Array;

    for (const c of s) {
        if (c === "{" || c === "(" || c === "[") {
            stack.push(c);
        }
        else {
            if (!stack.length) {
                return false;
            }
            else {
                const stackCompareValue = stack.pop();
                if (stackCompareValue !== map.get(c)) {
                    return false;
                }
            }
        }
    }

    return !stack.length;
};