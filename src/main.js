const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const rp = require('request-promise-native')

const app = new Koa()
const router = new Router()
const pbKey = process.env.key

router.get('/imagesearch', async (ctx, next) => {
    const searchTerm = ctx.request.query.keyword
    const htmlString = await rp(`http://www.pixabay.com/api/?key=${pbKey}&q=${searchTerm}&image_type=photo`).catch((err) => { console.log(err) })
    const imageList = JSON.parse(htmlString)
    const display = imageList.hits.map(image => image.webformatURL)
    ctx.body = display
})

app.use(koaBody())

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)
