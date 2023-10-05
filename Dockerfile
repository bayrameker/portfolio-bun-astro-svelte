FROM oven/bun

WORKDIR /app
COPY package.json package.json
RUN bun install

COPY . .
RUN bun --bun run build

ENV HOST=0.0.0.0
ENV PORT=5000

ENTRYPOINT ["bun", "--bun", "./dist/server/entry.mjs"]
