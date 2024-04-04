import { headers } from "next/headers";
import Script from "next/script";

export default function Page() {
  const nonce = headers().get("x-nonce")!;

  console.log("nonce in page 2", nonce);

  return <Script src="/script.js" nonce={nonce} />;
}
