/*-----------------------------------------------------------------------------
Challenge: 00-sayHello (example)

Difficulty: Basic

Prompt:

Write a function called sayHello that returns the string "Hello!".

Examples:

sayHello() //=> Hello!
-----------------------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:

function sayHello() {
  return 'Hello!'
}

// console.log(sayHello())

/*-----------------------------------------------------------------------------
Challenge: 01-addOne

Difficulty: Basic

Prompt:

Write a function called addOne that takes a single number as an argument and returns that number plus 1.

Examples:

addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------------------*/
// Your solution for 01-addOne here:

function addOne(num) {
  return num + 1
}

// console.log(`Solution for 01-addOne: ${addOne(5)}`)

/*-----------------------------------------------------------------------------
Challenge: 02-addTwoNumbers

Difficulty: Basic

Prompt:

- Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
- If either argument is not a number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:
function addTwoNumbers(num1, num2){
  if(isNaN(num1) || isNaN(num2)){
    return NaN
  }
  else {
    return num1 + num2
  } 
} 

// console.log(`Solution for 02-addTwoNumbers: ${addTwoNumbers(4,4)}`)


/*-----------------------------------------------------------------------------
Challenge: 03-sumNumbers

Difficulty: Basic

Prompt:

- Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
- If the array is empty, return 0 (zero).

Examples:

sumNumbers([10]) //=> 10
sumNumbers([5, 10]) //=> 15
sumNumbers([2, 10, -5]) //=> 7
sumNumbers([]) //=> 0

-----------------------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:

function sumNumbers(newArray) {
  let newArraySum = 0
  for (let i = 0; i < newArray.length; i++ ) {
    newArraySum += newArray[i]
  }
  return newArraySum
}


// console.log(`Solution for 03-sumNumbers: ${sumNumbers([10])}`)
// console.log(`Solution for 03-sumNumbers: ${sumNumbers([5, 10])}`)
// console.log(`Solution for 03-sumNumbers: ${sumNumbers([2, 10, -5])}`)
// console.log(`Solution for 03-sumNumbers: ${sumNumbers([])}`)

/*-----------------------------------------------------------------------------
Challenge: 04-addList

Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).

Examples:

add(1) //=> 1
add(1,50,1.23) //=> 52.23
add(7,-12) //=> -5
-----------------------------------------------------------------------------*/
// Your solution for 04-addList here:

function addList () {
  let numArgs = 0
  for (let i=0; i < arguments.length; i++) {
    numArgs += arguments[i]
  }
  return numArgs
}

// console.log(`Solution for 04-addList: ${addList(1)}`)
// console.log(`Solution for 03-addList: ${addList(1,50,1.23)}`)
// console.log(`Solution for 03-addList: ${addList(7, -12)}`)
// console.log(`Solution for 03-addList: ${addList()}`)

/*-----------------------------------------------------------------------------
Challenge: 05-computeRemainder

Difficulty: Basic

Prompt:

- Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
- The first argument should be the dividend, and the second argument should be the divisor.
- If a 0 is passed in as the second argument, you should return JavaScript's special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.

Examples:

computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------------------*/
// Your solution for 05-computeRemainder:

function computeRemainder (dividend, divisor) {
  if (divisor === 0) return Infinity;
  return dividend - (Math.floor(dividend / divisor) * divisor)
}

// console.log(`Solution for 05-computeRemainder: ${computeRemainder(10,2)}`)
// console.log(`Solution for 05-computeRemainder: ${computeRemainder(4,0)}`)
// console.log(`Solution for 05-computeRemainder: ${computeRemainder(10.5,3)}`)

/*-----------------------------------------------------------------------------
Challenge: 06-range

Difficulty: basic

Prompt:

- Write a function called range that accepts two integers as arguments and returns an array of integers starting with the first argument up to one less than the second argument.
- The range function must be called with the first argument less than or equal to the second argument; otherwise, return the string "First argument must be less than second".

Examples:

range(1,4) //=> [1,2,3]
range(-2, 3) //=> [-2,-1,0,1,2]
range(1,1) //=> []
range(5,2) //=> "First argument must be less than second"
-----------------------------------------------------------------------------*/
// Your solution for 06-range here:

function range (startNum, endNum) {
  let i = 0;
  let rangeList = [];
  if (endNum < startNum) {
    return "First argument must be less than second"
  } else {
    for(i = startNum; i < endNum; i++) {
      rangeList.push(i)
    }
  } return rangeList
}


// console.log(`Solution for 06-range: ${range(1,4)}`)
// console.log(`Solution for 06-range: ${range(-2,3)}`)
// console.log(`Solution for 06-range: ${range(1,1)}`)
// console.log(`Solution for 06-range: ${range(5,2)}`)

/*-----------------------------------------------------------------------------
Challenge: 07-reverseUpcaseString

Difficulty: Basic

Prompt:

Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.

Examples:

reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
-----------------------------------------------------------------------------*/
// Your solution for 07-reverseUpcaseString here:

