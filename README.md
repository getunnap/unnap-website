# UNNAP website

Shopify theme for **unnap.com** (store: `bv7nba-i0.myshopify.com`). This repo contains only the website/theme — separate from any UNNAP app or other projects.

---

## Setup & workflow

| Task | Command / doc |
|------|----------------|
| Connect store, pull theme | [**SHOPIFY-SETUP.md**](SHOPIFY-SETUP.md) |
| Pull latest theme from Shopify | `./pull-theme.sh` |
| Preview changes | `shopify theme dev` |
| Push changes to store | `shopify theme push --store=bv7nba-i0.myshopify.com` |
| Push this repo to GitHub | `./push-to-github.sh https://github.com/YOUR-USERNAME/unnap-website.git` |

---

## Repo structure (by pages & features)

### 1. Pages (templates)

Each page type is defined by a **template** in `templates/`. The JSON files list which sections appear on that page.

| Page | URL (example) | Template file | Main sections |
|------|----------------|---------------|----------------|
| **Home** | `/` | `templates/index.json` | hero, custom-liquid, section, media-with-content, ss-modal-popup-3, accordion |
| **Product** | `/products/...` | `templates/product.json` | product-information, product-recommendations, media-with-content, accordion |
| **Collection** | `/collections/...` | `templates/collection.json` | section (heading), main-collection (filters + product grid) |
| **Cart** | `/cart` | `templates/cart.json` | main-cart, product-list |
| **Blog** | `/blogs/...` | `templates/blog.json` | main-blog |
| **Article** | `/blogs/.../...` | `templates/article.json` | main-blog-post |
| **Generic page** | `/pages/...` | `templates/page.json` | main-page |
| **Contact** | `/pages/contact` | `templates/page.contact.json` | section, contact-form |
| **Search** | `/search` | `templates/search.json` | search-header, search-results |
| **All collections** | `/collections` | `templates/list-collections.json` | main-collection-list |
| **404** | (not found) | `templates/404.json` | main-404, product-list |
| **Password** | (pre-launch) | `templates/password.json` | password |
| **Gift card** | `/products/gift-card` | `templates/gift_card.liquid` | (liquid) |

---

### 2. Layout (global)

Wraps every page. Edit these to change site-wide header, footer, and base HTML.

| Purpose | File |
|--------|------|
| Main layout (HTML shell, header/footer inclusion) | `layout/theme.liquid` |
| Password / coming-soon page layout | `layout/password.liquid` |

---

### 3. Header & footer (global sections)

| Feature | Section file | Notes |
|--------|--------------|--------|
| **Header** (logo, nav, cart, search) | `sections/header.liquid` | Group config: `sections/header-group.json` |
| **Announcement bar** | `sections/header-announcements.liquid` | |
| **Footer** | `sections/footer.liquid` | Group config: `sections/footer-group.json` |

---

### 4. Reusable sections (content blocks)

Used on multiple pages (e.g. home, product). Section logic and schema live here; content is in the template JSON.

| Section | File | Typical use |
|--------|------|-------------|
| **Hero** | `sections/hero.liquid` | Home hero with text + CTA |
| **Slideshow** | `sections/slideshow.liquid` | Image/carousel slides |
| **Media with content** | `sections/media-with-content.liquid` | Image/video + text side-by-side |
| **Featured product** | `sections/featured-product.liquid` | Single product highlight |
| **Product list** | `sections/product-list.liquid` | Grid of products (e.g. cart upsell, 404) |
| **Product recommendations** | `sections/product-recommendations.liquid` | “You may also like” on product page |
| **Collection list** | `sections/collection-list.liquid` | List/grid of collections |
| **Collection links** | `sections/collection-links.liquid` | Links to collections |
| **Marquee** | `sections/marquee.liquid` | Scrolling text/banner |
| **Divider** | `sections/divider.liquid` | Spacer/line |
| **Custom Liquid** | `sections/custom-liquid.liquid` | Raw Liquid/HTML |
| **Modal popup** | `sections/ss-modal-popup-3.liquid` | Newsletter / promo popup |
| **Generic section** | `sections/section.liquid` | Flexible section with blocks (text, buttons, groups, etc.) |
| **Predictive search** | `sections/predictive-search.liquid` | Search dropdown results |
| **Search header** | `sections/search-header.liquid` | Search page title + input |
| **Search results** | `sections/search-results.liquid` | Search results layout |
| **Password** | `sections/password.liquid` | Pre-launch password page |
| **404** | `sections/main-404.liquid` | Not found page |
| **Main cart** | `sections/main-cart.liquid` | Cart page content |
| **Main collection** | `sections/main-collection.liquid` | Collection page (filters + grid) |
| **Main blog** | `sections/main-blog.liquid` | Blog listing |
| **Main blog post** | `sections/main-blog-post.liquid` | Article page |
| **Main page** | `sections/main-page.liquid` | Generic page content |
| **Main collection list** | `sections/main-collection-list.liquid` | All collections page |
| **Product information** | `sections/product-information.liquid` | Product page main block (media, form, buy buttons) |

---

### 5. Blocks (theme building blocks)

Small, reusable pieces used inside sections (e.g. text, button, image, product card). Prefixed with `_` are “internal” building blocks.

| Location | Purpose |
|----------|---------|
| `blocks/*.liquid` | Buttons, images, text, accordions, product cards, cart blocks, menu, logo, video, etc. |

Examples: `blocks/button.liquid`, `blocks/image.liquid`, `blocks/accordion.liquid`, `blocks/product-card.liquid`, `blocks/_product-card-gallery.liquid`, `blocks/contact-form.liquid`, `blocks/email-signup.liquid`.

---

### 6. Snippets (shared Liquid partials)

Reusable chunks included by layout, sections, and blocks (e.g. icons, product card markup, cart drawer, header menu).

| Location | Purpose |
|----------|---------|
| `snippets/*.liquid` | Icons, buttons, product card, cart drawer, header/footer bits, search, localization, media, pricing, etc. |

Examples: `snippets/header-menu.liquid`, `snippets/cart-drawer.liquid`, `snippets/product-card.liquid`, `snippets/icon.liquid`, `snippets/predictive-search.liquid`.

---

### 7. Assets (JS, CSS, icons)

| Type | Location | Purpose |
|------|----------|---------|
| **JavaScript** | `assets/*.js` | Cart, header, search, product form, facets, slideshow, marquee, etc. |
| **CSS** | `assets/base.css`, `assets/*.css` | Theme styles |
| **Icons** | `assets/icon-*.svg` | UI icons (cart, menu, close, etc.) |

---

### 8. Config & locales

| Location | Purpose |
|----------|---------|
| `config/settings_schema.json` | Theme settings (colors, typography, etc.) |
| `config/settings_data.json` | Current theme settings (can be edited in Shopify admin) |
| `locales/*.json` | Translations and schema labels (e.g. `en.default.json`) |

---

## Quick reference

- **Change what appears on a page:** edit the corresponding `templates/*.json` (section order and block content) or use the Shopify theme editor.
- **Change how a section looks/behaves:** edit `sections/*.liquid` and, if needed, `blocks/*.liquid` and `snippets/*.liquid`.
- **Change site-wide chrome:** edit `layout/theme.liquid` and `sections/header.liquid` / `sections/footer.liquid`.
- **Change styles/scripts:** edit `assets/base.css` and `assets/*.js`.

See [SHOPIFY-SETUP.md](SHOPIFY-SETUP.md) for store connection, theme pull/push, and troubleshooting.
