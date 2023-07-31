FROM denoland/deno:alpine

EXPOSE 9999

WORKDIR /app

COPY . ./

RUN deno cache app.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "app.ts"]