function reverseUpcaseString (string) {
  return string.split('').reverse().join('').toUpperCase('')
}


// console.log(`Solution for 07-reverseUpcaseString: ${reverseUpcaseString('!yensid evol i')}`)
/*-----------------------------------------------------------------------------
Challenge: 08-removeEnds

Difficulty: Basic

Prompt:

- Write a function called removeEnds that accepts a single string argument, then returns a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.

Examples:

removeEnds('SEI Rocks!'); //=> "EI Rocks"
removeEnds('a'); //=> "" (empty string)
-----------------------------------------------------------------------------*/
// Your solution for 08-removeEnds here:
function removeEnds (inString) {
  if (inString.length < 3) {
    return ""
  } else {
    return(inString.substr(1,inString.length-2))
  }
}

// console.log(`Solution for 08-removeEnds: ${removeEnds('SEI Rocks!')}`)
// console.log(`Solution for 08-removeEnds: ${removeEnds('a')}`)

/*-----------------------------------------------------------------------------
Challenge: 09-charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
- The returned object should have keys representing the character with its value set to the number of times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be counted too.

Examples:

charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }
-----------------------------------------------------------------------------*/
// Your solution for 09-charCount here:

function charCount (inString) {
  let i = 0
  let charCountObj = {}
  for (i = 0; i < inString.length; i++) {
    let jChar = inString.charAt(i); 
    if (charCountObj.hasOwnProperty(jChar)) 
    {
      charCountObj[jChar]++ 
    }
    else {
      charCountObj[jChar] = 1 
    }
  }
  return charCountObj
}



// console.log("Solution to 09-charCount", charCount('hello'))
// console.log("Solution to 09-charCount", charCount('Today is fantastic!'))

/*-----------------------------------------------------------------------------
Challenge: 10-formatWithPadding

Difficulty: Basic

Prompt:

- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to "pad" the returned string to.
- The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.

Examples:

formatWithPadding(123, '0', 5); //=> "00123"
formatWithPadding(42, '*', 10); //=> "********42"
formatWithPadding(1234, '*', 3); //=> "1234"
-----------------------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

function formatWithPadding (inNum, characterPad, stringLength) {
  let numString = inNum.toString()
  while (numString.length < stringLength ) {
    numString = characterPad + numString;
  }
  return numString
}

// console.log("Solution to 10-formatWithPadding: " + formatWithPadding(123, '0', 5))
// console.log("Solution to 10-formatWithPadding: " + formatWithPadding(42, '*', 10))
// console.log("Solution to 10-formatWithPadding: " + formatWithPadding(1234, '*', 3))
/*-----------------------------------------------------------------------------
Challenge: 11-isPalindrome

Difficulty: Intermediate

Prompt:

- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that is the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.

Examples:

isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

// function isPalindrome (palinString) {
//   let i, j = 0;
//   let foundPalindrome = true
//   if (palinString.length <= 1) {
//   return true
//   } 
//   let tempString = palinString.toUpperCase()
//   tempString = tempString.split(" ").join("") 
//   if (tempString.length <= 1) {
//     return true }


//     foundPalindrome = true;
//     i = 0
//     j = tempString.length -1
//     while ( (i < j) && (foundPalindrome === true)) {
//       if (tempString.charAt(i) === tempString.charAt(j))
//       {
//         i++
//         j--
//       }
//       else {
//         foundPalindrome = false
//       }
//     }
//     return foundPalindrome
// } 

function isPalindrome(string) {
  let regex = /[\W_]/g;
  let newString = string.toUpperCase().replace(regex, '');
  let reverseStr = newString.split('').reverse().join('');
  return reverseStr === newString;
}

  


// console.log("Solution to 11-isPalindrome: " + isPalindrome('SEI Rocks'))
// console.log("Solution to 11-isPalindrome: " + isPalindrome('rotor'))
// console.log("Solution to 11-isPalindrome: " + isPalindrome(' A nut for a jar of tuna'))
// console.log("Solution to 11-isPalindrome: " + isPalindrome(''))
/*-----------------------------------------------------------------------------
Challenge: 12-hammingDistance

Difficulty: Intermediate

Prompt:

In information theory, the hamming distance refers to the count of the differences between two strings of equal length. It is used in computer science for such things as implementing a "fuzzy search" capability.

- Write a function named hammingDistance that accepts two arguments, which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.

Examples:

hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:
function hammingDistance (word, matchingWord) {
  let countChars = 0;
  let i = 0;
  if (word.length !== matchingWord.length) {
    return NaN; 
  } else {    
  for (i = 0; i < word.length; i++) {
    if ( word.charAt(i) !== matchingWord.charAt(i) ) {
      countChars++;
    }
  } 
  
}
return countChars
}



// console.log("Solution to 12-hammingDistance: " + hammingDistance('abc', 'abc'))
// console.log("Solution to 12-hammingDistance: " + hammingDistance('a1c', 'a2c'))
// console.log("Solution to 12-hammingDistance: " + hammingDistance('!!!!', '****'))
// console.log("Solution to 12-hammingDistance " + hammingDistance('abc', 'ab'))

/*-----------------------------------------------------------------------------
Challenge: 13-mumble

Difficulty: Intermediate

Prompt:

- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg. Additionally, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..

Examples:

mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------------------*/
// Your solution for 13-mumble here:
function mumble (inString) {
  let i, j = 0;     
  let outString = inString[0];  
  if (inString.length === 1)
  return outString;
  for (i = 1; i < inString.length; i++ ) {
    outString = outString + '-';
    outString = outString + inString.charAt(i).repeat(i + 1) 
  }
  return outString;
}

