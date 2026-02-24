#!/usr/bin/env bash
set -euo pipefail

if rg -n "^(<<<<<<<|=======|>>>>>>>)" --glob '!node_modules/**' .; then
  echo "❌ Merge conflict markers found."
  exit 1
fi

echo "✅ No merge conflict markers found."
