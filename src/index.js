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
// let flatMapResult = [...intArray].flatMap((i) => [i * 2]);
//expected output
//[2, 4, 6, 8, 10]
// console.log("flatMapResult", flatMapResult);

//10 .forEach()
//expected output
//console.log(i)
// [...intArray].forEach(i => console.log(i))

//11 Array.from()
// let ArrayFromResult = Array.from('123');
//expected output
// console.log("ArrayFromResult", ArrayFromResult)

//12 .includes()
// let includesResult = [...intArray].includes(2);
//expected output
//true
// console.log("includesResult", includesResult)

//13 .indexOf()
// let indexOfResult = [...intArray].indexOf(2);
//expected output
//1
// console.log("indexOfResult", indexOfResult)

//14 Array.isArray()
// let isArrayResult = Array.isArray([1, 2, 3]);
//expected output
//true
// console.log("isArrayResult", isArrayResult)

//15 .join()
// let joinResult = [...intArray].join('+');
//expected output
//true
// console.log("joinResult", joinResult)

//16 .keys()
// const iterator = [...intArray].keys();
//expected output
//0, 1, 2, 3, 4
// for (const key of iterator) {
//   console.log(key);
// }

//17 .lastIndexOf()
// let lastIndexOfResult = [1, 2 , 3, 2, 2, 2].lastIndexOf(2);
//expected output
//5
// console.log("lastIndexOfResult", lastIndexOfResult)

//18 .map()
// let mapResult = [...intArray].map(i => i * 2);
//expected output
//[2, 4, 6, 8, 10]
// console.log("mapResult", mapResult)

//19 Array.of()
// let ArrayOfResult = Array.of(1, 2, 3);
//expected output
//[1, 2, 3]
// console.log("ArrayOfResult", ArrayOfResult);

//20 .unshift()
//добавляет в начало
// let unshiftArray = [1, 2, 3];
// unshiftArray.unshift(0);
// console.log("unshiftArray", unshiftArray);

//21 .push()
//добавляет в конец
// let pushArray = [0, 1, 2];
// pushArray.push(3);
// console.log("pushArray", pushArray);

//22 .shift()
//удаляет первый
// let shiftArray = [0, 0, 1, 2, 3];
// shiftArray.shift();
// console.log("shiftArray", shiftArray);

//23 .pop()
//удаляет последний
// let popArray = [0, 1, 2, 3, 3];
// popArray.pop();
// console.log("popArray", popArray);

//24 .reverse()
let reverseResult = [...intArray].reverse();
//expected output
//[5, 4, 3, 2, 1]
console.log("reverseResult", reverseResult);

//25 .slice()
let sliceResult = [...intArray].slice(0, 2);
//expected output
//[1, 2]
console.log("sliceResult", sliceResult);
