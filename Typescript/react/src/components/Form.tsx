import React, { ChangeEvent, useState } from "react";

type Props = {};

export default function Form({}: Props) {
   const [name, setName] = useState<string>("");

   return (
      <>
         <h1>Hello form</h1>
         <input
            type="text"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
               setName(e.target.value);
            }}
         />

         <p>{name}</p>
      </>
   );
}
