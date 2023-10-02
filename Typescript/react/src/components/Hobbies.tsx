import React from "react";

type Props = {
   hobbies: string[];
};

export default function Hobbies({ hobbies }: Props) {
   return (
      <>
         <h1>Hobbies components</h1>

         <ul>
            {hobbies.map((el) => (
               <li key={el}>{el}</li>
            ))}
         </ul>
      </>
   );
}
