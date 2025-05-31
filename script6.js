function twoSum(nums, target) {
if (nums[0] + nums[1] === target) {
    return [0, 1];
}
else if (nums[0] + nums[2] === target) {
    return [0, 2];
}
else if (nums[1] + nums[2] === target) {
    return [1, 2];
}
}

console.log(twoSum([2,7,11], 9));
console.log(twoSum([3,4,6], 9));
console.log(twoSum([3,2,4], 6));
