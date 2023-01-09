
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


// #6 Make the first char capitalize
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1)
}


// #7 Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
  return x.split('').map(x => +x < 5 ? '0' : '1').join('')
}


// #8 Написать функцию generatePassword которая создает пароли вида: 4i%X5uY@б, %m44ELp%, Zfj@O82@. Значения должны идти в случайном порядке.
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


// #9 Return the number (count) of vowels in the given string.
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


// #10 You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
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


/* #11 For this exercise you will create a global flatten method. The method takes in any number of arguments and flattens them into a single array. If any of the arguments passed in are an array then the individual objects within the array will be flattened so that they exist at the same level as the other arguments. Any nested arrays, no matter how deep, should be flattened into the single array result.
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


/*13 Your task is to write a function, that decodes Morse code and returns a string. Write your solution in src/index.js
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
