/*#1
Your task is to write a function maskify, which changes all but the last four characters into '#'
"4556364607935616" --> "############5616"
    "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
*/
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

// ---revision1 18.01.2023
function maskify1(num) {
  if (num.length <=4) {
    return num
  }
  return '#'.repeat(num.length - 4) + num.slice(-4)
}


/*#2
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
  return Math.min(...(s.split(' ').map((x) => x.length)))
}


/*#3 |CW 7kyu|
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 */
function filter_list(l) {
  return l.filter((x) => typeof(x) !== 'string')
}


/*#4 |CW 7kyu|
In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
*/
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

// ---revision1 29.05.2023
function getCard() {
  const bingo = []
  const letters = {
    'B': [1, 15],
    'I': [16, 30],
    'N': [31, 45],
    'G': [46, 60],
    'O': [61, 75]
  }
  
  for (char in letters) {
    let temp = []
    while(temp.length < 5) {
      let value = getRandom(letters[char][0], letters[char][1])
      if (!temp.includes(char + value)) {
        temp.push(char + value)
      }
    }
    if (char === "N") {
      temp.pop()
    }
    bingo.push(...temp)
  }
  return bingo
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


/*05.02.2023 #48 Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"*/
function toWeirdCase(string){
  const temp = string.split(' ')
  let res = ''

  for (word of temp) {
    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        res += word[i].toUpperCase()
      } else {
        res += word[i]
      }
    }
    res += ' '
  }
  return res.trim()
}


/*06.02.2023 #49 The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
The following are examples of expected output values:
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */
function rgb(r, g, b){
  let temp = [r, g, b]

  for (let i = 0; i < temp.length; i++) {
    temp[i] = temp[i] < 0 ? 0 : temp[i]
    temp[i] = temp[i] > 255 ? 255 : temp[i]
  }
  return temp.map(x => x.toString(16)).map(x => x.length !== 2 ? `0${x}` : x).join('').toUpperCase()
}


/*07.02.2023 #50 Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.*/
function disemvowel(str) {
  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  return str.split('').filter(x => vowel.includes(x) !== true).join('')
}


/*
08.02.2023 #51 One of the common ways of representing color is the RGB color model, in which the Red, Green, and Blue primary colors of light are added together in various ways to reproduce a broad array of colors.
One of the ways to determine brightness of a color is to find the value V of the alternative HSV (Hue, Saturation, Value) color model. Value is defined as the largest component of a color:
V = max(R,G,B)
You are given a list of colors in 6-digit hexidecimal notation #RRGGBB. Return the brightest of these colors!
For example,
brightest(["#001000", "#000000"]) == "#001000"
brightest(["#ABCDEF", "#123456"]) == "#ABCDEF"
If there are multiple brightest colors, return the first one:
brightest(["#00FF00", "#FFFF00", "#01130F"]) == "#00FF00"
Note that both input and output should use upper case for characters A, B, C, D, E, F.
*/
/*
1. Понимание:
-> Нужно вернуть исходное значение самого яркого цвета. Самый яркий цвет определяем по формуле V = max(R,G,B)
2. Планирование + Декомпозиция:
-> Надо разделить массив на части и убрать #
-> Разобрать значение цвета по 2 цифры
-> Создать объект, где ключи это max(R,G,B), а значение это цвета "00FF00"
-> Из Math.max (ключи объекта) вернуть значение оригинального цвета
*/
function brightest(colors){
  const temp = colors.map(x => x.replace('#', ''))
  const obj ={}

  for (elem of temp) {
      let max = Math.max(Number(`0x${elem.slice(0,2)}`), Number(`0x${elem.slice(2,4)}`), Number(`0x${elem.slice(4)}`))
      if (obj[max] === undefined) {
        obj[max] = elem
      }
  }
  return `#${obj[Math.max(...Object.keys(obj))]}`
}


/* 09.02.2023 #52
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/
/*
1. Понимание -> Написать функцию предикат (вернуть false/true). true - строке-аргументе нет повторяющихся букв. false - есть повторы. Регистр букв игнорируем.
2. Планирование + Декомпозиция
-> создать пустой массив
-> в цикле перебрать строку-аргумент, добавляя туда все буквы по очереди
-> добавить проверку: если в массиве уже есть буква из строки вернуть false
-> после отработки цикла вернуть true
*/
function isIsogram(str){
    const temp = []
    for (letter of str) {
        if(temp.includes(letter.toLowerCase())) {
            return false
        }
        temp.push(letter.toLowerCase())
    }
    return true
}


/* 10.02.2023 #53 |CW 7kyu|
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples
explode("312")
should return :
"333122"
explode("102269")
should return :
"12222666666999999999"
*/
function explode(s) {
  return s.split('').map(x => x.repeat(Number(x))).join('')
}


/*10.02.2023 #54 |CW 6kyu|
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".
Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.
However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.
Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
*/
function getParticipants(handshakes){
  if (handshakes === 0) return 0
  let descriminant = 1 + 8 * handshakes
  return Math.ceil((1 + Math.sqrt(descriminant))/2)
}


/* 11.02.2023 #55 |CW 6kyu|
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
/*
1. Понимание -> Вернуть строку. Если символ в строке-аргументе встречатеся более 1 раза, заменить его на ")". Если только 1 раз, заменить на "("
2. Планирование + Декомпозиция
-> из строки-аргумента сделать массив
-> пройтись по элементам массива в цикле
-> если таких элементов больше нет, в результирующую строку добавить "("
-> если > 1, то вернуть в результирующую строку ")"
*/
function duplicateEncode(word){
  return word.split('').map(x => word.split('').filter(y => y.toLowerCase() === x.toLowerCase()).length > 1 ? ')' : '(').join('')
}


/*
12.02.2023 #56
Реализуйте функцию toRoman, которая принимает число и конвертирует его в римские цифры.
*/
function toRoman(number) {
  const RomansNum = [
      ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
      ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
      ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
      ['', 'M', 'MM', 'MMM']
  ]

  return RomansNum[3][Math.floor(number / 1000)] +
       RomansNum[2][Math.floor(number % 1000 / 100)] +
       RomansNum[1][Math.floor(number % 100 / 10)] +
       RomansNum[0][Math.floor(number % 10)]
}


/* 13.02.2023 #57 |CW 6kyu|
I love Fibonacci numbers in general, but I must admit I love some more than others.
I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.
For example:
   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.
For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.
*/
/*
1. Понимание -> Написать функцию, которая возвращает n-ый член последовательности Фиббоначи. n > 1
2. Планирование + Декомпозиция
-> Присвоить переменным fib1 fib2 значения двух первых элементов ряда
-> В цикле выполнять движение по ряду фибоначи fibSum = fib1 + fib2, fib1 = fib2, fib2 = fibSum
-> цикл продолжить до n - 2, поскольку первые 2 члена последовательности мы определили
-> написать условие (если n 1 или 2, то вернуть соответствующий член последовательности)
*/
function nthFibo(n) {
  if(n === 1) return 0
  if(n === 2) return 1
  let fib1 = 0
  let fib2 = 1
  let fibSum
  let i = 0
  while (i < n - 2) {
      fibSum = fib1 + fib2
      fib1 = fib2
      fib2 = fibSum
      i++
  }
  return fibSum
}