// console.log("Solution to 13-mumble: "+ mumble('X')); 
// console.log("Solution to 13-mumble: " + mumble('abc')); 
// console.log("Solution to 13-mumble: " + mumble('121')); 
// console.log("Solution to 13-mumble: " + mumble('!A 2')); 


/*-----------------------------------------------------------------------------
Challenge: 14-fromPairs

Difficulty: Intermediate

Prompt:

- Write a function named fromPairs that creates an object from an array containing nested arrays.
- Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
- If a key appears in multiple pairs, the rightmost pair should overwrite the previous entry in the object.

Examples:

fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
-----------------------------------------------------------------------------*/
// Your solution for 14-fromPairs here:

function fromPairs(arr) {
  let newObject = {}
  newObject = Object.fromEntries(arr)
  return newObject
}


// console.log("Solution to 14-fromPairs:", fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) );
// console.log("Solution to 14-fromPairs:", fromPairs([ ['name', 'Sam'], ['age', 24], ['name', 'Sally'] ]))

/*-----------------------------------------------------------------------------
Challenge: 15-mergeObjects

Difficulty: Intermediate

Prompt:

- Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.

Examples:

mergeObjects({}, {a: 1}); //=> {a: 1} (same object as first arg)
mergeObjects({a: 1, b: 2, c: 3}, {d: 4}); //=> {a: 1, b: 2, c: 3, d: 4}
mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44}); //=> {a: 1, b: 22, c: 3, d: 44}
-----------------------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:

function mergeObjects(mainObject, ...nObjects) {
  return Object.assign(mainObject, ...nObjects)
}

// console.log("Solution to 15-mergeObjects:", mergeObjects({}, {a: 1}));
// console.log("Solution to 15-mergeObjects:", mergeObjects({a: 1, b: 2, c: 3}, {d: 4}));
// console.log("Solution to 15-mergeObjects:", mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44})); 

/*-----------------------------------------------------------------------------
Challenge: 16-findHighestPriced

Difficulty: Intermediate

Prompt:

- Write a function named findHighestPriced that accepts a single array of objects.
- The objects contained in the array are guaranteed to have a price property holding a numeric value.
- The function should return the object in the array with the largest value held in the price property.
- If there's a tie between two or more objects, return the first of those objects in the array.
- Return the original object, not a copy.
- Do not mutate the array that is passed in.

Examples:

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'c3', price: 50 } 

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:

function findHighestPriced ( inArray ) {
  let j = 0
  let jSave = 0
  let jPrice = inArray[0].price
  for (j = 1; j < inArray.length - 1; j++ )
  {
    if ( inArray[j].price > jPrice)
    {
      jSave = j;
      jPrice = inArray[j].price
    }
  }
  return inArray[jSave]
}

// console.log("Solution to 16-findHighestPriced:", findHighestPriced([
//     { sku: 'a1', price: 25 },
//     { sku: 'b2', price: 5 },
//     { sku: 'c3', price: 50 },
//     { sku: 'd4', price: 10 }
//   ]));
// console.log("Solution to 16-findHighestPriced:", findHighestPriced([
//   { sku: 'a1', price: 25 },
//   { sku: 'b2', price: 50 },
//   { sku: 'c3', price: 50 },
//   { sku: 'd4', price: 10 }
// ]));



/*-----------------------------------------------------------------------------
Challenge: 17-mapArray

Difficulty: Intermediate

Prompt:

The goal of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.map method.

- Write a function named mapArray that accepts two arguments: a single array and a callback function.
- The mapArray function should return a new array of the same length as the array argument.
- The mapArray function should iterate over each element in the array (first arg). For each iteration, invoke the callback function (2nd arg), passing to it as arguments, the current element, and its index.
- Whatever is returned by the callback function should be included in the new array at current iteration's index.

Examples:

mapArray( [1, 2, 3], function(n) {
  return n * 2;
} );
//=> [2, 4, 6] (a new array)

mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} - ${f}`;
} );
//=> ["1 - rose", "2 - tulip", "3 - daisy"]
-----------------------------------------------------------------------------*/
// Your solution for 17-mapArray here:
function mapArray (inArray, cbFunction) {
  let outArray = [];

  inArray.forEach(function( inArrayElement, j ) {
    // console.log(`before call ${inArrayElement},${j}`)
    outArray.push( cbFunction( inArrayElement, j))
    // console.log(`after call ${outArray}`)
  })
  return outArray
}




