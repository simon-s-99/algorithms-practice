function isValid(s: string): boolean {
    const map: Map<string, string> = new Map<string, string>();
    map.set("{", "}");
    map.set("(", ")");
    map.set("[", "]");
    map.set("}", "{");
    map.set(")", "(");
    map.set("]", "[");

    let stack: Array<string> = new Array;

    for (const c of s) {
        if (c === "{" || c === "(" || c === "[") {
            stack.push(c);
        }
        else {
            if (!stack.length) {
                return false;
            }
            else {
                const stackCompareValue: string | undefined = stack.pop();
                if (stackCompareValue !== map.get(c)) {
                    return false;
                }
            }
        }
    }

    return !stack.length;
};
