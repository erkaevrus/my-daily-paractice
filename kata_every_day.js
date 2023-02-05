
/*#1 Your task is to write a function maskify, which changes all but the last four characters into '#'
//"4556364607935616" --> "############5616"
//     "64607935616" -->      "#######5616"
//               "1" -->                "1"
//                "" -->                 ""*/
function maskify(line) {
  if (line.length <= 4) {
  return line
}
  let res = []
  let i = -1
  while (res.length <= 3) {
    res.push(line.at(i))
    i--
 }
  res.push('#'.repeat(line.length - 4))
  return res.reverse().join('')
}

// revision1 18.01.2023
function maskify1(num) {
  if (num.length <=4) {
    return num
  }
  return '#'.repeat(num.length - 4) + num.slice(-4)
}


/*#2 Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types. */
function findShort(s){
  return Math.min(...(s.split(' ').map((x) => x.length)))
}


/*#3 In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out. */
function filter_list(l) {
  return l.filter((x) => typeof(x) !== 'string')
}


/*#4 In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. */
function squareDigits(num){
  return +(String(num).split('').map(x => x**2).join(''))
}


/*#5 Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] */
function friend(friends){
  return friends.filter(x => x.length === 4 && /[a-zA-Z]/.test(x))
}


//#6 Make the first char capitalize
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1)
}


//#7 Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
  return x.split('').map(x => +x < 5 ? '0' : '1').join('')
}


//#8 Написать функцию generatePassword которая создает пароли вида: 4i%X5uY@б, %m44ELp%, Zfj@O82@. Значения должны идти в случайном порядке.
function generatePassword() {
  const NUMBERS = '0123456789'
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerChars = 'abcdefghijklmnopqrstuvxyz'
  const SYMBOLS = '!@#$%'
  const list = [NUMBERS, upperChars, lowerChars, SYMBOLS]
  const password = []

  for (i = 0; i <= 3; i++) {
    password.push(getRandom(list[i]))
    password.push(getRandom(list[i]))
  }
  const result = []
  while (password.length > 0) {
    result.push(password.splice(Math.round(Math.random() * (password.length - 1)),1))
  }
  return result.join('')
}

function getRandom(value) {
  randomNum = Math.round(Math.random()* (value.length - 1))
  return value[randomNum]
}


//#9 Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  let count = 0
  const line = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < line.length; j++) {
      if (str[i] === line[j]){
        count++
      }
    }
  }
  return count
}


//#10 You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
/*const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
}*/
// obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined
Object.prototype.hash = function(path) {
  let line = this
  const keys = path.split('.')
  for (let key of keys) {
    if (line[key]) {
      line = line[key]
    } else {
      return undefined
    }
  }
  return line
}


/*#11 For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.
The following are examples of how this function would be used and what the expected results would be:
flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']*/
function flatten(...args) {
  const result = []

  if (args.length === 0) {
    return []
  }

  for (let item of args) {
    if (Array.isArray(item)) {
      result.push(...flatten(...item))
    } else {
      result.push(item)
    }
  }
  return result
}


/*#12 Your task is to implement function toReadable that converts given number, to readable string.
toReadable(1); // Will return 'one'
toReadable(997); //will return 'nine hundred ninety seven'*/
function toReadable (number) {
  if (number === 0) {return 'zero'}
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  if (number < 20){
    result = units[number]
  } else if (number < 100) {
    result = `${tens[Math.trunc(number / 10)]} ${units[number % 10]}`
  } else {
    if (number % 100 < 20) {
      result = `${units[Math.trunc(number / 100 )]} hundred ${units[number % 100]}`
    } else {
      result = `${units[Math.trunc(number / 100 )]} hundred ${tens[Math.trunc(number % 100 / 10)]} ${units[number % 10]}`
    }
  }
  return result.trimEnd()
}


/*#13 Your task is to write a function, that decodes Morse code and returns a string. Write your solution in src/index.js
Input: String. Its length is multiple of 10.
Each letter from alphabet encoded with dots(.) and dashes(-). 10 stands for dot(.), 11 stands for dash(-).
Each encoded letter's length is 10.
If the length of the encoded letter is less then 10, it left padded with 0.
Space in string is **********. Output: String (decoded) Example: me -> m === -- === 0000001111, e === . === 0000000010 -> 00000011110000000010*/
const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  const arrDigitWord = expr.split('**********')
  const arrDigitAlpha = []
  let line = []
  let letter = ''
  let result = ''

  for (let item of arrDigitWord) {
      for (let i = 0; i < item.length; i += 10) {
      line.push(item.slice(i, i+10))
      }
        arrDigitAlpha.push(line)
        line = []
  }

  for (let item of arrDigitAlpha) {
    for (let str of item) {
        for (let i = 0; i < str.length; i +=2) {
            if (str.slice(i, i + 2) === '10') {
                letter += '.'
            }
            if (str.slice(i, i + 2) === '11') {
                letter += '-'
            }
        }
        result += MORSE_TABLE[letter]
        letter = ''
    }
    result += ' '
  }
  return result.trim()
}