/* 14.02.2023 #58 |CW 7kyu|
Haskell has some useful functions for dealing with lists:
$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:
| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |
head [x] = x
tail [x] = []
init [x] = []
last [x] = x
Here's how I expect the functions to be called in your language:
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
Most tests consist of 100 randomly generated arrays, each with four tests, one for each operation. There are 400 tests overall. No empty arrays will be given. Haskell has QuickCheck tests
*/
function head(arr) {
    return arr[0]
  }

  function tail(arr) {
    return arr.slice(1)
  }

  function init(arr) {
    return arr.slice(0, -1)
  }

  function last(arr) {
    return arr.at(-1)
  }


/* 14.02.2023 #59 |CW 6kyu|
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/
/*
1. Понимание -> Написать функцию, которая возвращает количество элементов в массиве, включая вложенные массивы.
2. Планирование + Декомпозиция
-> создаем переменную счетчик
-> В цикле перебираем массив-аргумент
-> Если наш элемент массива является объектом, увеличваем счетчик на 1 и  снова заходим в массив и перебраем его
-> Если наш элемент не объект, то просто увеличиваем счетчик
*/
function deepCount(a){
    let count = 0
    for (let item of a) {
        if(typeof item === "object") {
            count++
            count += deepCount(item)
        } else {
            count++
        }
    }
    return count
}


/* 15.02.2023 #60 |6kyu|
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!
You have to write a method, that return the length of the missing array.
Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
If the array of arrays is null/nil or empty, the method should return 0.
When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.
Have fun coding it and please don't forget to vote and rank this kata! :-)
I have created other katas. Have a look if you like coding and challenges.
*/
/*
1. Понимание -> Дан массив массивов. Если отсортировать этот массив по длинам массивов, то мы увидим, что длины идут по возрастанию, кроме одной пропущенной длины. Нужно найти какой длины не хватает и вернуть ее значение.
Если массив массивов пуст вернуть 0.
Если подмассив пустой или нулевой, вернуть 0.
Если массив содержит значение null вернуть 0.
2. Планирование + Декомпозиция
-> Преобразовать массив массивов в массив длин массивов и отсортировать их
-> Пройтись по массиву в цикле и найти пропущенный элемент
*/
function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null)  return 0
    if (arrayOfArrays.includes(null)) return 0
    if (arrayOfArrays.length === 0) return 0

    let temp = arrayOfArrays.map(x => x.length).sort((a, b) => a - b)
    if (temp.includes(0)) return 0
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== temp[i+1] - 1) {
            return temp[i] + 1
        }
    }
}


/* 16.02.2023 #61 |6kyu|
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)
input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/
/*
1. Понимание -> Написать функцию, которая возвращает количество возможных пар перчаток одинакового цвета.
2. Планирование + Декомпозиция
-> Создать пустой объект
-> В цикле по массиву заполнить объект, ключ = цвет, значение = количество перчаток в массиве
-> Пройтись по объекту и вернуть количество получившихся пар
*/
function numberOfPairs(gloves) {
    const obj = {}
    for (elem of gloves) {
        if (obj[elem] === undefined ) {
            obj[elem] = 1
            } else {
            obj[elem]++
        }
    }
    return Object.values(obj).map(x => Math.floor(x/2)).reduce((acc, curr) => acc + curr)
}


/* 17.02.2023 #62 |7kyu|
Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
min([1,2,3,4,5], 'value') // => 1
min([1,2,3,4,5], 'index') // => 0
*/
function min(arr, toReturn) {
    return toReturn === 'value' ?
           Math.min(...arr) :
           arr.indexOf(Math.min(...arr))
  }


/* 18.02.2023 #63 |6kyu|
In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.
E.g Given the array [7, 6, 15, 8]
7 has 3 on bits (000...0111)
6 has 2 on bits (000...0011)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15].
In cases where two numbers have the same number of bits, compare their real values instead.
E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.
Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.
Note: your solution has to sort the array in place.
Example:
[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
*/
/*
1. Понимание -> Написать функцию, которая возвращает отсортированный массив по количеству битов в 32х битном представлении числа
Если количество битов одинаковое, отсортировать по реальному значению. Массив отсортировать на месте.
2. Планирование + Декомпозиция
-> Сначала отсортировать массив по значению в десятичной системе с помощью sort()
-> Найти количество битов в каждом числе
-> Отсортировать значение по количеству битов в 32х битном представлении:
*/
function sortByBit(arr) {
    arr.sort((a, b) => a - b)
    arr.sort((a, b) => a.toString(2).split('').filter(x => x === '1').length - b.toString(2).split('').filter(x => x === '1').length)
  }


/*19.02.2023 #64 |4kyu|
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
It is much easier to understand with an example:
* For seconds = 62, your function should return
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.
Note that spaces are important.
Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/
function formatDuration (seconds) {
    if (seconds) {
         let years = Math.floor(seconds/60/60/24/365)
        let days = Math.floor(seconds/60/60/24 - years*365)
        let hours = Math.floor(seconds/60/60 - years*365*24 - days*24)
        let minutes = Math.floor(seconds/60 - years*365*24*60 - days*24*60 - hours*60)
        let sec = seconds - years*365*24*60*60 - days*24*60*60 - hours*60*60 - minutes*60

        let resYear = `${years >= 1 ? years === 1 ? years + ' year' : years + ' years' : ''}`
        let resDays = `${days >= 1 ? days === 1 ? days + ' day' : days + ' days' : ''}`
        let resHours = `${hours >= 1 ? hours === 1 ? hours + ' hour' : hours + ' hours' : ''}`
        let resMinutes = `${minutes >= 1 ? minutes === 1 ? minutes + ' minute' : minutes + ' minutes' : ''}`
        let resSeconds = `${sec >= 1 ? sec === 1 ? sec + ' second' : sec + ' seconds' : ''}`


        let result = [resYear, resDays, resHours, resMinutes, resSeconds].filter(x => x !== '')

        if (result.length > 1) {
            result.splice(-1, 0, 'and')
        }
        let temp = result.join(', ').split('')
        console.log(temp)
        if (temp.includes(',')) {
            temp.splice(temp.lastIndexOf(','), 1, '')
            temp.splice(temp.lastIndexOf(','), 1, '')
        }

        return temp.join('')
    }
   return 'now'
  }


/*20.02.2023 #65 |CW 6kyu|
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.
Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.
Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/
/*
1. Понимание -> Вернуть Массив с 4мя массивами, в которые отсортированы предменты в соотсветствии с их материалом. Каждый массив отвечает за свой материал.
2. Планирование + Декомпозиция
-> Создать результирующий массив с массивами
-> Перебрать в цикле объект и по условиям раcпределить типы по результирующему массиву
*/
function recycle(array) {
    const bin = [[], [], [], []]

    for (let obj of array) {
        if (obj['material'] === 'paper' || obj['secondMaterial'] === 'paper') {
            bin[0].push(obj['type'])
        }
        if (obj['material'] === 'glass' || obj['secondMaterial'] === 'glass') {
            bin[1].push(obj['type'])
        }
        if (obj['material'] === 'organic' || obj['secondMaterial'] === 'organic') {
            bin[2].push(obj['type'])
        }
        if (obj['material'] === 'plastic' || obj['secondMaterial'] === 'plastic') {
            bin[3].push(obj['type'])
        }
    }
    return bin
}


