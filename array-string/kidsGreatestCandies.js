var kidsWithCandies = function(candies, extraCandies) {
    let results = [];
    let max = Math.max(...candies);

    for(let i = 0; i < candies.length; i++) {
        
        if (candies[i] + extraCandies >= max) {
            results.push(true);
        }
        else
        {
            results.push(false);
        }
        
    }

    return results;
}

var candies = [2,3,5,1,3];
var extraCandies = 3;
var maxCandies = kidsWithCandies(candies, extraCandies);

console.log(maxCandies);