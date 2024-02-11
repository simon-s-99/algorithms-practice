function isAnagram(s: string, t: string): boolean {
    let sMap = new Map<string, number>();
    let tMap = new Map<string, number>();

    if (s.length != t.length) {
        return false;
    }

    for (let i:number = 0; i < s.length; i++) {
        let sLetter:string = s[i];
        let tLetter:string = t[i];

        if (sMap.has(sLetter)) {
            let currentValue:number = sMap.get(sLetter);
            sMap.set(sLetter, currentValue + 1);
        }
        else {
            sMap.set(sLetter, 1);
        }

        if (tMap.has(tLetter)) {
            let currentValue:number = tMap.get(tLetter);
            tMap.set(tLetter, currentValue + 1);
        }
        else {
            tMap.set(tLetter, 1);
        }
    }

    for (let i:number = 0; i < s.length; i++) {
        let sLetter:string = s[i];

        let sValue:number = sMap.get(sLetter);
        let tValue:number = tMap.get(sLetter);

        if (sValue != tValue) { 
            return false; 
        }
    }

    return true;
};