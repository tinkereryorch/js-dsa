// The underlying concept is the prefixSum 
var productExceptSelf = function(nums) {
    const result = [];
    let prefix = 1;
    let suffix = 1;

    for(let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    for(let i = nums.length -1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
}

let nums = [1,2,3,4];
var product = productExceptSelf(nums);
console.log(product);