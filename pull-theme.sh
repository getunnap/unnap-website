#!/usr/bin/env bash
# Run this AFTER you've logged in with: shopify auth login
# Store: set SHOPIFY_STORE to your real .myshopify.com domain if different (e.g. my-store.myshopify.com)
set -e
cd "$(dirname "$0")"
STORE="${SHOPIFY_STORE:-bv7nba-i0.myshopify.com}"
echo "Store: $STORE"
echo "Listing themes..."
shopify theme list --store="$STORE"
echo ""
echo "Pulling live theme into this folder..."
shopify theme pull --store="$STORE"
echo "Done. Your theme files are in this folder."
