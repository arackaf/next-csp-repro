import { headers } from "next/headers";
import Script from "next/script";

export const dynamic = "force-dynamic";

export default async function RenderScript() {
  const junk = await new Promise<number>(res => {
    setTimeout(() => res(12), 1000);
  });

  const nonce = headers().get("x-nonce")!;

  console.log("nonce in page 2", nonce);

  return (
    <>
      <Script src="/script.js" strategy="afterInteractive" nonce={nonce} />
    </>
  );
}
