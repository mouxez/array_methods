let intArray = [1, 2, 3, 4, 5];
let negArray = [-1, 2, 3, 4, -5];
let strArray = ["one", "two", "three"];
let multiArray = [[1, 2], [3, 4], 5, [[6, [7, 8]]]];
let anagrams = ["кабан", "банка", "рано", "нора", "сосна", "насос"];

//1 .concat()
// let concatResult = [...intArray].concat(negArray, ...strArray, 10, "one");
//expected output
//[1, 2, 3, 4, 5, -1, 2, 3, 4, -5, 10, 'one']
// console.log("concat", concatResult);

//2 .copyWithin()
// let copyWithinResult = [...intArray].copyWithin(0, 1);
//expected output
//[2, 2, 3, 4, 5]
// console.log("copyWithin", copyWithinResult);

//3 .every()
// let everyResult = [...negArray].every((item) => {
//   return item > 0;
// });
//expected output
//false
// console.log("everyResult", everyResult);

//4 .fill()
// let obj = { id: 10 };
// let fillResult = [...intArray].fill(obj, 2);
//expected output
//[1, 2, {id: 10}, {id: 10}, {id: 10}]
// console.log("fillResult", fillResult);

//5 .filter()
// const filter = (num) => {
//   if (num < 0) {
//     return false;
//   } else if (num > 3) {
//     return false;
//   }
//   return true;
// };
// let filteredResult = [...negArray].filter(filter);
//expected output
//[2,3]
// console.log("filteredResult", filteredResult);

//6 .find()
// let findResult = [...intArray].find(i => i === 5);
//expected output
//5
// console.log('findResult', findResult);

//7 .findIndex()
// let findIndexResult = [...intArray].findIndex(i => i === 5)
//expected output
//4
// console.log('findIndexResult', findIndexResult);

//8 .flat()
// let flatResult = [...multiArray].flat(Infinity);
//expected output
//[1, 2, 3, 4, 5, 6, 7, 8]
// console.log('flatResult', flatResult);

//9 .flatMap()
let flatMapResult = [...intArray].flatMap((i) => [i * 2]);
//expected output
//[2, 4, 6, 8, 10]
console.log("flatMapResult", flatMapResult);

//10
