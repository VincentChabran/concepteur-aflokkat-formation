import { useEffect, useState } from "react";
import "./style.css";
import Counter from "./components/Counter";
import Form from "./components/Form";
import Hobbies from "./components/Hobbies";
import UserList from "./components/UserList";
import { User } from "./utils/type";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type Props = {};

export default function App({}: Props) {
   const [initialCounter, setInitialCounter] = useState(0);

   const hobbies = ["vDsr", "vCr", "vKa", "vrg"];

   const users: User[] = [
      {
         id: 0,
         name: "sasuke",
         hobbies: ["un", "deux"],
         animal: { name: "Jo", age: 1 },
      },
      {
         id: 1,
         name: "naruto",
         hobbies: ["trois", "quetre"],
         animal: { name: "boby", age: 3 },
      },
   ];

   const [dark, setDark] = useState(false);

   useEffect(() => {
      const mode = localStorage.getItem("mode");
      if (mode) {
         setDark(mode === "dark" ? true : false);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("mode", `${dark ? "dark" : "light"}`);
   }, [dark]);

   return (
      <div>
         <h1 style={{ color: "red" }}>Hello world</h1>

         <button className={`button ${dark ? "dark" : "light"}`} onClick={() => setDark((old) => !old)}>
            {dark ? <MdLightMode /> : <MdDarkMode />}
         </button>

         <Form />

         <Counter initialValue={initialCounter} setInitialCounter={setInitialCounter} />

         <Hobbies hobbies={hobbies} />

         <UserList users={users} />
      </div>
   );
}
