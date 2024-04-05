"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

export const RouterRefresh: FC<{}> = () => {
  const router = useRouter();
  const [changed, setChanged] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <button
        className="border-white text-white p-3 bg-slate-500 self-start"
        onClick={() => {
          router.refresh();
          setTimeout(() => setChanged(true), 250);
        }}
      >
        Click me to refresh router
      </button>
      <Link className="text-blue-700" href="/page2">
        Go to page 2
      </Link>
    </div>
  );
};
