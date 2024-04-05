import { Suspense } from "react";
import RenderScript from "./RenderScript";

export default function Page() {
  return (
    <>
      <span>Page 2</span>
      <Suspense fallback={<span className="text-blue">Loading...</span>}>
        <RenderScript />
      </Suspense>
    </>
  );
}
