// generic ==========================================
const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const arrayOfStrings: Array<string> = ['one', 'one', 'two']

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

console.log('reverse(arrayOfNumbers): ', reverse(arrayOfNumbers));
console.log('reverse(arrayOfStrings): ', reverse(arrayOfStrings));

// default ==========================================
function reverseDefault(array) {
  return array.reverse()
}