// console.log("Solution to 17-mapArray:", mapArray( [1, 2, 3], function(n) {
//   return n * 2;
// } ));

// console.log("Solution to 17-mapArray:", mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
//   return `${i + 1} - ${f}`;
// } ));


/*-----------------------------------------------------------------------------
Challenge: 18-reduceArray

Difficulty: Intermediate

Prompt:

The goal of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.

- Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and (3) a value used as the initial value of the "accumulator".
- The reduceArray function should return whatever is returned by the callback function on the last iteration.
- The reduceArray function should iterate over each element in the array (first arg). For each iteration, invoke the callback function (2nd arg), passing to it three arguments: (1) the "accumulator", which is the value returned by the callback during the previous iteration; (2) the current element; and (3) the index of the current iteration.
- On the first iteration, provide the third argument passed to reduceArray as the first argument when invoking the callback. For subsequent iterations, provide the value returned by the callback during the previous iteration.

Examples:

reduceArray( [1, 2, 3], function(acc, n) {
  return acc + n;
}, 0);
//=> 6

reduceArray( [1, 2, 3], function(acc, n, i) {
  return acc + n + i;
}, 0);
//=> 9

reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1;
  return acc;
}, {} );
//=> {"Yes": 2, "No": 1, "Maybe": 1}
-----------------------------------------------------------------------------*/
// Your solution for 18-reduceArray here:
function reduceArray (array, cbFunction, init) {
  let accum = init;
  array.forEach(function(arrayEl, idx) {
    accum = cbFunction(accum, arrayEl, idx)
  })
  return accum
}


// console.log("Solution to 18-reduceArray:",reduceArray( [1, 2, 3], function(acc, n) {
//   return acc + n;
// }, 0))

// console.log("Solution to 18-reduceArray:",reduceArray( [1, 2, 3], function(acc, n, i) {
//   return acc + n + i;
// }, 0));

// console.log("Solution to 18-reduceArray:",reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
//   acc[v] = acc[v] ? acc[v] + 1 : 1;
//   return acc;
// }, {} ));

/*-----------------------------------------------------------------------------
Challenge: 19-flatten

Difficulty: Intermediate

Prompt:

- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays may be nested at any level.
- If any of the arrays have duplicate values, those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering, as shown in the examples below.

Hint:

- This assignment provides an excellent opportunity to use recursion (a function that calls itself). You can also solve it by using an inner function.

Examples:

flatten( [1, [2, 3]] );
//=> [1, 2, 3] (a new array) 

flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------------------*/
// Your solution for 19-flatten here:

function flatten(myArray) {
let newArray = []
  myArray.forEach(function(element) {
    if (Array.isArray(element)) {
      newArray = newArray.concat(flatten(element)) }
      else {
      newArray.push ( element)
    } 
  })
  return newArray
}

// console.log("Solution to 19-flatten:",flatten( [1, [2, 3]] )); 
// console.log("Solution to 19-flatten:",flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] ))
/*-----------------------------------------------------------------------------
Challenge: 20-isPrime

Difficulty: Intermediate

Prompt:

- Write a function named isPrime that returns true when the integer argument passed to it is a prime number and false when the argument passed to it is not prime.
- A prime number is a whole number (integer) greater than 1 that is evenly divisible by only itself.

Examples:

isPrime(2) //=> true
isPrime(3) //=> true 
isPrime(4) //=> false
isPrime(29) //=> true
isPrime(200) //=> false
-----------------------------------------------------------------------------*/
// Your solution for 20-isPrime here:
  
function isPrime (inputNumber) {
let isNumPrime = false
let jIndex = 0  
if (inputNumber < 2 || !Number.isInteger(inputNumber)) return false;
if (inputNumber === 2 || inputNumber === 3) {
  return isNumPrime = true
} else if (inputNumber % 2 === 0 || inputNumber % 3 === 0) {
  return isNumPrime = false
} else { 
  jIndex = 5  
  isNumPrime = true 
  while (isNumPrime === true && jIndex * jIndex <= inputNumber) {
    if (inputNumber % jIndex === 0) {
      return isNumPrime = false
    } else { 
      jIndex += 2 
      if (jIndex % 3 === 0) {
        jIndex += 2 
      } 
    }
  }
  return isNumPrime
 } 
} 

