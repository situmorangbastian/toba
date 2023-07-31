lint:
	deno lint

run:
	@deno run --allow-read --allow-net --allow-write app.ts

docker-local-up:
	@docker-compose up

docker-local-down:
	@docker-compose down