/*21.02.2023 #66 |CW 7kyu|
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.
Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/
function unluckyDays(year) {
    let count = 0
    for (let month = 0; month < 12; month ++) {
        let date = new Date(year, month, 13)
        if (date.getDay() === 5) {
        count++
        }
    }
    return count
}


/*23.02.2023 #67 |CW 6kyu|
Run-length encoding (RLE) is a very simple form of data compression in which runs of data (that is, sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run. Wikipedia
Task
Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.
Examples
As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:
runLengthEncoding("hello world!")
=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
It's very effective if the same data value occurs in many consecutive data elements:
runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
=> [[34,'a'], [3,'b']]
*/
/*
1. Понимание -> Выполнить сжатие строки. Вернуть массив массивов, в  котором каждый подмассив кодируется символом и количеством повторений(только для символов следующих подряд)
2. Планирование + Декомпозиция
-> Создать результирующий массив
-> Перебрать в цикле строку и по условиям проверки либо добавлять единичный массив вида [1, char], либо увеличивать счетчик на один, если следующий символ равняется предыдущему
*/
function runLengthEncoding(str){
    const result = []
    for (let i = 0; i < str.length; i++) {
        if (result.length !== 0 && result[result.length - 1][1] === str[i]) {
            result[result.length - 1][0]++
        } else {
            result.push([1, str[i]])
        }
    }
    return result
}


/*24.02.2023 #68 |CW 6kyu|
Implement the method find which takes in an two parameters object and path. The path will be a period-delimited string of properties that we will use to traverse through our object to find our target value.
Check out this Codecast to get started! https://codecast.qualified.io/interaction/594197b92f524d001c1ab790
Edge Cases And Further Consideration
Be sure to handle passing array indices. For example, if we have an object: { people: ['John', 'Dave', 'Lisa'] } and the path is 'people.1', the target value is 'Dave' which is the string at position 1 inside of the people array.
Also this method should handle invalid paths. If we have an object { user: { name: 'Dan' } } and the path is 'user.wallet.money', we should return undefined. Valid paths are exclusive to properties on the object which are not inherited, in other words it is specific to this object and does not need to look up the prototype chain.
*/
/*
1. Понимание -> написать функцию, которая принимает объект и путь(строка, с разделителем '.') и возвращает значение по этому пути либо undefined
2. Планирование + Декомпозиция
-> сделать из строки path массив по точкам
-> в цикле пeребирать массив с путями
-> проверять есть ли свойство у объекта и не наследуется ли свойство из прототипа
-> если свойство существует переопределить объект и перейти к следующему свойству
-> иначе вернуть undefined
*/
function find(object, path) {
    let arrPath = path.split('.')
    for (let elem of arrPath) {
        if (object.hasOwnProperty(elem)) {
            object = object[elem]
        } else {
            return undefined
        }
    }
    return object
}


/*25.02.2023 #69 |CW 7kyu|
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
Note: the scores will always be unique (so no duplicate values)
Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/
function myLanguages(results) {
    return  Object.keys(results).filter(x => results[x] >= 60).sort((a, b) => results[b] - results[a])
}


/*26.02.2023 #70 |7kyu|
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/
/*
1. Понимание -> написать функцию, которая проверяет купон на действительность и возвращает true/false. Коды купонов должны совпадать. Купон должен быть с неистекшей датой.
2. Планирование + Декомпозиция
-> сравнить коды купонов
-> Убедиться, что сегодняшняя дата <= чем, дата истечения купона
*/
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) return false

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const currentDateArr = currentDate.split(' ')
    const expirationDateArr = expirationDate.split(' ')

    const currentYear = Number(currentDateArr[2])
    const expirationYear = Number(expirationDateArr[2])
    const currentMonth = currentDateArr[0]
    const expirationMonth = expirationDateArr[0]
    const currentDay = Number(currentDateArr[1].slice(0, -1))
    const expirationDay = Number(expirationDateArr[1].slice(0, -1))

    if (currentYear > expirationYear) {
        return false
    } else if (currentYear < expirationYear) {
        return true
    }

    if (months.indexOf(currentMonth) > months.indexOf(expirationMonth)) {
        return false
    } else if (months.indexOf(currentMonth) < months.indexOf(expirationMonth)) {
        return true
    }

    if (currentDay > expirationDay) {
        return false
    } else  {
        return true
    }
}


/*27.02.2023 #71 |6kyu|
There's no such thing as private properties on a coffeescript object! But, maybe there are?
Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
*/
/*
1. Понимание -> написать функцию, которая принимает любое значение и возвращает объект с двумя методами.
2. Планирование + Декомпозиция
-> создать объект
-> создать методы внутри объекта
-> вернуть объект
*/
function createSecretHolder(secret) {
    let storageSecret = secret
    return {
        setSecret: function(secret) {
            storageSecret = secret
        },
        getSecret: function() {
            return storageSecret
        }
    }
}


/*28.02.2023 #72 |6kyu|
We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:
var callbacks = createFunctions(5); // create an array, containing 5 functions
callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available
*/
/*
1. Понимание -> написать функцию, принимает число n. Возвращает массив функций длинной n. Каждая функция возвращает свой индекс в массиве.
2. Планирование + Декомпозиция
-> создать массив колбэков
-> в цикле до n, добавлять функцию. Каждая функция в своей области видимости запоминает свой индекс
-> вернуть массив колбэков
*/
function createFunctions(n) {
    var callbacks = []

    for (let i=0; i<n; i++) {
      callbacks.push(function() {
        return i
      })
    }
    return callbacks
  }


/*01.03.2023 #73 |6kyu|
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string ) */
function alphabetPosition(text) {
    const alphabet = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    return text.split('').filter(x => alphabet.includes(x.toLowerCase())).map(y => alphabet.indexOf(y.toLowerCase())).join(' ')
}


/*02.03.2023 #74 |6kyu|
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/
function findUniq(arr) {
    const temp1 = []
    const temp2 = []
    temp1.push(arr.shift())

    for (let item of arr) {
      if (item === temp1[temp1.length -1]) {
         temp1.push(item)
      } else {
        temp2.push(item)
      }
    }
return temp1.length < temp2.length ? temp1.join('') : temp2.join('')
}

// ---revision1 25.03.2023
function findUniq(arr) {
    const temp = Array.from(new Set(arr))
    let count = 0
    for (let elem of arr) {
        if(temp[0] === elem) {
        count++
        }
    }
    return count > 1 ? temp[1] : temp[0]
}


/*03.03.2023 #75 |7kyu|
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)


/*04.03.2023 #76 |6kyu|
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
/*
1. Понимание -> написать функцию, которая принимает строку. В слове строки есть цифра. Вернуть отсортированную строку по цифре в каждом слове.
2. Планирование + Декомпозиция
-> сделать из строки массив
-> создать объект где ключ это слово, а значение это номер в слове
-> собрать отсортированную строку
*/
function order(words){
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const arr = words.split(' ')
    const obj = {}

    for (let word of arr) {
        for (let i = 0; i < word.length; i++) {
            if (digits.includes(word[i])) {
                obj[word] = word[i]
                continue
            }
        }
    }
    return arr.sort((a, b) => Number(obj[a]) - Number(obj[b])).join(' ')
}

