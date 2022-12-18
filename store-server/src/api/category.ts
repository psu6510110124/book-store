import Router from 'koa-router'

const router = new Router()


router.get('/',async(ctx,) => {
        ctx.body = [
        {id: 1 , category: 'Sci-fi'},
        {id: 2 , category: 'Fantasy'}
        ]
}) 

export default router