/*#14 Your task is to implement the so-called 'towel sort' algorithm.
towelSort function should expect matrix of any shape for example:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
]
Following matrix should be 'sorted' to:
 [1, 2, 3, 6, 5, 4, 7, 8, 9 ]
Write your code in `src/index.js. All test cases are designed as “error-free”, so don't worry about handling any errors.*/
function towelSort (matrix) {
  if (!matrix) {
    return []
  }
  const result = []
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j])
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j])
      }
    }
  }
  return result
}


//#15 Реализация Метода map с помощью цикла for
function mapCycle(arr, cb) {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(cb(arr[i]))
  }
  return res
}


//#16 Реализация метода map с помощью Рекурсии
function mapRecursion(){
  const res = []
  let i = 0

  function inner(arr, cb) {
    if (i >= arr.length) {
      return res
  }
    res.push(cb(arr[i]))
    i++
    return inner(arr, cb)
  }
  return inner
}


/*#17 Math geeks and computer nerds love to anthropomorphize numbers and assign emotions and personalities to them. Thus there is defined the concept of a "happy" number. A happy number is defined as an integer in which the following sequence ends with the number 1.
- Start with the number itself.
- Calculate the sum of the square of each individual digit.
- If the sum is equal to 1, then the number is happy. If the sum is not equal to 1, then repeat steps 1 and 2. A number is considered unhappy once the same number occurs multiple times in a sequence because this means there is a loop and it will never reach 1.

For example, the number 7 is a "happy" number: 72 = 49 --> 42 + 92 = 97 --> 92 + 72 = 130 --> 12 + 32 + 02 = 10 --> 12 + 02 = 1
Once the sequence reaches the number 1, it will stay there forever since 12 = 1
On the other hand, the number 6 is not a happy number as the sequence that is generated is the following: 6, 36, 45, 41, 17, 50, 25, 29, 85, 89, 145, 42, 20, 4, 16, 37, 58, 89
Once the same number occurs twice in the sequence, the sequence is guaranteed to go on infinitely, never hitting the number 1, since it repeat this cycle.
Your task is to write a program which will print a list of all happy numbers between 1 and x (both inclusive), where:
2 <= x <= 10000*/
function happyNumbers(x){
  const result = []
  let store = []
  let line
  let sumSquare = 0

  for (let current = 1; current <= x; current++) {
    line = String(current).split('')
    while (true) {
      for (let j = 0; j < line.length; j++) {
        sumSquare += Math.pow(+(line[j]), 2)
        console.log(sumSquare)
      }
      if (sumSquare === 1) {
        result.push(current)
        store = []
        sumSquare = 0
        break
      }
      if (store.includes(sumSquare)) {
        store = []
        sumSquare = 0
        break
      } else {
        store.push(sumSquare)
        line = String(sumSquare).split('')
        sumSquare = 0
      }
    }
  }
  return result
}


//#18 Реализация метода filter с помощью Рекурсии
function filterRecursion(){
  const res = []
  let j = 0

  function inner(arr,cb) {
    if (j >= arr.length) {
      return res
    }
    if (cb(arr[j])) {
      res.push(arr[j])
    }
    j++
    return inner(arr,cb)
  }
  return inner
}


//#19 написать функцию которая печатает матрицу 10х10 с цифрами от 1 до 100!
function Matrix() {
  const result = []
  let line = []
  let count = 1
  for (let i = 1; i <= 10; i++) {
    line = []
    for (let j = 1; j <= 10; j++) {
      line.push(count)
      count++
    }
    result.push(line)
  }
  console.log(result)
}


/*#20 You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*/
function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))].sort((a,b) => a-b)
}


