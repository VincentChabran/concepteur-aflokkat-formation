import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { TRPCRouter } from "../../server/src/index";

const button = document.getElementById("button");

const client = createTRPCProxyClient<TRPCRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});

button?.addEventListener("click", async () => {
  const result = await client.connection.mutate({ username: "Quentin" });
  console.log(result);
});

async function main() {
  const result = await client.hello.query({ name: "Quentin" });
  console.log(result);
}

main();
