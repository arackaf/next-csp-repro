import builder from "content-security-policy-builder";

const isDev = process.env.NODE_ENV === "development";

// implements the recommended CSP
// @see https://backstage.spotify.net/docs/default/component/web/security/csp/#for-web-applications-rendered-on-the-server-ssr-and-or-uncached-statically-generated-web-applications-ssg
export function createCSP({ nonce }: { nonce: string }) {
  return builder({
    directives: {
      "object-src": ["'none'"],
      "script-src": [
        "self",
        `'nonce-${nonce}'`,
        "'strict-dynamic'",
        "https:", // next.js uses eval for sourcemaps in dev
        ...(isDev ? ["'unsafe-eval'"] : []),
      ],
    },
  });
}
