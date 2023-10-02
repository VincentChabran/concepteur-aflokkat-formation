import React from "react";
import { User } from "../utils/type";

type Props = {
   users: User[];
};

export default function UserList({ users }: Props) {
   return (
      <>
         <h1>UserList Components</h1>

         {users.map(({ id, name, hobbies, animal }, i) => (
            <div key={id} style={{ marginBottom: "50px", border: "1px black solid" }}>
               <li>Id : {id}</li>
               <li>Name : {name}</li>
               <li>
                  Hobbies :{" "}
                  <ul>
                     {hobbies.map((el) => (
                        <li key={el}>{el}</li>
                     ))}
                  </ul>
               </li>

               <li>
                  Animal :
                  <ul>
                     <li>Name : {animal.name}</li>
                     <li>Age : {animal.age}</li>
                  </ul>
               </li>
            </div>
         ))}
      </>
   );
}