/*05.03.2023 #77 |6kyu|
#Description Your task is to implement our beloved Array.prototype.map function from a scratch, and yes, it has to be inside the Array's prototype. Don't know what a 'prototype' is? This could help you a little as well as this kata.

Moving on, the defaults for Array.prototype.map, Array.prototype.reduce, Array.prototype.reduceRight and Array.prototype.forEach will be banned, in other words you'll have to create map from scratch.

var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var multiply_by_two = function(x) { return x * 2 };
var one_to_nine_doubled = one_to_nine.map(multiply_by_two);
// Expected
[2, 4, 6, 8, 10, 12, 16, 18]
#What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

The Basics

Array.prototype.map is a function that takes a callback function and an object as 'context'
The callback function should receive the current item, it's index and array object itself
The context will be this inside the callback function
NOTE

You should take into account that an array created by [] and a new Array(length) are entirely different on the content they posses and you should take into account that at the moment of building your solution.
A better illustration for that:
[1, 2, 3]; // { '0': 1, '1': 2, '2': 3, length: 3 }
new Array(3); // { length: 3 }

[1, 2, 3].concat([4]); // { '0': 1, '1': 2, '2': 3, '3': 4, length: 4 }
new Array(3).concat([4]); // { '3': 4, length: 4 }
That said, you should only apply the callback function to the items that the array posses
That said, Have a happy Coding.

#Oh, I almost forgot Your implementation for this map function should not modify the current array

var base_array = [1, 2, 3, 4, 5];
var mapped_array = base_array.map(function(item) { return item + 2 });

console.log(base_array); // [1, 2, 3, 4, 5]
console.log(mapped_array); // [3, 4, 5, 6, 7]
*/
Array.prototype.map = function(cb, context) {
    const newArr = new Array(this.length)
    for (let i = 0; i < this.length; i++) {
      if (i in this) newArr[i] = cb.call(context, this[i], i, this)
    }
    return newArr
  }



/*06.03.2023 #78 |6kyu|
Given a Date (in JS and Ruby) or hours and minutes (in C and Python), return the angle between the two hands of a 12-hour analog clock in radians.
Notes:
The minute hand always points to the exact minute (there is no seconds hand).
The hour hand does not "snap" to the tick marks: e.g. at 6:30 the angle is not 0 because the hour hand is already half way between 6 and 7.
Return the smaller of the angles ( <= π ).
Return π if the hands are opposite.
Examples
at noon the angle is: 0
at 3:00 the angle is: π/2 (90 degrees)
at 6:00 the angle is: π (180 degrees)
at 9:00 the angle is: π/2 (90 degrees)
*/
function handAngle (date) {
    const hours = date.getHours() % 12
    const minutes = date.getMinutes()
    const result = Math.abs((hours*30 + minutes*0.5) - (minutes*6))
    return Math.min(((360 - result)*Math.PI)/180, (result*Math.PI)/180)
}


/*07.03.2023 #79 |7kyu|
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
Examples: (Input --> Output)
[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
 */
const number = function(array){
    const result = []
    for (let i = 0; i < array.length; i++) {
      result.push(`${i+1}: ${array[i]}`)
    }
    return result
}


