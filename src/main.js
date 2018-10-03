const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')

const app = new Koa()
const router = new Router()

router.get('/imagesearch', (ctx, next) => {
    ctx.body = ctx.request.query.keyword
    })

router.post('/', (ctx, next) => {
    studentArray.push(JSON.parse(ctx.request.body))
})

app.use(koaBody())

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)

//const api_secret = process.env.apisecret

//console.log(api_secret)
