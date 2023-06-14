var prefixSum = function(nums) {
    let sumArray = [];

    if (nums.length === 0) {
        return null;
    }

    sumArray[0] = nums[0];

    for(let i = 1; i < nums.length; i++) {
        sumArray[i] = sumArray[i - 1] + nums[i];
    }

    return sumArray;
}

var nums = [10, 20, 30, 40, 50];
var result = prefixSum(nums);
console.log(result);