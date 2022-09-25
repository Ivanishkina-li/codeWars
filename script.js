let myArray = ["a", "b", "c", "d"];
// Only change code below this line

// Only change code above this line
console.log(myArray);

function mixedNumbers(arr) {
  // Only change code below this line
  arr.push(7, "VIII", 9);
  arr.unshift("I", 2, "three");
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0, 1);
arr.splice(3, 4);
// Only change code above this line
console.log(arr);
function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    newArr = [
      ...newArr, //make a copy of the previous newArr
      [
        // and add a new array
        ...arr, //that has a copy of `arr`
      ],
    ];
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut());

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) > -1) {
    return true;
  } else {
    return false;
  }

  // if(fruits.indexOf(fruitName) > -1) {
  //         return true;
  //     } else {
  //         return false;
  //     }
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let outer = arr[i];
    if (outer.indexOf(elem) === -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(outer); //Inserts the element of the array in the new filtered array
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

//убрать пробелы
function noSpace(x) {
  x = x.replace(/\s/g, "");
  return x;
}
noSpace("gh jk");

// У всех животных праздник! Каждое животное приносит одно блюдо. Существует только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и название животного. Например, большая голубая цапля приносит чесночный наан, а синица - шоколадный торт.

// Напишите функцию feast, которая принимает имя животного и блюдо в качестве аргументов и возвращает true или false, чтобы указать, разрешено ли зверю приносить блюдо на пир.

// Предположим, что beast и dish всегда являются строчными строками, и каждая из них содержит как минимум две буквы. зверь и блюдо могут содержать дефисы и пробелы, но они не будут отображаться в начале или конце строки. Они не будут содержать цифр.
function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
    return [];
  }
  var array = [0, 0];

  for (var i = 0; i < input.length; i++) {
    if (input[i] <= 0) {
      array[1] += input[i];
    } else {
      array[0] += 1;
    }
  }
  return array;
}
//удаляет дупликаты из массива
function distinct(a) {
  uniq = [...new Set(a)];
  return uniq;
}
