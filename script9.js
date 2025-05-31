function getSingleNumber(nums) {
  let a = nums[0];
  let b = nums[1];
  let c = nums[2];   

if (a === b) {
    return c;
}
else if (a === c) {
    return b;
}
else {
    return a;
}
}

console.log(getSingleNumber([2,2,1]))
console.log(getSingleNumber([6,3,6]))

'for 5 numbers'

function getSingleNumb(nums) {
    let a = nums[0];
    let b = nums[1];
    let c = nums[2];
    let d = nums[3];
    let e = nums[4];

    if (a === b && c === d) return e;
    if (a === b && c === e) return d;
    if (a === b && d === e) return c;
    if (a === c && d === e) return b;
    if (b === c && d === e) return a;
    if (b === d && c === e) return a;
    if (a === d && b === c) return e;
    if (a === e && b === d) return c;
    if (a === e && c === d) return b;
}

console.log(getSingleNumb([4,1,2,1,2]))
console.log(getSingleNumb([7,9,9,3,3]))
console.log(getSingleNumb([2,3,5,2,3]))
console.log(getSingleNumb([7,7,9,6,6]))
