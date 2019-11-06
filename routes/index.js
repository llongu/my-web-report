const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index')
})



router.post('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
