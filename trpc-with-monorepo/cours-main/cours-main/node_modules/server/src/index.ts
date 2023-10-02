import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { trpcRouter } from "./routers";

const PORT = 3000;

// console.log(trpcRouter);

const app = express();
const appRouter = express.Router();

app.use(cors());

app.use("/api", appRouter);
app.use(
   "/trpc",
   createExpressMiddleware({
      router: trpcRouter,
   })
);

appRouter.get("/", (req, res) => {
   res.send("Hello, Rest API!");
});

app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
});
