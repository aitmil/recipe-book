"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex flex-col gap-6 items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="text-lg">{error.message}</p>
        <button type="button" className="btn" onClick={() => reset()}>
          Try again
        </button>
      </body>
    </html>
  );
}
