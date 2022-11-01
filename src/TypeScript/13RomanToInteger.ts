const translator: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
}

function romanToInt(s: string): number {
    let sum: number = 0;
    let lastNumber: number = 0;
    [...s].forEach((num) => {
        if (lastNumber < translator[num]) {
            sum -= lastNumber;
            sum += (translator[num] - lastNumber);
        } else {
            sum += translator[num];
        }

        lastNumber = translator[num];
    });
    return sum;
};