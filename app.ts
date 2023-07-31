import { HealthResource, DataResource, ErrorHandler } from "./handler.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import * as drash from "https://deno.land/x/drash@v2.7.1/mod.ts";

const cfg = config();
const server = new drash.Server({
  error_handler: ErrorHandler,
  hostname: "0.0.0.0",
  port: parseInt(cfg.APP_PORT),
  protocol: "http",
  resources: [HealthResource, DataResource],
});

server.run();

console.log(`Server running at ${server.address}`);
