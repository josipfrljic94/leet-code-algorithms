const nums = [3, 2, 4];
const target = 6;

function findIndexes(arr) {
  if (!arr.length) return;
  let index1, index2;
  for (let i = 0; i < arr.length; i++) {
    index1 = i;
    var indexOfSecond = nums.findIndex((num) => num === target - arr[i]);

    if (indexOfSecond !== -1 && indexOfSecond !== i) {
      index2 = indexOfSecond;
      break;
    }
  }
  return [index1, index2];
}

function findIndex2(arr = []) {
  let index1, index2;
  let i = 0;
  while (i < arr.length) {
    var tmpNum = nums[i];
    var indexOfSecond = nums.findIndex((num) => num === target - tmpNum) ?? -1;
    if (indexOfSecond !== -1 && indexOfSecond !== i) {
      index1 = i;
      index2 = indexOfSecond;
      break;
    }
    i++;
  }
  return [index1, index2];
}

console.log(findIndexes(nums));

console.log(findIndex2(nums));
