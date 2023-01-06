
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



// #8 //Написать функцию generatePassword которая создает пароли вида: 4i%X5uY@б, %m44ELp%, Zfj@O82@. Значения должны идти в случайном порядке.

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
