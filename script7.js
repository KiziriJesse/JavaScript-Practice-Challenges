
function sortArray(array) {
  let evens = [];
  let odds = [];
  let chars = [];

  for (let index = 0; index < array.length; index++) {
    const item = array[index];

    if (typeof item === "number" && Number.isInteger(item)) {
      if (item % 2 === 0) {
        evens.push(item);
      } else {
        odds.push(item);
      }
    } else if (typeof item === "string" && item.length === 1) {
      chars.push(item);
    }
  }
  evens.sort((a, b) => a - b);
  odds.sort((a, b) => a - b);
  chars.sort();

  return {
    evens: evens,
    odds: odds,
    chars: chars
  };
}
console.log(sortArray([1, 2, 'a', 3, 4, 'b', 5, 'z', 10]))
console.log(sortArray([4, 1, "a", 7, 2, "z", 3.5, 6, "b"]));
