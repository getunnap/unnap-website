# Connect your Shopify store to this folder (Cursor)

This guide walks you through connecting your **existing Shopify website** to this folder so you can edit your theme in Cursor and push changes to your store.

---

## Quick start for UNNAP (unnap.com)

**Store:** This project is set up for **bv7nba-i0.myshopify.com** (unnap.com). To use a different store, run `export SHOPIFY_STORE=other-store.myshopify.com` before `./pull-theme.sh`.

1. **Log in once** (opens browser; pick your store if asked):
   ```bash
   shopify auth login
   ```
2. **Pull your theme** into this folder:
   ```bash
   ./pull-theme.sh
   ```
   (Uses `bv7nba-i0.myshopify.com` by default.)

Use **Cursor’s integrated terminal** (View → Terminal) or Mac Terminal; run both from the `UNNAP website` folder.

---

## Push to GitHub (separate from app / other projects)

Keep the UNNAP **website** (this theme) in its own repo, separate from any app or other code.

1. **Create a new repo on GitHub**  
   Go to [github.com/new](https://github.com/new).  
   - **Repository name:** e.g. `unnap-website` or `unnap-shopify-theme`  
   - **Visibility:** Private or Public (your choice)  
   - **Do not** add a README, .gitignore, or license – this folder already has content.  
   Click **Create repository**.

2. **Connect this folder and push**  
   GitHub will show a “push an existing repository” snippet. From the `UNNAP website` folder run (replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with yours):

   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

   Or use the script (same folder):

   ```bash
   ./push-to-github.sh https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```

   After that, this project is the only thing in that repo – separate from any app or other repos.

---

### "Shop is currently unavailable" or wrong store

Your live site is **unnap.com**, but Shopify’s backend uses a **permanent** `.myshopify.com` address, which might not be `unnap.myshopify.com`.

**Find the correct store URL:**

1. Go to **https://admin.shopify.com** and log in with your store owner account.
2. You’ll see your store(s). Click your store name or open it.
3. Check the browser URL: it will look like `https://admin.shopify.com/store/***YOUR-STORE-NAME***`. That `YOUR-STORE-NAME` is your permanent store (use it as `YOUR-STORE-NAME.myshopify.com`).
4. Or go to **Settings → Domains** in the left sidebar; the `.myshopify.com` domain is listed there (e.g. `something.myshopify.com`).

Use that exact `.myshopify.com` address everywhere (e.g. in `pull-theme.sh` and in `--store=...`).

### "You are not authorized to use the CLI to develop in the provided store"

1. **Log in to the store in the browser first**  
   Open **https://admin.shopify.com**, log in, and open your store. The CLI expects you to have used the Shopify admin for this store at least once.

2. **Use the right account**  
   You must be the **store owner** or a **staff member** with permission to edit themes. If you’re staff, the store owner must give you access (e.g. “Theme” or “Full access”) in **Settings → Users and permissions**.

3. **Re-login to the CLI and pick this store**  
   ```bash
   shopify auth logout
   shopify auth login
   ```  
   When the browser opens, choose **bv7nba-i0** (unnap). Then run `./pull-theme.sh` again.

---

## How it works (short version)

- **Shopify CLI** runs on your machine and talks to your store. It can **pull** your current theme into this folder and **push** changes back.
- This folder becomes your **local theme** (Liquid, CSS, JS, assets). You edit here; CLI syncs with Shopify.
- **Git** is optional but recommended (backups, history, rollbacks). Shopify does **not** require Git.

---

## Step 1: Install Shopify CLI

You need the Shopify CLI to connect this folder to your store.

**Option A – Homebrew (macOS, recommended):**
```bash
brew tap shopify/shopify
brew install shopify-cli
```

**Option B – npm:**
```bash
npm install -g @shopify/cli @shopify/theme
```

Check it worked:
```bash
shopify version
```

---

## Step 2: Log in to your store

From this folder (or any folder), run:

```bash
shopify auth login --store YOUR-STORE.myshopify.com
```

Replace `YOUR-STORE` with your actual store name (for UNNAP: `bv7nba-i0.myshopify.com`).

- A browser window will open so you can log in and approve access.
- After that, the CLI is “connected” to that store for future commands.

---

## Step 3: Pull your current theme into this folder

**In Terminal, go to this project folder:**

```bash
cd "/Users/tomdoe/UNNAP website"
```

**List themes on your store** (to get the theme ID you want):

```bash
shopify theme list
```

You’ll see something like:
- **Live** theme (what customers see)
- **Unpublished** themes (development/staging)

**Pull the theme you want to edit** (usually the live one, or a duplicate):

```bash
# Pull the live theme
shopify theme pull

# Or pull a specific theme by ID (from theme list)
shopify theme pull --theme THEME_ID
```

After this, this folder will be filled with your theme files (e.g. `layout/`, `templates/`, `sections/`, `assets/`, `config/`, etc.).

---

## Step 4: Work in Cursor and push changes

- Open **this folder** in Cursor (File → Open Folder → `UNNAP website`).
- Edit Liquid, CSS, JS, and assets as needed.
- When you want to send changes to Shopify:

```bash
# Push all changes to the theme you pulled from (or specify --theme)
shopify theme push
```

- To **preview** your theme live against your store (without publishing):

```bash
shopify theme dev
```

This starts a local dev server and gives you a preview URL that uses your real store data.

---

## Do you need Git?

**No** – Shopify doesn’t require Git. The connection is: **this folder + Shopify CLI + your store**.

**Yes (recommended)** – Git gives you:

- Version history and easy rollbacks
- A backup of your theme
- Option to use GitHub/GitLab and deploy via CI later

**To add Git here (optional):**

```bash
cd "/Users/tomdoe/UNNAP website"
git init
```

Then add a `.gitignore` so you don’t commit secrets or OS files. For example, ignore:

- `.env` (if you use env vars for API keys)
- `.shopify/` (local CLI state, if present)
- `.DS_Store`

Example:

```bash
echo ".env\n.shopify\n.DS_Store" >> .gitignore
git add .
git commit -m "Initial theme from Shopify"
```

You can later create a repo on GitHub/GitLab and push this folder there.

---

## Test landing page (new home page)

A **test landing page** template is set up so you can try new home-page changes without affecting the live site.

1. **Template file:** `templates/page.landing-test.json` (same layout as the home page).
2. **Create the page in Shopify Admin:**
   - Go to **Online Store → Pages → Add page**.
   - **Title:** e.g. "Test landing" or "Home (test)".
   - **Theme template:** choose **"landing-test"** (from the "Theme template" dropdown).
   - Save. The page will be at `yoursite.com/pages/test-landing` (or whatever handle you set).
3. **Push the theme** (if you haven’t already): `shopify theme push`.
4. Edit `templates/page.landing-test.json` for test changes; when happy, copy those changes into `templates/index.json` to go live.

---

## Quick reference

| Goal                         | Command / action                          |
|-----------------------------|-------------------------------------------|
| Log in to store             | `shopify auth login --store STORE.myshopify.com` |
| List themes                 | `shopify theme list`                      |
| Pull theme into this folder | `shopify theme pull` (or `--theme ID`)    |
| Preview theme (dev server)  | `shopify theme dev`                       |
| Push changes to Shopify     | `shopify theme push`                      |
| Optional: version control   | `git init` + `.gitignore` + commit        |

---

## Summary order of operations

1. Install **Shopify CLI** (Step 1).
2. **Log in**: `shopify auth login --store YOUR-STORE.myshopify.com` (Step 2).
3. **cd** into this folder, then **pull** your theme: `shopify theme pull` (Step 3).
4. Open this folder in **Cursor** and edit; use `shopify theme push` or `shopify theme dev` as needed (Step 4).
5. Optionally run **git init** and add a `.gitignore` for backups and history.

Once your theme is pulled, this folder is “connected” to your store through the CLI—no extra connection step inside Cursor. If you want, next we can add a minimal `.gitignore` and a one-line “cheat sheet” file in this repo for you to copy-paste commands from.
