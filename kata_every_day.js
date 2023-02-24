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