/*#21 For this kata you will have to forget how to add two numbers.
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
You may assume both integers are positive integers.
add(1222, 30277) -> 31499
add(1236, 30977) -> 31111013*/
function add(num1, num2) {
  let arr1 = [...String(num1)]
  let arr2 = [...String(num2)]
  let result = []

  if (arr1.length < arr2.length) {
    const count = arr2.length - arr1.length
    for (let i = 0; i < count; i++) {
      arr1.unshift(0)
    }
  }

  if (arr1.length > arr2.length) {
    const count = arr1.length - arr2.length
    for (let i = 0; i < count; i++) {
      arr2.unshift(0)
    }
  }

  for (let i = arr1.length - 1; i >= 0; i--) {
  result.unshift(Number(arr1[i]) + Number(arr2[i]))
  }

  return Number(result.join(''))
}


/*#22 You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.
For example: var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]*/
function colourAssociation(array){
  let obj = {}
  const result = []
  for (item of array) {
    obj[item[0]] = item[1]
    result.push(obj)
    obj = {}
  }
  return result
}


/*#23 Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
An example:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }*/
function combine(...args){
  const result = {}
  for (let arrElem of args) {
    for (let objItem in arrElem) {
      if (objItem in result) {
        result[objItem] += arrElem[objItem]
      } else {
        result[objItem] = arrElem[objItem]
      }
    }
  }
  return result
}


/*#24 Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
Square all numbers k (0 <= k <= n) between 0 and n.
Count the numbers of digits d used in the writing of all the k**2.
Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
Examples:
n = 10, d = 1
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.*/
function nbDig(n, d) {
  let count = 0
  const temp = Array.from(Array(n + 1).keys()).map(x => String(x**2))
  for (let item of temp) {
    for (let digit of item) {
      if (digit === String(d)) {
        count++
      }
    }
  }
  return count
}


/*18.01.2023 #25 Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.
Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.
find_missing([1, 2, 2, 3], [1, 2, 3]) => 2*/
function findMissing(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr1.splice(i, 1, ' ')
        arr2.splice(j, 1, ' ')
        break
      }
    }
  }
  return Number(arr1.join('').trim())
}


/*19.01.2023 #26 Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
Notes :
Array/list size is at least 3 .
Array/list numbers could be a mixture of positives , negatives and zeros .
Repetition of numbers in the array/list could occur , So (duplications are not included when summing).*/
function maxTriSum(numbers){
  let temp = []
  while (temp.length !== 3) {
    let maxNum = Math.max.apply(null, numbers)
    temp.push(maxNum)
    numbers = numbers.filter(item => item !== maxNum)
  }
  return temp.reduce((sum, current) => sum + current, 0)
}


/*20.01.2023 #27 Написать функцию которая печатает матрицу размером n, которая закручивается по спирали!
[
  [ 1,  2,  3,  4,  5 ],
  [ 16, 17, 18, 19, 6 ],
  [ 15, 24, 25, 20, 7 ],
  [ 14, 23, 22, 21, 8 ],
  [ 13, 12, 11, 10, 9 ]
]
*/
function spiralMatrix(n) {
  const result = Array.from({length: n}, () => Array(n).fill(''));

  let counter = 1
  let startCol = 0
  let endCol = n - 1
  let startRow = 0
  let endRow = n -1

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter
      counter++
    }
    startRow++

    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter
      counter++
    }
    endCol--

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter
      counter++
    }
    endRow--

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter
      counter++
    }
    startCol++
  }

  return result
}


/*21.01.2023 #28 The input will be an array of dictionaries.
Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).
The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.
Example
Input:
List = [
        {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
        {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
       ]
Output:
'Vatsan took his dog for a spin' */
function sentence(List) {
  const temp = []
  let res = ''
  for (let obj of List) {
    for (let key in obj)
      temp.push(Number(key))
  }
  temp.sort((a,b) => a - b)

  for (let item of temp) {
    for (let obj of List) {
      if (obj[String(item)] === undefined) {
        continue
      }
      res += obj[String(item)]
      res += ' '
    }
  }
  return res.trim()
}


/*22.01.2023 #29 написать функцию которая печатает матрицу 10х10 с цифрами от 1 до 100  рандомном порядке. Цифры не повторяются!*/
function randomMatrix() {
  const result = []
  let line = []
  const store = []
  let randomNum
  while (store.length < 100) {
    randomNum = Math.round(Math.random()*100)
    if (!(store.includes(randomNum)) && randomNum !== 0) {
      store.push(randomNum)
    }
  }
  for (let i = 1; i <= 10; i++) {
    line = []
    for (let j = 1; j <= 10; j++) {
      line.push(store.pop())
    }
    result.push(line)
  }
  return result
  }


