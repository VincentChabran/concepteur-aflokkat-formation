import { prisma } from "../prisma";
import { t } from "../trpc";

export const userRouter = t.router({
   getAllUsers: t.procedure.query(async () => {
      const users = await prisma.user.findMany();
      return {
         users,
      };
   }),
});
