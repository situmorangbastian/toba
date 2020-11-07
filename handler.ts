import { Status } from "https://deno.land/std/http/http_status.ts"

import { Router, Response } from 'https://deno.land/x/oak@v6.3.1/mod.ts'

const router = new Router()

const fetch = async ({ response }: { response: Response }) => {
    response.body = []
    response.status = Status.OK
}

router.get('/horas', (context) => {
	context.response.body = 'horas'
})
router.get('/data',fetch)

export { router }
