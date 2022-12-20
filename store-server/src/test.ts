import Koa from 'koa'

const app = new Koa()
app.use(async(ctx) => {
    ctx.body = "Hello mtfk"
})

app.listen(3000)