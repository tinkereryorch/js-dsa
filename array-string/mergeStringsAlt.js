var mergeAlternately = function(word1, word2) {
    let mergedString = '';
    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) 
    {
        if (i < word1.length) {
            mergedString = mergedString.concat(word1[i]);
            i++;
        }
        
        if (j < word2.length) {
            mergedString = mergedString.concat(word2[j]);
            j++;
        }
    }

    return mergedString;
};

let result = mergeAlternately("ab", "cd");

console.log(result);

var mergeAlternately = function(word1, word2) {
    let mergedString = '';
   
    mergedString = mergedString.concat(word1[0]);
    mergedString = mergedString.concat(word2[0]);

    return mergedString;
};

let word1 = "ab";
let word2 = "cd";
let mergedString = '';
   
mergedString = mergedString.concat(word1[0]);
mergedString = mergedString.concat(word2[0]);
mergedString = mergedString.concat(word1[1]);
mergedString = mergedString.concat(word2[1]);

