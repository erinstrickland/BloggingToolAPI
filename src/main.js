const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const rp = require('request-promise-native')

const app = new Koa()
const router = new Router()
const pbKey = process.env.key

router.get('/imagesearch', (ctx, next) => {
    const searchTerm = ctx.request.query.keyword
    rp(`http://www.pixabay.com/api/?key=${pbKey}&q=${searchTerm}&image_type=photo`)
        .then((htmlString) => {
            console.log(htmlString)
            ctx.body = htmlString
        })
        .catch((err) => {
            console.log(err)
        })
})

router.post('/', (ctx, next) => {
    studentArray.push(JSON.parse(ctx.request.body))
})



app.use(koaBody())

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)
