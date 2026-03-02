# UNNAP Landing Page – Images & Icons

The landing page (template **landing-test**) now has **defaults in place** so visuals show without manual uploads.

## What’s already set up

- **Header logo**: Uses theme asset `unnap-logo.svg` (UNNAP wordmark) when no logo image/URL is set.
- **Hero image**: Uses store image `compressed_hero_section.png` if set in template; otherwise theme asset `unnap-hero-app.svg` (app-style phone mockup).
- **Solution image**: Uses store image `UNNAP_device_white_bg.png` if set; otherwise theme asset `unnap-solution-device.svg` (NFC device mockup).
- **Integrations**: Each integration uses theme assets `assets/unnap-int-*.png` when `logo_asset` is set (e.g. strava, oura-v3, garmin-v3, matter-v3). **Oura, Garmin, Matter**: use **PNG with transparent background** only. JPEG has no transparency, so files saved as JPEG will show a solid (e.g. black) background.
- **Competition & footer**: SVG icons (flame, zap, target, clock, dumbbell, twitter, instagram, youtube) are in `snippets/unnap-icon.liquid`.

The **exact images from the reference design** (Figma) are not in the repo; they use `figma:asset/...` and are exported from Figma. In the reference project see **EXPORT-ASSETS-FOR-SHOPIFY.md** for the asset list and how to export from Figma and upload here.

## Optional overrides

You can still replace any of these in the Theme Editor:

| Where | Override in Theme Editor |
|-------|---------------------------|
| Header | Logo image or Logo URL |
| Hero | Hero image or Hero image URL |
| Solution | Solution image or Solution image URL |
| Integrations | Per block: Logo image or Logo URL (overrides the default SVG) |
| Footer | Twitter/Instagram/YouTube URLs for social icons |

If the store doesn’t have `compressed_hero_section.png` or `UNNAP_device_white_bg.png`, those sections will fall back to their placeholders until you upload or set URLs.