/*08.03.2023 #80 |6kyu|
#Your Task Implement our beloved Array,prototype.filter from scratch.
Example of Filter
var one_to_nine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lower_than_six = (x) => x < 6
var one_to_five = one_to_nine.filter(lower_than_six);

Expected
[1, 2, 3, 4, 5]
Not allowed:

Array.prototype.filter
Array.prototype.forEach
I can't disable forEach since console.log needs it and the Test Cases require console.log implicitly, but please don't use it since forEach does most of the work.
Array.prototype.reduce/reduceRight
#What do I want? I want you to create this basic, yet, really important algorithm from scratch by yourself.

The Basics
Array.prototype.fiter is a function that takes a predicate function and an object as a context
The predicate function receives the current item, the index and the array itself
The context will be this inside the predicate function
NOTE

As always, take into account that an array built with [] and new Array(elemn1, elem2...) is different in content than a new Array(length).
[1, 2]; // { '0': 1, '1': 2, length: 2}
new Array(1, 2); // { '0': 1, '1': 2, length: 2}
new Array(2); // { length: 2 }

[1, 2].push(3); // {'0': 1, '1': 2, '2': 3, length: 3}
new Array(1, 2).push(3);  // {'0': 1, '1': 2, '2': 3, length: 3}
new Array(2).push(3); // { '2': 3, length: 3 }
That said, Happy Coding!

Another Note

Your implementation should not modify the current array:

var base_array = [1, 2, 3, 4, 5];
var mapped_array = base_array.filter(function(item) { return item < 3 });

console.log(base_array); // [1, 2, 3, 4, 5]
console.log(mapped_array); // [1, 2]
*/
Array.prototype.filter = function(cb, context) {
    const newArr = []
    let length = this.length
    for(let i = 0; i < length ; i++) {
        if (i in this && cb.call(context, this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
  }

/*09.03.2023 #81 |7kyu|
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/
function openOrSenior(data){
    const result = [];
    for (let item of data) {
      if (item[0] >= 55 && item[1] > 7) {
        result.push('Senior')
      } else {
        result.push('Open')
      }
    }
    return result;
  }


/*13.03.2023 #82
Реализовать собственную функцию bind
Пример:
function logPerson() {
	console.log(‘Person: ${this.name}, ${this.age}, ${this.job’})
}

const person1 = {name: ‘Михаил’, age: 22, job: ‘Frontend’}
const person2 = {name: ‘Елена’, age: 19, job: ‘SMM’}

bind(person1, logPerson)
bind(person2, logPerson)
 */
/*
1. Понимание -> написать функцию bind, которая принимает функцию и контекст. И возвращает функцию, с привязанным контекстом.
2. Планирование + Декомпозиция
-> Привязать контекст функции можно, вызвав эту функцию внутри объекта. Для этого:
-> Внутри возвращаемой функции создадим уникальную строку с помощью Date.now().toString()
-> Добавим в объект-контекст метод-функцию по этому уникальному ключу
-> Запишем в результат вызов этого метода внутри нового контекста
-> удалим этот метод из объекта, чтобы он не засорял нам объект
-> вернем результат
-> функция bind будет возвращать новую функцию, которую надо вызвать с аргументами контекста и функции, к которой нужно привязать этот контекст.
*/
function bind(context, func) {
    return function() {
        const uniqId = Date.now().toString()
        context[uniqId] = func
        const result = context[uniqId]()
        delete context[uniqId]
        return result
    }
}


/*14.03.2023 #83 |6kyu|
You probably know about Function.prototype.bind method in JavaScript. It returns a copy of the original function but this function will always be called in the specified context. The problem is that you can't rebind another context any more.

var func = function () {
  return this.prop;
};
var obj1 = {prop: 1},
    obj2 = {prop: 2};

func = func.bind(obj1);
func(); // Will produce 1

func = func.bind(obj2);
func(); // Will also produce 1 :(
Your task is override the native Function.prototype.bind method by a new one that will allow you to rebind context multiple times. In this kata you don't need to worry about currying, testing function will never get params.
*/
Function.prototype.bind = function (context) {
    const func = this
    return function() {
      if (this === global) {
        return func.call(context)
      } else {
        return func.call(this)
      }
    }
  }


/*15.03.2023 #84 |7kyu|
You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.

Rules
The SantaClausable interface is implemented, if all of the following methods are defined on an object:

sayHoHoHo() / say_ho_ho_ho
distributeGifts() / distribute_gifts
goDownTheChimney() / go_down_the_chimney
Example
var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE
 */
function isSantaClausable(obj) {
    const property = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney', 'say_ho_ho_ho', 'distribute_gifts', 'go_down_the_chimney']
    return result = property.filter(x => typeof obj[x] === 'function').length === 3
}


/*16.03.2023 #85 |7kyu|
For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

The following is an example of how the final code would be used and what the expected return values should be:

var dog = new Animal('Max', 'dog');
dog.toString(); // should return 'Max is a dog'
dog.type; // should == 'dog'
dog.name; // should == 'Max'
dog.name = 'Lassie'; // should set name to 'Lassie'
 */
class Animal {

    constructor(name, type) {
      this.name = name
      this.type = type
    }

    toString() {
      return `${this.name} is a ${this.type}`
    }

  }


/*17.03.2023 #86 |8kyu|
Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
Note: In COBOL, it should return "found the needle at position 6"
*/
function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`
  }


/*18.03.2023 #87 |7kyu|
Preloaded for you in this Kata is a class Animal:

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
Task
Define the following classes that inherit from Animal.

I. Shark
The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

II. Cat
The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
III. Dog
The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).
*/
class Shark extends Animal {
    constructor(name, age, status, legs, species) {
        super(name, age, status);
        this.legs = 0
        this.species = 'shark'
        this.status = status
    }
}

class Cat extends Animal {
    constructor(name, age, status, legs, species) {
        super(name, age, status);
        this.legs = 4
        this.species = 'cat'
        this.status = status
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master, legs, species) {
        super(name, age, status);
        this.legs = 4
        this.species = 'dog'
        this.status = status
        this.master = `${master}`
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    greetMaster() {
        return `Hello ${this.master}`
    }
}


/*20.03.2023 #88 |7kyu|
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/
function rowSumOddNumbers(n) {
    const result = []
    let count = 1
    let temp = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; temp.length <= i; j++) {
            temp.push(count)
            count += 2
        }
        result.push(temp)
        temp = []
    }
    return result[n - 1].reduce((acc, curr) => acc + curr)
  }

  //best practice :)
  function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
  }


/*22.03.2023 #89 |7kyu|
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/
function getSum(a, b) {
    if (a === b) return a

    let count = 0

    if (a < b) {
        while (a <= b) { count += a++ }
    } else {
        while (a >= b) { count += a-- }
    }
    return count
}


/*23.03.2023 #90 |8kyu|
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function findAverage(array) {
    return array.length === 0 ? 0 : array.reduce((acc, cur) => acc + cur) / array.length
  }


/*24.03.2023 #91 |6kyu|
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ",
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ",
  "    ***    ",
  "   *****   ",
  "  *******  ",
  " ********* ",
  "***********"
]
*/
/*
1. Понимание -> написать функцию, которая строит пирамиду вида:
 [
  "  *  ",
  " *** ",
  "*****"
]
где количество этажей задается параметром функции nFloors.

2. Планирование + Декомпозиция
-> количество блоков "*" в основании пирамиды: (nFloors * 2 - 1)
-> создать стартовую строку-основание и сделать ее массивом
-> В цикле добавлять строки в массив. На каждой итерации заменять крайние блоки "*"  пробелами"
-> Перевернуть массив и вернуть из функции
*/
function towerBuilder(nFloors) {

    let floor = `${'*'.repeat(nFloors * 2 - 1)}`
    const tower = [floor]
    let space = 1

    for (let i = 1; i < nFloors; i++) {
        let temp = `${' '.repeat(space)}${floor.slice(space * 2)}${' '.repeat(space)}`
        tower.push(temp)
        space++
    }
    return tower.reverse()
}


/*24.03.2023 #92 |8kyu|
Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2)
  }


/*27.03.2023 #93 |6kyu|
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

Note
consecutive strings : follow one after another without an interruption
*/
/*
1. Понимание -> написать функцию, которая принимает массив строк и число k. И возвращает самую длинную последовательность k строк из массива.
Если длина входного массива = 0  или < k или k <= 0 вернуть пустую строку.
2. Планирование + Декомпозиция
-> создать пустой объект
-> в цикле заполнить объект, где ключ - сконкатенированная строка, значение длина этой строки
-> выполнить поиск по объекту и вернуть ключ с самым большим значением.
*/
function longestConsec(strarr, k) {
    if ((strarr.length === 0 || strarr.length < k) || k <= 0) return ''
    let result = {}

    while(strarr.length >= k) {
        let key = strarr.slice(0, k).join('')
        result[key] = key.length
        strarr.shift()
    }
    return Object.keys(result).find(key => result[key] === Math.max(...Object.values(result)))
}


/*30.03.2023 #94 |7kyu|
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)
4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/
function getDivisorsCnt(n){
    let count = 0;
    for(let i = 1;i <= n;i++){
        if(n % i=== 0){
            count++;
        }
    }
    return count;
}


/*01.04.2023 #95 |7kyu|
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
function reverseWords(str) {
  return str.split(' ').map(x => x.split('').reverse().join('')).join(' ')
  }


/*04.04.2023 #96 |8kyu|
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo"
name + " does not play banjo"
Names given are always valid strings.
*/
function areYouPlayingBanjo(name) {
return name[0].toUpperCase() !== 'R' ? `${name} does not play banjo` : `${name} plays banjo`
}


/*14.04.2023 #97 |6kyu|
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
function solution(string) {
    let res = ''
    for (let i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
        res += ' '
      }
      res += string[i]
    }
    return res
}


/*18.04.2023 #98 |4kyu|
Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
to roman:
2000 -> "MM"
1666 -> "MDCLXVI"
1000 -> "M"
 400 -> "CD"
  90 -> "XC"
  40 -> "XL"
   1 -> "I"

from roman:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      -> 400
"XC"      -> 90
"XL"      -> 40
"I"       -> 1
*/
class RomanNumerals {
    static toRoman(num) {
        const romansNum = [
            ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
            ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
            ['', 'M', 'MM', 'MMM']
        ]

        return romansNum[3][Math.floor(num / 1000)] +
               romansNum[2][Math.floor(num % 1000 / 100)] +
               romansNum[1][Math.floor(num % 100 / 10)] +
               romansNum[0][Math.floor(num % 10)]
    }

    static fromRoman(str) {
        let  res = 0
        const romans = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        for (let i = 0; i < str.length; i++) {
            romans[str[i]] >= romans[str[i + 1]] ? res += romans[str[i]]: str[i + 1] ? res -= romans[str[i]] : res += romans[str[i]]
        }
        return res
    }
  }


/*19.04.2023 #99 |6kyu|
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/
function high(x){
    const temp = x.split(' ')
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alphabetScore = {}
    for (let i = 1; i <= alphabet.length; i++) {
      alphabetScore[alphabet[i - 1]] = i
    }

    const res = {}
    for (let word of temp) {
      res[word] = word.split('').map(x => alphabetScore[x]).reduce((curr, acc) => curr + acc)
    }
    let maxWord = Math.max(...Object.values(res))
    return Object.keys(res).find(key => res[key] === maxWord)
}


/*24.04.2023 #100 |6kyu|
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
*/
function countSmileys(arr) {
  let count = 0

  for (let face of arr) {
    if (!(face[0] === ':' || face[0] === ';')) {
      console.log('first conditions')
      continue
    }

    if (!(face.split('').includes('D') || face.split('').includes(')'))) {
      console.log('second conditions')
      continue
      }

    if (face.length > 3) {
      continue
    }

    let flag = true

    for (let char of face) {
      if (!([':', ';', '-', '~', ')', 'D'].includes(char))) {
          flag = false
          break
          }
    }
    if (flag === false) {
      continue
    }
    count++
  }

 return count
}


/*25.04.2023 #101 |7kyu|
The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
*/
Array.prototype.reverse = function() {
  const arr = this
  const len = arr.length

  for (let i = len - 1; i >= 0; i--) {
    arr.push(arr[i])
  }

  for (let i = 0; i < len; i++) {
    arr.shift()
  }
  return arr
}


/*25.04.2023 #102 |7kyu|
Implement Array.prototype.size() - without .length !
Implement Array.prototype.size(), which should simply return the length of the array. But do it entirely without using Array.prototype.length!
Where .length is a property, .size() is a method.

Rules
Because it is quite impossible to disable [].length, and because filtering for "length" is an iffy proposition at best,
THIS KATA WORKS ON THE HONOUR SYSTEM.
You may cheat. But you may have trouble sleeping. Or $DEITY may kill a puppy.

You need not support sparse arrays (but you may!). All testing will be done with dense arrays.
Values will not be undefined. You need only support actual, real arrays.

Your method needs to be read only. Arguments must be ignored. The this object must not be modified.

Be creative!
*/
Array.prototype.size = function() {
  const arr = this
  let i = 0

  while(arr[i] !== undefined) {
    i++
  }
  return i
}


/*26.04.2023 #103 |6kyu|
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
 */
Object.assign(Array.prototype, {
  square() {return this.map(x => x**2)},
  cube() {return this.map(x => x**3)},
  average() {return this.reduce((curr, acc) => curr + acc, 0) / this.length},
  sum() {return this.reduce((curr, acc) => curr + acc, 0)},
  even() {return this.filter(x => x % 2 === 0)},
  odd() {return this.filter(x => x % 2 !== 0)}
})


/*10.05.2023 #104 |6kyu|
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/
function expandedForm(num) {
  const strNum = num.toString()
  let res = ''
  if (strNum.length === 1) return strNum
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] === '0') continue
    if (strNum.length - 1 === i) {
      res += ` + ${strNum[i]}`
      break
    }
    res += ` + ${num.toString()[i]}${'0'.repeat(strNum.length - (i + 1))}`
  }
  return res.slice(2).trim()
}


/*11.05.2023 #105 |6kyu|
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
*/
function findEvenIndex(arr){
  if (arr.length < 2) return 0

  if (arr.slice(1).reduce((acc, curr) => acc + curr) === 0) return 0
  if (arr.slice(0, -1).reduce((acc, curr) => acc + curr) === 0) return arr.length - 1

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr.slice(0, i).reduce((acc, curr) => acc + curr) === arr.slice(i + 1).reduce((acc, curr) => acc + curr)) return i
  }

  return -1
}


/*12.05.2023 #106 |8kyu|
Fun with ES6 Classes #1 - People, people, people
Time for some OOP fun!

Define a class Person with the following properties:

A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"
You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.
*/
class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }

  sayFullName () {
    return this.firstName + ' ' + this.lastName
  }

  static greetExtraTerrestrials (raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}


/*14.05.2023 #107 |7kyu|
Write a function, factory, that takes a number as its parameter and returns another function.

The returned function should take an array of numbers as its parameter, and return an array of those numbers multiplied by the number that was passed into the first function.

In the example below, 5 is the number passed into the first function. So it returns a function that takes an array and multiplies all elements in it by five.

Translations and comments (and upvotes) welcome!

Example
var fives = factory(5);       // returns a function - fives
var myArray = [1, 2, 3];
fives(myArray);               //returns [5, 10, 15];
 */
function factory(x){
  return array => array.map( a => a*x );
}

/*16.05.2023 #108 |6kyu|
Introduction to getter and setter
Javascript classes can declare getter and setters using the following format:

class Engine {
  constructor(watts) {
    this.watts = watts;
  }
  get horsepower() {
    return this.watts / 745.7;
  }
  set horsepower(hp) {
    this.watts = 745.7 * hp;
  }
}
and be used as so:

let bossV8 = new Engine(279637.5);
console.log(bossV8.horsepower); // => 375
bossV8.horsepower = 385;
console.log(bossV8.watts); // => 287094.5
The problem
There is a preloaded class of Person and it needs a new getter and setter. Person is defined with a constructor that takes a first name and a last name, and provides a mean to get the first name, last name, and full name. Bellow is the preloaded class:

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }
}
and can be used as so:

let marcusFenix = new Person('Marcus', 'Fenix');
console.log(marcusFenix.firstName); // => 'Marcus'
console.log(marcusFenix.lastName); // => 'Fenix'
console.log(marcusFenix.getName()); // => 'Marcus Fenix'
Add a getter of name that returns the full name
Add a setter of name that modifies first name and last name
After adding the new getter and setter, a Person can be used as so:

let augustusCole = new Person('Augustus', 'Cole');
augustusCole.name = 'Cole Train';
console.log(augustusCole.firstName); // => 'Cole'
console.log(augustusCole.lastName); // => 'Train'
console.log(augustusCole.getName()); // => 'Cole Train'
console.log(augustusCole.name); // => 'Cole Train'
*/
Object.defineProperty(Person.prototype, 'name', {
  get() {
    return this.firstName + ' ' + this.lastName
  },

  set(value) {
    [this.firstName, this.lastName] = value.split(' ')
  }
})


/*17.05.2023 #109 |5kyu|
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
*/
class PaginationHelper {
	constructor(collection, itemsPerPage) {
	  this.collection = collection
    this.itemsPerPage = itemsPerPage
	}

	itemCount() {
    return this.collection.length
	}

	pageCount() {
	  return Math.ceil(this.collection.length / this.itemsPerPage)
	}

	pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex > (this.pageCount() - 1)) return -1

    return pageIndex === this.pageCount() - 1 ? this.collection.length % this.itemsPerPage || this.itemsPerPage : this.itemsPerPage
	}

	pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex > this.collection.length - 1) return -1

    return Math.floor(itemIndex / this.itemsPerPage)
	}
}


/*29.05.2023 #110 |6kyu|
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!
*/
function createPhoneNumber(numbers){
  return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`
}


/*30.05.2023 #111 |7kyu|
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
function validatePIN (pin) {
  if (pin.length < 4) return false
  if (pin.length === 5) return false
  if (pin.length > 6) return false
  if (pin.trim().length !== pin.length) return false
  
  for (let char of pin) {
    if (isNaN(Number(char))) return false
  }
  return true
}


/*30.05.2023 #112 |7kyu|
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/
function descendingOrder(n){
  return Number(n.toString().split('').sort((a, b) => Number(b) - Number(a)).join(''))
}


/*30.05.2023 #113 |6kyu|
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
function findOdd(A) {
  const obj = {}
  for (let num of A) {
    if (obj[num]) {
      obj[num] += 1
    } else {
      obj[num] = 1
    }
  }
  for (let num in obj) {
    if (obj[num] % 2) return Number(num)
  }
  return
}


/*31.05.2023 #113 |6kyu|
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  for (let char of string) {
    if (alphabet.includes(char.toLowerCase())) {
      alphabet.splice(alphabet.indexOf(char.toLowerCase()), 1)
    }
  }
  return alphabet.length === 0
}


/*31.05.2023 #114 |6kyu|
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.
Example
madam -> True
adamm -> True
junk -> False
Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/
function permuteAPalindrome (input) { 
  const obj = {}
  for (let char of input) {
    if (obj[char]) { obj[char] += 1} 
    else {obj[char] = 1}
  }
  return Object.values(obj).filter(x => x % 2 !== 0).length < 2
}

/*31.05.2023 #115 |5kyu|
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.
The string has the following conditions to be alphanumeric:
At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
 */
function alphanumeric(string){
  const simbols = '1234567890abcdefghijklmnopqrstuvwxyz'.split('')
  if (!string) return false
  
  for (let char of string) {
    if (!simbols.includes(char.toLowerCase())) return false
  }
  return true
}


/*03.06.2023 #116 |6kyu|
Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>
var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
  ["name2", 110, ["B", "A", "A", "A"]],
  ["name3", 200, ["B", "A", "A", "C"]],
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
];
The scores for each grade is:
A: 30 points
B: 20 points
C: 10 points
D: 5 points
Everything else: 0 points
If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.
var array = [
  ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
  ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
  ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
  ,
  ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
];
return ["name1", "name3"];
*/
function findHack(arr) {
  const result = []
  const marks = ['A', 'B', 'C', 'D']
  const grades = {
    A: 30,
    B: 20,
    C: 10,
    D: 5
  }
 
  for (let person of arr) {    
    let score = person[2].filter(x => marks.includes(x)).map(y => grades[y]).reduce((curr, acc) => curr + acc, 0)
    
    if (person[2].length >= 5 && person[2].every(x => x === 'A' || x === 'B')) {
      score += 20
    }
    if (score > 200) {
      score = 200
    }
    if (score !== person[1]) {
      result.push(person[0])
    }
  }
  return result
}

/*06.06.2023 #117 |4kyu|
The purpose of this kata is to implement the undoRedo function.
This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:
set(key, value) Assigns the value to the key. If the key does not exist, creates it.
get(key) Returns the value associated to the key.
del(key) removes the key from the object.
undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.
redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.
After set() or del() are called, there is nothing to redo.
All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.
Any set/del after an undo should disallow new redos.
*/
function undoRedo(object) {
  let lastActions = []
  let undoneActions = []

  return {
    set(key, value) {
      if (object.hasOwnProperty(key) === true) {
        lastActions.push(['edit', key, object[key], value])
      } else {
        lastActions.push(['set', key, value])
      }
      object[key] = value
      undoneActions = []
    },

    get(key) {
      return object[key]
    },

    del(key) {
      if (object[key]) {
        lastActions.push(['del', key, object[key]])
        delete object[key]
        undoneActions = []
      }
    },

    undo() {
      if (lastActions.length === 0) {
        throw new  Error('No actions')
      }

      const popped = lastActions.pop()
      if (popped[0] === 'set') delete object[popped[1]]
      if (popped[0] === 'edit') object[popped[1]] =  popped[2]
      if (popped[0] === 'del') object[popped[1]] = popped[2]
      
      undoneActions.push(popped)
    },

    redo() {
      if (undoneActions.length === 0) {
        throw new Error('No undone actions')
      }

      const popped = undoneActions.pop()
      
      if (popped[0] === 'set') object[popped[1]] = popped[2]
      if (popped[0] === 'edit') object[popped[1]] = popped[3]
      if (popped[0] === 'del') delete object[popped[1]]
    
      lastActions.push(popped)
    }
  }
}


/*09.06.2023 #118 |6kyu|
In input string word(1 word):
replace the vowel with the nearest left consonant.
replace the consonant with the nearest right vowel.
P.S. To complete this task imagine the alphabet is a circle (connect the first and last element of the array in the mind). For example, 'a' replace with 'z', 'y' with 'a', etc.(see below)
For example:
'codewars' => 'enedazuu'
'cat' => 'ezu'
'abcdtuvwxyz' => 'zeeeutaaaaa'
*/
function replaceLetters(word) {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  const vowels = ['a','e','i','o','u'];
  
  let res = ''

  for (let char of word) {
    if (vowels.includes(char)) {
      let index = alphabet.indexOf(char)
      while(true) {
        index--
        if (index < 0) {
          index = 25
        }
        if (consonants.includes(alphabet[index])) {
          res += alphabet[index]
          break
        }
      }
    } else {
      let index = alphabet.indexOf(char)
      while(true) {
        index++
        if (index > 25) {
          index = 0
        }
        if (vowels.includes(alphabet[index])) {
          res += alphabet[index]
          break
        }
      }
    }
  }
  return res
}


/*10.06.2023 #119 |5kyu|
Return a list of all numbers that have no more than n bits, such that exactly k of them are set to 1.
Input/Output
[input] integer n
The maximum number of bits the number can have.
1 ≤ n ≤ 20.

[input] integer k
The number of bits equal to 1.
0 ≤ k ≤ 20.
[output] an integer array
The numbers with at most n bits k of which are set to 1 sorted in ascending order.

Example
For n = 4 and k = 1, the output should be [1,2,4,8].
110 = 12, which obviously has 1 number of bits, and the only bit is 1.
210 = 102, which has 2 number of bits, with the first one equal to 1.
410 = 1002, which has 3 number of bits, with the first one equal to 1.
810 = 10002, which has 4 number of bits, with the first one equal to 1.
For n = 5 and k = 5, the output should be [31].
3110 = 111112, which exactly has 5 bits qualt to 1.
For n = 3 and k = 20, the output should be [].
No such a number that has not greater 3 bits and exactly has 20 bits qualt to 1.
For n = 20 and k = 0, the output should be [0].
010 = 02, which exactly has 0 bits qualt to 1.
*/
function kBitsDigits(n, k) {
  const res = []
  let i = 0
  
  while(i.toString(2).length <= n) {
   if (i.toString(2).split('').filter(x => x === '1').length === k) {
     res.push(i)
   }
    i++
  }
   return res
 }


/*11.06.2023 #120 |6kyu|
This Kata is intended as a small challenge for my students
Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.
The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.
Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.
Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.
rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]
Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string. The function should return an emptry array with a 0 length string, '', as input.
 */
function rotate(str){
  if (str.length === 0) return []
  const res = []
  for (let i = 1; i < str.length; i++) {
    let temp = str.slice(i) + str.slice(0, i)
    res.push(temp)
  }
  res.push(str)
  return res
}


/*12.06.23 #121 |7kyu|
Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
Task
Define the following classes.

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

II. Cube
class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.
 */
class Cuboid {
  constructor(length, width, height) {
    this.length = length
    this.width = width
    this.height = height
  }
  
  get surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.height * this.width)
  }

  get volume() {
    return this.length * this.width * this.height
  }
}

