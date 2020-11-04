FROM hayd/alpine-deno:latest

EXPOSE 9999

WORKDIR /app

COPY . .

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "app.ts"]
