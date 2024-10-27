"use client"

import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Callback(): React.ReactNode {
  const searchParams = useSearchParams();

  useEffect(() => {
  }, []);

  return (
    <div></div>
  )
}
