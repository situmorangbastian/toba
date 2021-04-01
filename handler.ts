import { Status } from "https://deno.land/std/http/http_status.ts"

import { Router,  Context } from 'https://deno.land/x/oak@v6.5.0/mod.ts'

const router = new Router()

const fetch = (ctx: Context) => {
    ctx.response.body = []
    ctx.response.status = Status.OK
}

router.get('/health', (context) => {
	context.response.body = 'ok'
    context.response.status = Status.OK
})
router.get('/data',fetch)

export { router }
