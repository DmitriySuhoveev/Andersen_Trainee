const arr1 = [1,4,5,6,7,9,10];
const arr2 = [2,3,4,5,6,7,9];

let crossingArrays = arr1.filter(i=> arr2.includes(i));
let differenceArrays = arr1.filter(i=> !arr2.includes(i));
let uniteArrays = [...new Set([...arr1, ...arr2])];
console.log(uniteArrays);