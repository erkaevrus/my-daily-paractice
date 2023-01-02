
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
