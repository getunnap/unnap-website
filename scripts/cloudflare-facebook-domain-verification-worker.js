/**
 * Meta "HTML file" domain verification on Shopify + Cloudflare:
 * Shopify cannot serve arbitrary paths at the storefront root with HTTP 200.
 * Meta also rejects redirects to another host (e.g. cdn.shopify.com).
 *
 * Deploy this as a Cloudflare Worker and attach a route ONLY for this path, e.g.:
 *   unnap.com/fl56jr3kcj1op1yiyz8h0xier7xian.html
 * Other requests pass through to your origin (Shopify) unchanged.
 *
 * Body must match Meta's downloaded file byte-for-byte (no trailing newline).
 */
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/fl56jr3kcj1op1yiyz8h0xier7xian.html') {
      return new Response('fl56jr3kcj1op1yiyz8h0xier7xian', {
        headers: {
          'content-type': 'text/html; charset=utf-8',
          'cache-control': 'public, max-age=3600',
        },
      });
    }
    return fetch(request);
  },
};
