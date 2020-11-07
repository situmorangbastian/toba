lint:
	deno lint --unstable

run:
	deno run --allow-read --allow-net --allow-write app.ts

docker:
	docker build -t toba .

docker-run:
	docker run -it --init -p 9999:9999 toba
