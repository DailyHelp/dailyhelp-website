import type { NextConfig } from "next";

// Security headers applied to every response. These are defence-in-depth
// hardening measures for a public marketing site that renders no untrusted
// HTML and performs no file uploads.
const securityHeaders = [
  // Force HTTPS for two years, including subdomains.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Never let the browser MIME-sniff a response into an executable type.
  // If a stray non-asset file is ever served from /public it is treated as
  // its declared type, not guessed into script/HTML.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Disallow framing to prevent clickjacking.
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Drop access to powerful browser features the site does not use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Restrictive CSP. The site loads its own assets, inline styles/fonts and
  // talks to the DailyHelp API; nothing else is permitted.
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "script-src 'self' 'unsafe-inline'",
      "connect-src 'self' https://api.dailyhelpint.org",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  // Do not advertise the framework/version to attackers.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
