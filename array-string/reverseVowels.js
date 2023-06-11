var reverseVowels = function(s) {
    let low = 0;
    let high = s.length - 1;
    let sArray = s.split('');
    let reverseString = '';

    while (low < high) {
        
        if (isVowel(sArray[low]) && isVowel(sArray[high])) {
            let tmp = sArray[low];
            sArray[low] = sArray[high];
            sArray[high] = tmp;
            low++;
            high--;
        }  
        
        if (isVowel(sArray[low]) && isVowel(sArray[high]) == false){
            high--;
        }

        if (isVowel(sArray[low]) == false) {
            low++;
        }
        
    }

    let stringArray = sArray;

    for (let i = 0; i < stringArray.length; i++) {
        reverseString += stringArray[i];
    }

    return reverseString;
};

var isVowel = function(a) {
    if (a === 'a' || 
        a === 'A' || 
        a === 'e' ||
        a === 'E' ||
        a === 'i' ||
        a === 'I' ||
        a === 'o' ||
        a === 'O' ||
        a === 'u' ||
        a === 'U' 
    ) {
        return true; 
    } 

    return false;
}


let word = 'leetcode';
var result = reverseVowels(word);
console.log(result);

let testWord = 'hillo';
console.log(testWord[1]);
var newWord = testWord.replace(testWord[1], 'e');
console.log(newWord);