// console.log(`Solution for 20-isPrime 2 ${isPrime(2)}`)
// console.log(`Solution for 20-isPrime 3 ${isPrime(3)}`)
// console.log(`Solution for 20-isPrime 4 ${isPrime(4)}`)
// console.log(`Solution for 20-isPrime 29 ${isPrime(29)}`)
// console.log(`Solution for 20-isPrime 200 ${isPrime(200)}`)
/*-----------------------------------------------------------------------------
Challenge: 21-primeFactors

Difficulty: Intermediate

Prompt:

Now that you have solved the last challenge of determining if a whole number is a prime number, expand upon that concept to:
- Write a function named primeFactors that accepts a whole number greater than one (1) as an argument and returns an array of that argument's prime factors.
- The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
- If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty array.

Examples:

primeFactors(2) //=> [2]
primeFactors(3) //=> [3]
primeFactors(4) //=> [2, 2]
primeFactors(18) //=> [2, 3, 3]
primeFactors(29) //=> [29]
primeFactors(105) //=> [3, 5, 7]
primeFactors(200) //=> [2, 2, 2, 5, 5]
-----------------------------------------------------------------------------*/
// Your solution for 21-primeFactors here:
function primeFactors(inputNumber) {
  let arrayPrimeFactors = []
  let arrayPFIndex = 0
  let jNum = inputNumber

  let nextFactor = 2
  let moreSearch = true

  if (jNum <= 1) {
    return []
  } else {
    moreSearch = true 
    nextFactor = 2 
    let i = 0
    while (moreSearch === true && i < 80) {
      i++
      if (jNum % nextFactor === 0) {
        arrayPrimeFactors.push(nextFactor)
        arrayPFIndex += 1 
        jNum = jNum / nextFactor
        if (jNum === 1) {
          moreSearch = false
        }
      }
      else {
        if (nextFactor === 2) {
          nextFactor = 3
        } else {
          nextFactor += 2
        }
        if (nextFactor > jNum) {
          moreSearch = false
        }
      }
    }
  }
  return arrayPrimeFactors
} 

// console.log(`Is primeFactors 2: ${primeFactors(2)}`)
// console.log(`Is primeFactors 3: ${primeFactors(3)}`)
// console.log(`Is primeFactors 4: ${primeFactors(4)}`)
// console.log(`Is primeFactors 18: ${primeFactors(18)}`)
// console.log(`Is primeFactors 29: ${primeFactors(29)}`)
// console.log(`Is primeFactors 105: ${primeFactors(105)}`)
// console.log(`Is primeFactors 200: ${primeFactors(200)}`)



/*-----------------------------------------------------------------------------
Challenge: 22-intersection

Difficulty: Intermediate

Prompt:

- Write a function named intersection that accepts two arguments, which are both arrays. The array arguments may contain any mixture of strings, numbers, or booleans - but no reference types (objects).
- The function should return a new array containing all elements in common, including repeating element values.
- The ordering of the elements in the returned array is not important.
- If there are no elements in the arrays in common, the intersection function should return an empty array.
- The function should not mutate (change) either argument.

Examples:

intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------------------*/
// Your solution for 22-intersection here:
function intersection( inArray1, inArray2 ) {

  let outArray = [];
  let tempArray1 = inArray1;
  let tempArray2 = inArray2;

  let j1, j2 = 0;
  let j12Match = false;

  for ( j1 = 0; j1 < tempArray1.length; j1++ ) {
    j12Match = false;
    // Check if this item is found in array2.
    for ( j2 = 0; j2 < tempArray2.length && j12Match === false; j2++ ) {
      if ( typeof tempArray1[j1] === `string` ) {
        if ( 0 === tempArray1[j1].localeCompare( tempArray2[j2] )) {
          j12Match = true;  
        } 
      } else {
        if ( tempArray1[j1] === tempArray2[j2] ) {
          j12Match = true
        }
      }
      
    }
    if ( j12Match === true ) {
      outArray.push( tempArray1[j1] );
      tempArray2.splice( j2 - 1, 1 )
    }
  }
  return outArray
}


// console.log("Solution to 22-intersection:", intersection(['a', 1], []))
// console.log("Solution to 22-intersection:", intersection(['a', 1], [true, 'a', 15])); 
// console.log("Solution to 22-intersection:", intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1])) 



