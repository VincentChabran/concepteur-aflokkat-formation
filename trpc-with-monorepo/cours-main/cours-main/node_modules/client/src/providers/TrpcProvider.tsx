import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "../utils/trpc";

type Props = {
   children: React.ReactNode;
};

export function TrpcProvider({ children }: Props) {
   const queryClient = new QueryClient();
   const trpcClient = trpc.createClient({
      links: [
         httpBatchLink({
            url: "http://localhost:3000/trpc",
         }),
      ],
   });

   return (
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
         <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </trpc.Provider>
   );
}
