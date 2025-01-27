// import Todo from "../comps/Todo";

// export default async function contact() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const todo = await response.json();
//   return (
//     <>
//       <h2 className="bg-red-400">{todo.title}</h2>
//       <Todo/>
//     </>
//   );
// }
// import Todo from "../comps/Todo";

// export default async function contact() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1",
//     {
//       next:{
//         revalidate:2
//       }
//     }
//   );
//   const todo = await response.json();
//   return (
//     <>
//       <h2 className="bg-red-400">{todo.title}</h2>
//       <Todo/>
//     </>
//   );
// }
import Link from "next/link";
export default async function contact() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 4,
    },
  });
  const posts = await response.json();
  const postsjsx = posts.map((e) => {
    return (
      <>
        <Link
          href={`/contact/${e.id}`}
          style={{
            textDecoration: "none",
          }}
          key={e.id}
        >
          <div
            style={{
              background: "white",
              padding: 10,
              borderRadius: 10,
              margin: 10,
              color: "black",
            }}
          >
            <h1>{e.title}</h1>
            <p>{e.body}</p>
            <p>{e.id}</p>
          </div>
        </Link>
      </>
    );
  });

  return (
    <div>
      {/* <h2 className="bg-red-400">{posts.title}</h2> */}
      {postsjsx || "Loading..."}
    </div>
  );
}
