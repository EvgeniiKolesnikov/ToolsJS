async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log())

class Util {
  static id = Date.now()
}

console.log('Util.id: ', Util.id);

import('lodash').then(_ => {
  // console.log('Lodash', _)
  console.log('Lodash', _.default.random(1, 10, true))
})