/*23.01.2023 #30 Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of evaluating a function on each element.
The method should return an object, in which for each different value returned by the function there is a property whose value is the array of elements that return the same value.
If no function is passed, the element itself should be taken.
Example:
const arr = [1, 2, 3, 2, 4, 1, 5, 1, 6];
arr.groupBy();
{
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
}
const arr = [1, 2, 3, 2, 4, 1, 5, 1, 6]
arr.groupBy(function(val) { return val % 3; })
{
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
*/
Array.prototype.groupBy = function(cb) {
  const obj = {};
  const arr = this;
  for (let i = 0; i < this.length; i++) {
    const key = cb ? cb(arr[i]) : arr[i]
    if (key in obj) {
      obj[key].push(arr[i])
    } else {
      obj[key] = [arr[i]]
    }
  }
return obj
}


/*24.01.2023 #31 vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
All non-vowels including non alpha characters (spaces,commas etc.) should be included.
Examples:
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"*/
function vowelOne(s){
  const vowel = ['a', 'e', 'i', 'o', 'u']
  return s.split('').map(x => vowel.includes(x.toLowerCase()) ? 1 : 0).join('')
}


/*27.01.2023 #32 You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.
eg:
spread(someFunction, [1, true, "Foo", "bar"] )
is the same as...
someFunction(1, true, "Foo", "bar")*/
function spread(func, args) {
  return func(...args);
}


/*28.01.2023 #33 A stream of data is received and needs to be reversed.
Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:
10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.
The data is given in an array as such:
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.*/
function dataReverse(data) {
  let temp = []
  let res = []
  for (let i = data.length - 1; i >= -1; i--) {
    if (temp.length === 8) {
      temp.reverse()
      res.push(...temp)
      temp = []
    }
    temp.push(data[i])
  }
return res
}


/*28.01.2023 #34 I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.
You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:
{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}
Return please :
'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.
'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.
'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.
If two or three sons have the same highest marks, you need to choose the younger one. Use the age table which is constant and preloaded:
const ageTable = {
                  'firstSonAge': 14,
                  'secondSonAge': 9,
                  'thirdSonAge': 8
                }*/
function whoseBicycle(diary1, diary2, diary3) {
  sum1 = Object.values(diary1).reduce((acc, current) => acc + current)
  sum2 = Object.values(diary2).reduce((acc, current) => acc + current)
  sum3 = Object.values(diary3).reduce((acc, current) => acc + current)
  let maxScore = Math.max(sum1, sum2, sum3)
  return `I need to buy a bicycle for my ${maxScore === sum3 ? 'third' : maxScore === sum2 ? 'second' : 'first'} son.`
}


/*28.01.2023 #35 Who is the killer?
Some people have been killed!
You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.
Task.
Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:
{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}
and also a list of the names of the dead people:
['Lucas', 'Bill']
return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'*/
function killer(suspectInfo, dead) {
  let count = 0
  let killer = ''

  for (let suspect in suspectInfo) {
    for(let deceased of dead) {
      if (suspectInfo[suspect].includes(deceased)) {
        count++
      }
      if (count === dead.length) {
        killer = suspect
        return killer
      }
    }
  }
}


/*29.01.2023 #36 Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74*/
function minSum(arr) {
  let sum = 0
  while (arr.length !== 0) {
    sum  += (Math.min(...arr) * Math.max(...arr))
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
    arr.splice(arr.indexOf(Math.max(...arr)), 1)
}
  return sum
}


/*29.01.2023 #37 Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:
a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.
You may assume the input is always valid.
Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.*/
function isPowerOfTwo(n){
  while (true) {
    if (n === 0) return false;
    if (n === 1) return true;
    if (n % 2 !== 0) return false;
    n /= 2;
  }
}


/*29.01.2023 #38
Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
Note:
0 is considered to be an even index.
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'
S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas'*/
function sortMyString(S) {
  let even = ''
  let odd = ''
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      even += S[i]
    } else {
      odd += S[i]
    }
  }
  return even + ' ' + odd
}



/*29.01.2023 #39 Nickname Generator
Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.
If the 3rd letter is a consonant, return the first 3 letters.
nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
If the 3rd letter is a vowel, return the first 4 letters.
nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
If the string is less than 4 characters, return "Error: Name too short".
Notes:
Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified*/
function nicknameGenerator(name){
  if (name.length < 4) {
    return "Error: Name too short";
  }
  const vowels = "aeiou";
  if (vowels.includes(name[2])) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}


/*30.01.2023 #40 Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  //returns 3*/
function strCount(obj){
  let count = 0
  for (let item in obj){
    if(typeof(obj[item]) === 'object'){
     count += strCount(obj[item])
    }
    if (typeof(obj[item]) === 'string'){
      count++
    }
  }
    return count
}


