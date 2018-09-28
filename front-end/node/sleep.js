
console.log('begin')
sleep(3);
function sleep(seconds) {
  const begin = new Date()
  const waitTill = new Date(begin.getTime() + seconds * 1000)
  while(waitTill > new Date()) {}
  console.log('how long ', new Date() - begin)
}