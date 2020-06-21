import { Status } from "https://deno.land/std/http/http_status.ts"

import { Router } from 'https://deno.land/x/oak@v4.0.0/mod.ts'
import { Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts'

const router = new Router()

const fetch = async ({ response }: { response: Response }) => {
    response.body = []
    response.status = Status.OK.valueOf()
}

router.get('/horas', (context) => {
	context.response.body = 'horas'
})
router.get('/data',fetch)

export { router }