/*-----------------------------------------------------------------------------
Challenge: 23-balancedBrackets

Difficulty: Intermediate

Prompt:

- Write a function called balancedBrackets that accepts a single string as an argument.
- The input string is composed entirely of parentheses, brackets, or curly braces, i.e., (), [], or {}. Referred to as "braces" from this point forward.
- The balancedBrackets function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them. These examples may explain it best:

Examples:

balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:
function balancedBrackets ( inString ) {
  let myStack = [];
  let balanced = true;
  let j = 0;

  for ( j= 0; j < inString.length && balanced === true; j++ ) {
    switch ( inString.charAt(j) ) {
      case '(':
      case '[':
      case '{':
        myStack.push(inString.charAt(j));
        break;

      case ')':
        if ( myStack[myStack.length-1] === '(' ) {
          myStack.pop();
        }
        else
        {
          balanced = false;
        }
        break;
        case ']':
          if ( myStack[myStack.length-1] === '[' )
          {
            myStack.pop()
          }
          else 
          {
            balanced = false;
          }
          break;

          case '}':
            if ( myStack[myStack.length-1] === '{' )
            {
              myStack.pop();
            }
            else
            {
              balanced = false;
            }
            break;

            default:
              console.log(`error message: unrecogonized bracket ${inSTrring.charAt(j)} at position ${j}`)
              balanced = false;
              break;
    }
  }
  return balanced
}



// console.log("Solution to 23-balancedBrackets:",balancedBrackets( '()' )) // => true
// console.log("Solution to 23-balancedBrackets:",balancedBrackets( '(]' )) // => false
// console.log("Solution to 23-balancedBrackets:",balancedBrackets( '[{}]' )) // => true
// console.log("Solution to 23-balancedBrackets:",balancedBrackets( '[(])' )) // => false
// console.log("Solution to 23-balancedBrackets:",balancedBrackets( '[({}[])]' )) // => true


/*-----------------------------------------------------------------------------
Challenge: 24-isWinningTicket

Difficulty:Intermediate

Prompt:

- Write a function called isWinningTicket that accepts a single array as an argument.
- The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays. The first value of a nested array will be a string, the second an integer.
- The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
- If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.

Hints:

- A character/string can be created from a character code using the String.fromCharCode() class method.
- A character within a string's character code can be obtained using the charCodeAt() string method.

Examples:

isWinningTicket( [ ['ABC', 65] ] ) // => true
isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false
-----------------------------------------------------------------------------*/
// Your solution for 24-isWinningTicket here:
//What are the asky code
function isWinningTicket (arrayOfTickets) {
  let haveWinner = true;
  let iTicket, j = 0;

  for ( iTicket = 0; iTicket < arrayOfTickets.length && haveWinner === true; iTicket++ ) {
    let stringFromCode = String.fromCharCode(arrayOfTickets[iTicket][1]);
    if ( !arrayOfTickets[iTicket][0].includes(stringFromCode) ) {
      haveWinner = false
    }
  }
  return haveWinner
}

// console.log("Solution to 24-isWinningTicket:",isWinningTicket( [ ['ABC', 65] ] )) // => true
// console.log("Solution to 24-isWinningTicket:",isWinningTicket( [ ['ABC', 999], ['XY', 89] ] )) // => false
// console.log("Solution to 24-isWinningTicket:",isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] )) // => true
// console.log("Solution to 24-isWinningTicket:",isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] )) // => false

/*-----------------------------------------------------------------------------
Challenge: 25-getNumForIP

Difficulty: Intermediate

Prompt:

- Write a function called getNumForIP that accepts a single string as an argument.
- The input string is formatted as an IPv4 address used in networking, such as '192.156.99.15'. To the computer, IP addresses are 32-bit binary numbers. However, people usually find it more convenient to work with these numbers as four sets of 8-bit integers in their decimal form. Each set is separated by a '.' character.
- The getNumForIP function should return the numeric value of the string IP address being passed in as an argument.

Hints:

- Each 8-bit number can hold a value between 0 and 255.
- An IP's right most 8-bit number represents how many of 256 raised to the power of 0 (equals 1) there are. The next 8-bit number represents how many of 256 raised to the power of 1 (256) there are, etc. For example, if you took the right-most two 8-bit numbers of the IP address 192.156.99.15, you would have 15 * (256 ** 0), which equals 15, and 99 * (256**1), which equals 25344.
- To compute the numeric value for an IP address, you first compute the value for each of the four 8-bit chunks (as described in the above hint), and add them together!

Examples:

getNumForIP( '0.0.0.1' ) // => 1
getNumForIP( '0.0.2.0' ) // => 512
getNumForIP( '192.156.99.15' ) // => 3231474447
getNumForIP( '10.0.0.1' ) // => 167772161
-----------------------------------------------------------------------------*/
// Your solution for 25-getNumForIP here:
function getNumForIP( inIPString ) {
  let IPSum = 0;
  let j = 0
  let IPNumber = 0
  const IPStrings = inIPString.split('.');  
  IPSum = parseInt( IPStrings[0], 10 );
  for ( j = 1;j < IPStrings.length; j++) 
  {
    IPNumber = parseInt( IPStrings[j], 10 );
    IPSum = IPSum * 256 + IPNumber
  }
  return IPSum;
}

