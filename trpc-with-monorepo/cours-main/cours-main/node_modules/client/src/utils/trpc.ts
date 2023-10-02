import { createTRPCReact } from "@trpc/react-query";
import type { TrpcRouter } from "../../../server/src/routers/index";

export const trpc = createTRPCReact<TrpcRouter>();
