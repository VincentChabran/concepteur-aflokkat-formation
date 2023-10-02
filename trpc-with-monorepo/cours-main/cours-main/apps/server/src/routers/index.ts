import { z } from "zod";
import { t } from "../trpc";
import { userRouter } from "./user";

export const trpcRouter = t.router({
   hello: t.procedure.query(() => {
      return "Hello, World !!!!";
   }),
   helloName: t.procedure.input(z.object({ name: z.string() })).query(({ input }) => {
      return `Hello, ${input.name}!`;
   }),

   user: userRouter,
});

export type TrpcRouter = typeof trpcRouter;
