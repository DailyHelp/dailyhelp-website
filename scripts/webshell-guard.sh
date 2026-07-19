#!/usr/bin/env bash
#
# webshell-guard.sh
#
# This is a Next.js application. It contains NO server-side scripting files
# (PHP, JSP, ASP, CGI, ...) and has no file-upload feature. The presence of any
# such file in the source tree means either a mistaken commit or an injected
# webshell (see incident: public/36582TDN.php). Either way it must never be
# built or deployed.
#
# Fails (exit 1) if any disallowed script file is found in the working tree,
# ignoring dependency and VCS directories. Portable across GNU (CI) and BSD
# (macOS) find.

set -euo pipefail

# Case-insensitive extensions that must never appear in this repo / artifact.
DISALLOWED_REGEX='\.(php|php[0-9]|phtml|pht|phps|jsp|jspx|asp|aspx|cgi|pl)$'

matches="$(
  find . \
    \( -path ./node_modules -o -path ./.git -o -path ./.next -o -path ./out \) -prune -o \
    -type f -print \
  | grep -iE "${DISALLOWED_REGEX}" || true
)"

if [ -n "${matches}" ]; then
  echo "::error::Disallowed server-side script file(s) detected — possible webshell. Deploy blocked."
  echo "${matches}"
  exit 1
fi

echo "webshell-guard: OK — no server-side script files present."
