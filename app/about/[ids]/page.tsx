"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  
  return <div>Hello ids {id}</div>;
}
