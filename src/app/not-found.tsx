import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="bg-[#0f100a] min-h-screen w-full overflow-x-hidden flex items-center justify-center px-5">
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center gap-8">

        {/* 404 Number */}
        <h1 className="font-darker font-semibold text-[120px] sm:text-[160px] md:text-[200px] leading-none text-[#ed5128]">
          404
        </h1>

        {/* Message */}
        <div className="flex flex-col gap-4">
          <h2 className="font-darker font-semibold text-4xl md:text-5xl text-white">
            Page Not Found
          </h2>
          <p className="font-poppins text-[#9f9f9f] text-base md:text-lg max-w-md">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link href="/">
            <Button className="bg-[#ed5128] hover:bg-[#d9401b] text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide">
              Go Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-[#ed5128] text-[#ed5128] hover:bg-[#ed5128] hover:text-white rounded-none h-12 px-8 font-bold uppercase tracking-wide">
              Contact Us
            </Button>
          </Link>
        </div>

      </div>
    </main>
  );
}
