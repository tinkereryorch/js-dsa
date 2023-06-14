function increasingTriplet(nums) {
    let first = Infinity;  // Smallest element found so far
    let second = Infinity; // Second smallest element found so far
  
    for (let num of nums) {
      if (num <= first) {
        // Found a smaller or equal element, update first
        first = num;
      } else if (num <= second) {
        // Found a smaller or equal element, update second
        second = num;
      } else {
        // Found a third element greater than first and second
        return true;
      }
    }
  
    return false; // No triplet found
  }

  var result = increasingTriplet([2,1,5,0,4,6]);
  console.log(result);