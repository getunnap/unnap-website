#!/usr/bin/env bash
# Add GitHub remote and push (UNNAP website in its own repo).
# Usage: ./push-to-github.sh https://github.com/YOUR-USERNAME/unnap-website.git
set -e
cd "$(dirname "$0")"
if [ -z "$1" ]; then
  echo "Usage: $0 <repo-url>"
  echo "Example: $0 https://github.com/yourusername/unnap-website.git"
  exit 1
fi
URL="$1"
if git remote get-url origin 2>/dev/null; then
  echo "Remote 'origin' already set. To replace it run:"
  echo "  git remote remove origin"
  exit 1
fi
git remote add origin "$URL"
echo "Pushing main to origin..."
git push -u origin main
echo "Done. UNNAP website is now in $URL"
