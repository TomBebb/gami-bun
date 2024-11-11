const worker = new Worker(import.meta.dirname + "/worker.ts");

const server = Bun.serve({
  port: 8080,
  fetch(request: Request) {
    console.info("request", request);
    return Response.json({ demo: "world" });
  },
});
worker.addEventListener("close", () => server.stop(true));
