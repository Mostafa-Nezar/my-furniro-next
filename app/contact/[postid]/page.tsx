import React, { Suspense } from "react";
import PostTitle from "./PostTitle";

export default async function PostDetailsPage({ params }) {
  const postid = params.postid;

  return (
    <>
      <h1>test</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <PostTitle postid={postid} />
      </Suspense>
    </>
  );
}
