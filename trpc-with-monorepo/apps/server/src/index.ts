import express from "express";
import cors from "cors";

const app = express();
const appRouter = express.Router();
const appRouter2 = express.Router();

app.use(cors());
app.use("/api", appRouter);

//
//
//
appRouter.get("/", (req, res) => {
   res.send("Hello Api !");
});

app.listen(3000, () => {
   console.log(`Server listening on PORT ${3000}`);
});
