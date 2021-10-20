import { Status } from "https://deno.land/std@0.112.0/http/http_status.ts"

import { Application, Context } from 'https://deno.land/x/oak@v6.5.0/mod.ts'
import { config } from 'https://deno.land/x/dotenv@v1.0.1/mod.ts'

import { router } from './handler.ts'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())
app.use((ctx: Context) => {
    ctx.response.status = Status.NotFound
    ctx.response.body = {
        error: "not found",
    }
})

const env = config()
const PORT = parseInt(env.APP_PORT)
console.log("Listening on: "+PORT)

await app.listen({port: PORT})
