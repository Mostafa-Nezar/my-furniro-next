import React from "react";

export default async function PostTitle({ postid }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postid}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return <div key={1}>{post.title}</div>;
}
