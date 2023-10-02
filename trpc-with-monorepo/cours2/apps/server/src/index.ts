import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { trpcRouter } from "./trpc";

const PORT = 3002;

const app = express();
const appRouter = express.Router();

app.use(cors());
app.use(express.json());

app.use("/api", appRouter);
app.use(
   "/trpc",
   createExpressMiddleware({
      router: trpcRouter,
   })
);

appRouter.get("/", (req, res) => {
   res.send("Hello, World!");
});

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});

export type TRPCRouter = typeof trpcRouter;
