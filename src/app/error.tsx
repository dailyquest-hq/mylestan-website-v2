"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // intentionally suppressed — no error monitoring configured
  }, [error]);

  return (
    <main id="main-content" className="bg-[#0f100a] min-h-dvh w-full flex flex-col items-center justify-center px-5 text-white text-center">
      <div className="flex flex-col items-center gap-8 max-w-xl">
        <p className="font-poppins text-[#ed5128] text-sm font-semibold uppercase tracking-widest">Something went wrong</p>
        <h1 className="font-darker font-semibold text-[64px] md:text-[100px] leading-none">Error</h1>
        <p className="font-inter text-[#9f9f9f] text-lg leading-relaxed">
          An unexpected error occurred. Try refreshing the page or return home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button
            onClick={reset}
            className="bg-[#ed5128] hover:bg-[#d9401b] text-white h-12 px-8 font-bold rounded-none uppercase"
          >
            Try Again
          </Button>
          <Link href="/">
            <Button className="border-2 border-white bg-transparent hover:bg-white hover:text-[#0f100a] text-white h-12 px-8 font-bold rounded-none uppercase">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
