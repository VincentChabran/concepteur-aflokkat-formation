import { useEffect } from "react";

type Props = {
   initialValue: number;
   setInitialCounter: React.Dispatch<React.SetStateAction<number>>;
};

export default function Counter({ initialValue, setInitialCounter }: Props) {
   useEffect(() => {}, []);

   return (
      <div>
         <h1>Counter components</h1>
         <h1>Counter {initialValue}</h1>

         <button onClick={() => setInitialCounter((old) => old + 1)}>+</button>
         <button onClick={() => setInitialCounter((old) => old - 1)}>-</button>
      </div>
   );
}