// console.log("Solution to 25-getNumForIP",getNumForIP( '0.0.0.1' )) // => 1
// console.log("Solution to 25-getNumForIP",getNumForIP( '0.0.2.0' )) // => 512
// console.log("Solution to 25-getNumForIP",getNumForIP( '192.156.99.15' )) // => 3231474447
// console.log("Solution to 25-getNumForIP",getNumForIP( '10.0.0.1' )) // => 167772161
/*-----------------------------------------------------------------------------
Challenge: 26-toCamelCase

Difficulty: Intermediate

Prompt:

- Write a function called toCamelCase that accepts a single string as an argument.
- The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.
- If the string argument does not contain a "_" or a "-", return the same string.

Hints:

- This is a great challenge for using regular expressions combined with the String.replace method.

Examples:

toCamelCase( 'sei' ) // => 'sei'
toCamelCase( 'sei-rocks' ) // => 'seiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
-----------------------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:
function toCamelCase ( string ) {
  const regExp = /[-_]\w/ig;
  return string.replace(regExp,(match) => {
    return match.charAt(1).toUpperCase()
    });
}


// console.log("Solution to 26-toCamelCase", toCamelCase( 'sei' )) // => 'sei'
// console.log("Solution to 26-toCamelCase", toCamelCase( 'sei-rocks' )) // => 'seiRocks'
// console.log("Solution to 26-toCamelCase", toCamelCase( 'banana_Turkey_potato' )) // => 'bananaTurkeyPotato'
// console.log("Solution to 26-toCamelCase", toCamelCase( 'Mama-mia' )) // => 'MamaMia'
// console.log("Solution to 26-toCamelCase", toCamelCase( 'A_b_c' )) // => 'ABC'



/*-----------------------------------------------------------------------------
Challenge: 27-countTheBits

Difficulty: Intermediate

Prompt:

- Write a function called countTheBits that accepts a single numeric argument that will be an integer.
- The function should return the number of bits set to 1 in the number's binary representation.

Hints:

- We typically work with "decimal" numbers daily. Decimal is "base 10", where there are 10 digits available - 0 thru 9. However, it's binary that computers understand - 1's and 0's. The 1's and 0's are called bits.
- As an example, the decimal value of 13 is represented in binary as 1101. There are 3 one bits and 1 zero bit in the decimal number of 13.
- Carefully read the documentation for the Number.prototype.toString method.

Examples:

countTheBits( 0 ) // => 0
countTheBits( 13 ) // => 3
countTheBits( 256 ) // => 1
countTheBits( 255 ) //=> 8
countTheBits( 65535 ) //=> 16
-----------------------------------------------------------------------------*/
// Your solution for 27-countTheBits here:
function countTheBits( integer ) {
  let base2String = integer.toString(2);
  let countOnes = [...base2String].filter(x => x === '1').length
  return countOnes;
}



// console.log("Solution to 27 CountTheBits",countTheBits( 0 )) // => 0
// console.log("Solution to 27 CountTheBits",countTheBits( 13 )) // => 3
// console.log("Solution to 27 CountTheBits",countTheBits( 256 )) // => 1
// console.log("Solution to 27 CountTheBits",countTheBits( 255 )) //=> 8
// console.log("Solution to 27 CountTheBits",countTheBits( 65535 )) //=> 16


/*-----------------------------------------------------------------------------
Challenge: 28-gridTrip

Difficulty: Intermediate

Prompt:

- This challenge uses an imaginary grid where the y coordinate increases when you move up and decreases when you move down. Similarly, the x coordinate increases when you move right and decreases when you move left.
- Write a function called gridTrip that accepts two arguments.
- The first argument is an array containing two integers. The value in the first index of the array represents the starting x position on the grid. The second value in the array represents the starting y position.
- The second argument is a string representing "moves" using the characters 'U', 'D', 'R' & 'L' to mean moving Up, Down, Right & Left, respectively. Each direction character is followed by digits representing how many units to move in that direction. For example, a string of 'D15R2U4' moves up 15 units, right 2 units, and finally, down 4 units from the starting coordinates.
- The direction characters will always be upper case.
- The gridTrip function should return a new array of two integers: the final x position and the final y position. Do not modify the array argument).

Hint:
- Using the String.match method to return an array of regular expression matches can be helpful if you want to break the single string of moves into an array of distinct moves by direction. Be sure to use the global flag, e.g. /cat/g, when defining the regexp.

Examples:

gridTrip( [0, 0], 'U2R1' ) // => [1, 2]
gridTrip( [10, 5], 'D5L15U2' ) //-> [-5, 2]
gridTrip( [100, -22], 'L2L15D50U1D9') //=> [83, -80]
-----------------------------------------------------------------------------*/
// Your solution for 28-gridTrip here:

function gridTrip ( gridArray, gridString ) {
  let grid = [gridArray[0], gridArray[1]];
  let regex = /[A-Z]/g; 
  let directions = gridString.match(regex)
  let unitsToMove = gridString.split(/[DULR]/);
for (i = 0; i < directions.length; i++) {
  nToMove = parseInt(unitsToMove[i + 1]);
  switch( directions[i] ) {
    case "L":
      grid[0] -= nToMove;
      break;
    case "R":
      grid[0] += nToMove;
      break;
    case "U":
      grid[1] += nToMove;
      break;
    case "D":
      grid[1] -= nToMove;
      break;
    default:
  }
}
return grid
}

