var gcdOfStrings = function (str1, str2) {
    let x = '';

    if (str1.concat(str2) != str2.concat(str1)) return x;

    let gcd = (x, y) => {
        if (y === 0) {
            return x;
        }

        return gcd(y, x % y);
    }

    let particle = gcd(str1.length, str2.length);

    return str1.slice(0, particle);
}

var result = gcdOfStrings('ABABAB', 'ABAB');
console.log(result); // 'AB'


