import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
   res.send("Hello");
});

app.get("/json", (req: Request, res: Response) => {
   res.json({ message: "Hello Wolrd" });
});

app.get("/welcome/:name", (req: Request, res: Response) => {
   const { name } = req.params;

   res.json({ message: `Welcome, ${name}` });
});

// ----------------------------------------------------------------------------- //

// Find All user
app.get("/users", async (req: Request, res: Response) => {
   const users = await prisma.user.findMany({
      include: {
         profile: true,
      },
   });
   res.json(users);
});

// Find Admin
app.get("/users/admin", async (req: Request, res: Response) => {
   const users = await prisma.user.findMany({
      where: {
         admin: true,
      },
   });
   res.json(users);
});

// Find spécifique user
app.get("/user/:id", async (req: Request, res: Response) => {
   const { id } = req.params;
   const user = await prisma.user.findFirst({
      where: {
         id: +id,
      },
   });
   res.json(user);
});

// Create User
app.post("/users", async (req: Request, res: Response) => {
   const body = req.body;

   const user = await prisma.user.create({ data: body });

   res.json({ message: user });
});

// Update User
app.patch("/user", async (req: Request, res: Response) => {
   const body = req.body;

   const user = await prisma.user.update({
      where: { id: +body.id },
      data: body,
   });

   res.json({ message: `User id : ${body.id} update`, user: user });
});

// Delete User
app.delete("/user/:id", async (req: Request, res: Response) => {
   const { id } = req.params;
   const user = await prisma.user.delete({
      where: {
         id: +id,
      },
   });
   res.json({ message: `User id : ${id} delete`, user: user });
});

// ----------------------------------------------------------------------------- //

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));