class Cube extends Cuboid {
  constructor(length) {
    super(length)
    this.height = this.length
    this.width = this.length
  }
}


/*12.06.2023 #122 |7kyu|
Define a class Cube whose constructor function takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.
 */
class Cube {
  constructor(length) {
      this.length = length;
  }
  get surfaceArea() {
      return 6 * this.length ** 2;
  }
  set surfaceArea(value) {
      this.length = Math.sqrt(value / 6);
  }
  get volume() {
      return this.length ** 3;
  }
  set volume(value) {
      this.length = Math.cbrt(value);
  }
}


/*13.06.2023 #123 |6kyu|
You will be defining a class File (ES6 syntax please :) ) with the following properties and methods:

Properties:
fullName
filename
extension
Methods
getContents()
write(str)
gets()
getc()

Your File class should exhibit the following behaviour:
Constructor
Your constructor should accept two arguments in the following order: fullName and contents, where fullName is the full name of the file (including file extension) and contents is the file contents.
An instance of your File class should exhibit the following behaviour:

fullName (property)
Should contain the full name of the file, including the file extension. Please note that the fullName property should be read-only, which means that attempts to reassign fullName a new value should fail and it should retain its original value. For example:

var myFile = new File("hello.txt", "Hello World");
console.log(myFile.fullName); // hello.txt
myFile.fullName = "goodbye.txt"; // Reassignment should fail
console.log(myFile.fullName); // still "hello.txt"
filename (property)
Should contain the name of the file, excluding the file extension. Should also be read-only which means reassignment attempts should fail. E.g.

var file1 = new File("hello_world.txt", "Hello World");
console.log(file1.filename); // "hello_world"
file1.filename = "goodbye_world"; // Reassignment should fail
console.log(file1.filename); // still "hello_world"

var file2 = new File("class.phptester.php", "<?php /* Some PHP code here  ?>");
console.log(file2.filename); // "class.phptester" - the filename should be correctly identified even if the filename itself contains the '.' character
extension (property)
Should contain the file extension. Read-only. E.g.

var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
console.log(fileWithComplexName.extension); // "txt"
fileWithComplexName.extension = "js"; // Reassignment should fail
console.log(fileWithComplexName.extension); // still "txt"
getContents (method)
Should return the contents of the file every time. E.g.

var myFile = new File("hello.txt", "Hello World\nHello World");
console.log(myFile.getContents()); // "Hello World\nHello World"
write (method)
Should accept exactly 1 argument str, the new content to be written to the file. The new content should be written on a new line on the file. For example:

var myFile = new File("example.txt", "");
console.log(myFile.getContents()); // ""
myFile.write("Line 1");
console.log(myFile.getContents()); // "Line 1"
myFile.write("Line 2");
console.log(myFile.getContents()); // "Line 1\nLine 2"
myFile.write("Line 3");
console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"
gets (method)
Returns a line on the file, starting on Line 1. Successive calls to the method should return successive lines on the file. If the number of calls exceeds the number of lines on the file, simple return undefined. E.g.:

var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
console.log(myFile.gets()); // "Line 1"
console.log(myFile.gets()); // "Line 2"
console.log(myFile.gets()); // "Line 3"
console.log(myFile.gets()); // "Line 4"
console.log(myFile.gets()); // "Line 5"
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined
getc (method)
Should return a character on the file, starting from the first character. Successive calls should return successive characters on the file. If the number of calls exceeds the number of characters on the file, it should simply return undefined. Example:

var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
console.log(myFile.getc()); // "L"
console.log(myFile.getc()); // "o"
console.log(myFile.getc()); // "r"
console.log(myFile.getc()); // "e"
console.log(myFile.getc()); // "m"
console.log(myFile.getc()); // " "
console.log(myFile.getc()); // "i"
console.log(myFile.getc()); // "p"
// ... (many calls to myFile.getc())
console.log(myFile.getc()); // undefined (when number of calls exceeds character count)
Note regarding filenames
For the purposes of this Kata, all filenames used in this Kata will be valid filenames. Valid filenames are summarized as follows:

Contains a filename and extension (e.g. LICENSE.txt is a valid filename, LICENSE is not)
Filename contains only alphanumeric characters (both uppercase and lowercase), underscores, spaces and/or dots (e.g. index.php, class.phptester.php, alpha beta.gamma_delta01.complicatedExample.txt are all valid filenames). Edge cases will not be considered (e.g. successive dots - Hello World..txt - will not appear in the test cases)
Extension contains only lowercase alphanumeric characters (e.g. txt, php, php3 are all valid)
Note regarding file content
All file content will be valid. In this Kata, valid file content may include alphanumeric characters (uppercase or lowercase), underscores, ordinary whitespace, punctuation or mathematical symbols, in which each line will be separated from the next by a newline character ("\n"). There will not be tabs or other whitespace/newline characters other than "\s" (spacebar) or "\n" and the contents of any file will not start or end with a newline. You may also assume that when the tests use the write(str) method, the string str will not contain newline characters itself.
*/
class File {
  #fullName
  constructor(fullName, contents) {
    this.contents = contents
    this.#fullName = fullName
    this.line = 0
    this.index = 0
  }
  get fullName() {
    return this.#fullName
  }
  get filename() {
    return this.#fullName.slice(0, this.#fullName.lastIndexOf('.'))
  }
  get extension() {
    return this.#fullName.slice(this.#fullName.lastIndexOf('.') + 1)
  }
  getContents() {
    return this.contents
  }
  write(str) {
    return this.contents.length > 0 ? this.contents += `\n${str}` : this.contents = str
  }
  gets() {
    let store = this.contents.split('\n')
    return store[this.line++]
  }
  getc() {
    return this.contents[this.index++]
  }
}

/*03.07.2023 #124 |6kyu|
You are developing an image hosting website.

You have to create a function for generating random and unique image filenames.

Create a function for generating a random 6 character string which will be used to access the photo URL.

To make sure the name is not already in use, you are given access to an PhotoManager object.

You can call it like so to make sure the name is unique

// at this point, the website has only one photo, hosted on the 'ABCDEF' url
photoManager.nameExists('ABCDEF'); // returns true
photoManager.nameExists('BBCDEF'); // returns false
Note: We consider two names with same letters but different cases to be unique.
 */
function generateName() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const res = []
  while (res.length <= 6) {
    let randomIndex = Math.floor(Math.random()*25)
    res.push(alphabet[randomIndex])
    
    if (res.length === 6) {
      if (photoManager.nameExists(res)) {
        res.length = 0
      } else {
        return res.join('')
      }
    }
  }
}


/*04.08.2023 #125 |7kyu|
Given an integral number, determine if it's a square number:
In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.
Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/
const isSquare = function(n){
  if (n < 0) return false
  
  if (Math.sqrt(n).toString().includes('.')) {
    return false
  } else {
    return true
  }
}