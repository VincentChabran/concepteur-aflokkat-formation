import { useState } from "react";
import { trpc } from "./utils/trpc";

function App() {
   const helloWorldQuery = trpc.hello.useQuery(undefined, {
      onSuccess(data) {
         console.log(data);
      },
   });
   const helloNameQuery = trpc.helloName.useQuery(
      { name: "Quentin" },
      {
         onError(err) {
            console.log(err);
         },
      }
   );

   const getAllUsersQuery = trpc.user.getAllUsers.useQuery();

   if (helloWorldQuery.isFetching) return <h1>Loading...</h1>;
   if (getAllUsersQuery.isFetching) return <h1>Loading...</h1>;

   return (
      <main>
         <h1>{helloWorldQuery.data}</h1>
         <h2>{helloNameQuery.data}</h2>
         {getAllUsersQuery.data?.users.map(({ id, username }) => (
            <h1 key={`${id}`}>
               User id {id} {username}
            </h1>
         ))}
      </main>
   );
}

export default App;
