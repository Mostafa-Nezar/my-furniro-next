"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setTodo(response.data); // Update state with fetched data
      })
  }, []);

  return <div>{todo.title || "Loading..."}</div>;
}
// "use client";

// import { useEffect, useState } from "react";

// export default function Todo() {
//   const [todo2, setTodo2] = useState({});

//   useEffect(() => {
//     const fetchTodo = async () => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const result = await response.json();
//         setTodo2(result);
      
//     };

//     fetchTodo();
//   }, []);

//   return (
//     <>
//       <div>{todo2.title || "Loading..."}</div>
//     </>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";

// export default function Todo() {
//   const [todo2, setTodo2] = useState({});

//   useEffect(async () => {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const result = await response.json();
//     setTodo2(result);
//   }, []);

//   return (
//     <>
//       <div>{todo2.title || "Loading..."}</div>
//     </>
//   );
// }