// Merge Strings Alternately - LeetCode 1768

/* You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string
*/

var mergeAlternately = function(word1, word2) {
    let finalWord = '';
    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) {
        
        if (i < word1.length) {
            finalWord += word1[i];
            i++;
        }

        if (j < word2.length) {
            finalWord += word2[j];
            j++;
        }
    }

    return finalWord;
}

let word1 = 'a';
let word2 = 'pq';

let result = mergeAlternately(word1, word2);

console.log(result);
