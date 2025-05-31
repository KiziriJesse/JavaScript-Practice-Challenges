function containsDuplicate(nums) {
  if (
    nums[0] === nums[1] || nums[0] === nums[2] || nums[0] === nums[3] ||
    nums[1] === nums[2] || nums[1] === nums[3] ||
    nums[2] === nums[3]
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
