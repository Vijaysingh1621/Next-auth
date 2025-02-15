"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return !session ? (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 ">
      <Link href="/login" className="border px-4 py-2 text-red-400 rounded sx:mt-[200px]">
        Please Login To See The Content
      </Link>
    </div>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <p className="text-green-400 border p-5 sx:mt-[200px]"> Welcome Back Buddy 😊</p>
    </div>
  );
}
