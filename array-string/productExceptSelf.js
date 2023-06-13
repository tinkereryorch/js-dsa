var productExceptSelf = function(nums) {
    const result = [];

    let prefix = 1;

    for(let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    console.log(result, prefix);
}

let nums = [1,2,3,4];
productExceptSelf(nums);