// console.log("Solution to 27 CountTheBits",gridTrip( [0, 0], 'U2R1' )) // => [1, 2]
// console.log("Solution to 27 CountTheBits",gridTrip( [10, 5], 'D5L15U2' )) //-> [-5, 2]
// console.log("Solution to 27 CountTheBits",gridTrip( [100, -22], 'L2L15D50U1D9')) //=> [83, -80]

/*-----------------------------------------------------------------------------
Challenge: 29-addChecker

Difficulty: Intermediate

Prompt:

- Write a function called addChecker that accepts two arguments.
- The first argument is an array containing at least two integers. The integers in the array have been pre-sorted in ascending order.
- The second argument is an integer.
- The addChecker function should return true if there are two integers in the array of integers (first argument) that, when added together, equals the integer passed in as the second argument.
- If there are no two integers in the array with a sum equal to the second argument, addChecker should return false.

Hint:

- An efficient solution can leverage the fact that the integers in the array come sorted for you.

Examples:

addChecker( [1, 2], 3 ) // => true
addChecker( [-3, 2], 9 ) // => false
addChecker( [10, 15, 16, 22], 32 ) // => true
addChecker( [10, 15, 16, 22], 19 ) // => false
-----------------------------------------------------------------------------*/
// Your solution for 29-addChecker here:
function addChecker (checkArray, checkSum) {
  let inLen = checkArray.length;
  let jSum = 0;
  let i, j = 0;
  let foundSum = false;
  for ( i = 0; i < inLen - 1 && foundSum === false ; i++ ) {
    for ( j = i+1; j < inLen && jSum < checkSum && foundSum === false; j++ ) {
      jSum = checkArray[i] +  checkArray[j];
      if ( jSum === checkSum )
        foundSum = true;
    }
  } 
return foundSum
}


// console.log("Solution to 29 addChecker",addChecker( [1, 2], 3 )) // => true
// console.log("Solution to 29 addChecker",addChecker( [-3, 2], 9 )) // => false
// console.log("Solution to 29 addChecker",addChecker( [10, 15, 16, 22], 32 )) // => true
// console.log("Solution to 29 addChecker",addChecker( [10, 15, 16, 22], 19 )) // => false

/*-----------------------------------------------------------------------------
Challenge: 30-totalTaskTime

Difficulty: Difficult

Prompt:

- Write a function called totalTaskTime that accepts two arguments.
- The first argument is an array of integers referred to as a "queue". Each integer in the queue represents a "task" - specifically, the amount of time to complete that task.
- The second argument is an integer representing the number of CPU "threads" available to process all of the tasks in the queue.
- The totalTaskTime function should return an integer representing the total time it will take to complete all of the tasks in the queue.
- You may mutate the "queue" array (first argument) if you wish.

Hint:

- Solve it with paper and pencil first. Look for patterns and generalize. Pseudocode!

Examples:

totalTaskTime( [], 1 ) // => 0
totalTaskTime( [4, 2, 5], 1 ) // => 11
totalTaskTime( [5, 8], 2 ) // => 8
totalTaskTime( [4, 2, 10], 2 ) // => 12
totalTaskTime( [2, 2, 3, 3, 4, 4], 2 ) //=> 9
totalTaskTime( [5, 2, 6, 8, 7, 2], 3 ) // => 12
-----------------------------------------------------------------------------*/
// Your solution for 30- here:
function totalTaskTime (taskQueue, nThreads) {
  let time = 0, minSum, sumTaskLists;
  while (taskQueue.length > nThreads) {
    sumTaskLists = taskQueue.splice(0, nThreads);
    minSum = Math.min(...sumTaskLists);
    time += minSum;
    sumTaskLists = sumTaskLists.map(t => t - minSum).filter(t => t);
    taskQueue = sumTaskLists.concat(taskQueue);
  }
    return time + (taskQueue.length ? Math.max(...taskQueue) : 0)
}


// console.log("Solution to 30 totalTaskTime" ,totalTaskTime( [], 1 )) // => 0
// console.log("Solution to 30 totalTaskTime" ,totalTaskTime( [4, 2, 5], 1 )) // => 11
// console.log("Solution to 30 totalTaskTime" ,totalTaskTime( [5, 8], 2 )) // => 8
// console.log("Solution to 30 totalTaskTime" ,totalTaskTime( [4, 2, 10], 2 )) // => 12
// console.log("Solution to 30 totalTaskTime" ,totalTaskTime( [2, 2, 3, 3, 4, 4], 2 )) //=> 9
// console.log("Solution to 30 totalTaskTime" ,totalTaskTime( [5, 2, 6, 8, 7, 2], 3 )) // => 12