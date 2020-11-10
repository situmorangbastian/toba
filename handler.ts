import { Status } from "https://deno.land/std/http/http_status.ts"

import { Router,  Context } from 'https://deno.land/x/oak@v6.3.1/mod.ts'

const router = new Router()

const fetch = async (ctx: Context) => {
    ctx.response.body = []
    ctx.response.status = Status.OK
}

router.get('/horas', (context) => {
	context.response.body = 'horas'
})
router.get('/data',fetch)

export { router }
