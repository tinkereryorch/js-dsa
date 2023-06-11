var reverseWords = function(s) {
    let strimmedString = s.trim();
    let splitString = strimmedString.split(' ');
    let reversedArray = [];
    let reversedString = '';

    for (let i = splitString.length - 1; i >= 0; i--)  {
        reversedArray.push(splitString[i]);
    }

    let cleanReversedArray = reversedArray.filter(word => word !== '');

    reversedString = cleanReversedArray.join(' ');
    
    return reversedString;
}

var myString = "  A  blue fox  ";
var result = reverseWords(myString);
console.log(result);