/*31.01.2023 #41 Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case*/
const countBits = function (n) {
  return n.toString(2)
          .split('')
          .filter( x => x === '1')
          .length
}


/*31.01.2023 #42 Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1) -> false
is_prime(2) -> true
is_prime(-1) -> false */
function isPrime(num) {
  if (num <= 1){return false}
  for (i=2; i * i <= num; i++) {
    if(num % i==0){return false}
  }
  return true
}


/*01.02.2023 #43 You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.*/
function likes(names) {
  switch(names.length) {
      case 0: return 'no one likes this';
      case 1: return `${names[0]} likes this`
      case 2: return `${names[0]} and ${names[1]} like this`
      case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
      default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
 }
}


/*01.02.2023 #44 After yet another dispute on their game the Bingo Association decides to change course and automate the game.
Can you help the association by writing a method to create a random Bingo card?
Bingo Cards
A Bingo card contains 24 unique and random numbers according to this scheme:
5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75
Task
Write the function get_card()/getCard(). The card must be returned as an array of Bingo style numbers:
[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.
a bingo card*/
function getCard() {
  const bingoCard = []
  let num

  for (i = 0; i <= 4; i++) {
    while(bingoCard.length <= 4) {
      num = `B${getRandom(1, 15)}`
      if (bingoCard.includes(num)) {
        continue
      } else {
        bingoCard.push(num)
      }
    }
  }

  for (i = 0; i <= 4; i++) {
    while(bingoCard.length <= 9) {
      num = `I${getRandom(16, 30)}`
      if (bingoCard.includes(num)) {
        continue
      } else {
        bingoCard.push(num)
      }
    }
  }

  for (i = 0; i <= 4; i++) {
    while(bingoCard.length <= 14) {
      num = `N${getRandom(31, 45)}`
      if (bingoCard.includes(num)) {
        continue
      } else {
        bingoCard.push(num)
      }
    }
  }

  for (i = 0; i <= 4; i++) {
    while(bingoCard.length <= 19) {
      num = `G${getRandom(46, 60)}`
      if (bingoCard.includes(num)) {
        continue
      } else {
        bingoCard.push(num)
      }
    }
  }

  for (i = 0; i <= 4; i++) {
    while(bingoCard.length <= 24) {
      num = `O${getRandom(61, 75)}`
      if (bingoCard.includes(num)) {
        continue
      } else {
        bingoCard.push(num)
      }
    }
  }

  bingoCard.splice(12, 1)
  return bingoCard
}


function getRandom(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}


/*02.02.2023 #45 Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.
And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.
Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!
What a bunch of cheapskates!
Can you do it?
Kata
Given the angle (in degrees) of the hour-hand, return the time in 12 hour HH:MM format. Round down to the nearest minute.
Examples
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees
Notes
0 <= angle <= 360
Do not make any AM or PM assumptions for the HH:MM result. They are indistinguishable for this Kata.
3 o'clock is 03:00, not 15:00
7 minutes past midnight is 12:07
7 minutes past noon is also 12:07*/
var whatTimeIsIt = function(angle) {
  let hours
  let mins
  let tempHours
  let tempMins

  if (angle / 30 < 1) {
    hours = '12'
  } else {
    tempHours = String(Math.floor(angle / 30))
    hours = tempHours.length === 1 ? '0' + tempHours : tempHours
  }
    tempMins = String(Math.floor(angle % 30 / 0.5))
    mins = tempMins.length === 1 ? '0' + tempMins : tempMins
  return `${hours}:${mins}`
}


/*03.02.2023 #46 /*Есть массив [1,1,1,2,2,2,5,5,2,7]
Вернуть уникальный отсортированный массив по частотности цифр
2 встречается больше всех, потом 1 и так далее
Правильный ответ должен выглядеть так [2,1,5,7]*/
function sortArray(arr) {
  const obj = {}

  for (elem of arr) {
    if (obj[elem] !== undefined) {
      obj[elem].push(elem)
    } else {
      obj[elem] = [elem]
    }
  }
  return [...new Set(arr.sort((a, b) => obj[b].length - obj[a].length))]
}


/*05.02.2023 #47 Time to win the lottery!
Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
Example ticket:
[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
All inputs will be in the correct format. Strings on tickets are not always the same length.*/
function bingo(ticket, win){
  let count = 0
  for (minLottery of ticket) {
    if (minLottery[0].split('').filter(x => x.charCodeAt() === minLottery[1]).length !== 0) {
      count++
    }
  }
  return count >= win ? 'Winner!' : 'Loser!'
}
