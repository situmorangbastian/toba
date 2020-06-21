import { Status } from "https://deno.land/std/http/http_status.ts"

import { Application } from 'https://deno.land/x/oak@v4.0.0/mod.ts'
import { Response } from 'https://deno.land/x/oak@v4.0.0/mod.ts'
import { config } from "https://deno.land/x/dotenv/mod.ts"

import { router } from './handler.ts'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())
app.use(({ response }: { response: Response }) => {
    response.status = Status.BadRequest.valueOf()
    response.body = {
        error: "not found",
    }
})

const env = config()
const PORT = parseInt(env.APP_PORT)
console.log("Listening on: "+PORT)
await app.listen({port: PORT})