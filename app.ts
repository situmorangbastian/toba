import { HealthResource, DataResource, ErrorHandler } from "./handler.ts";
import { config } from "https://deno.land/x/dotenv@v1.0.1/mod.ts";
import * as Drash from "https://deno.land/x/drash@v2.7.0/mod.ts";

const cfg = config();
const server = new Drash.Server({
  error_handler: ErrorHandler,
  hostname: "localhost",
  port: parseInt(cfg.APP_PORT),
  protocol: "http",
  resources: [HealthResource, DataResource],
});

server.run();

console.log(`Server running at ${server.address}`);
