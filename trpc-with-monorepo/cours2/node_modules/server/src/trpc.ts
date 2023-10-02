import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const trpcRouter = t.router({
  helloWorld: t.procedure.query(() => {
    return "Hello, World!";
  }),
  hello: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello, ${input.name}!`;
    }),
  connection: t.procedure
    .input(z.object({ username: z.string() }))
    .mutation(({ input }) => {
      return `Utilisateur ${input.username} connecté !`;
    }),
});
