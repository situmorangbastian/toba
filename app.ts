// @ts-ignore
import { Status } from "https://deno.land/std/http/http_status.ts"

// @ts-ignore
import { Application } from 'https://deno.land/x/oak@v6.3.1/mod.ts'
// @ts-ignore
import { Response } from 'https://deno.land/x/oak@v6.3.1/mod.ts'
// @ts-ignore
import { config } from 'https://deno.land/x/dotenv@v1.0.1/mod.ts'

// @ts-ignore
import { router } from './handler.ts'

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())
app.use(({ response }: { response: Response }) => {
    response.status = Status.NotFound
    response.body = {
        error: "not found",
    }
})

const env = config()
const PORT = parseInt(env.APP_PORT)
console.log("Listening on: "+PORT)

// @ts-ignore
await app.listen({port: PORT})