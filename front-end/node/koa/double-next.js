const koa = require('koa')
const app = new koa()
console.log('im begin')
app.use(async (ctx, next) => {
  console.log('Im one ')
  await next();
})
app.use(async (ctx, next) => {
  console.log('Im two ')
  await next();
  await next();
})
app.listen(3000)
console.log('im end')