import express from "express";
import axios from "axios";
import { createClient } from "redis";

const EXPIRATION = 30;

const redis = createClient();
redis.on("error", (err) => console.log("Redis error", err));
(async () => {
   redis.connect().then(() => console.log("Redis Db connected"));
})();

const app = express();

app.get("/", (req, res) => {
   res.send("Hello World !");
});

app.get("/photos", async (req, res) => {
   const cachedPhotos = await redis.get("photos");

   if (cachedPhotos) {
      // res.json(JSON.parse(cachedPhotos))
      res.send("Cached photos");
   } else {
      const photos = await axios.get("https://jsonplaceholder.typicode.com/photos");
      // console.log(photos);

      await redis.setEx("photos", EXPIRATION, JSON.stringify(photos.data));
      res.send("Not Cached Photos");
   }
});

app.listen(3000, () => {
   console.log(`Server listening on PORT ${3000}`);
});
