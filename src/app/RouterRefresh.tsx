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
        className="self-start"
        onClick={() => {
          router.refresh();
          setTimeout(() => setChanged(true), 250);
        }}
      >
        Click me to refresh router
      </button>
      {changed ? <Link href="/page2">Now go to page 2</Link> : null}
    </div>
  );
};
