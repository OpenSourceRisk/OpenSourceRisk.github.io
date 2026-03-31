# opensourcerisk.org — GitHub Pages

Static site migration of [opensourcerisk.org](https://www.opensourcerisk.org/) from WordPress to GitHub Pages.

## How it works

- The site is a static HTML export generated via the [Simply Static](https://wordpress.org/plugins/simply-static/) WordPress plugin.
- On every push to `main`, GitHub Actions deploys the site to GitHub Pages (see `.github/workflows/deploy.yml`).
- The custom domain `www.opensourcerisk.org` is configured via the `CNAME` file.

## DNS cutover (when ready to go live)

Point `www.opensourcerisk.org` to GitHub Pages by updating your DNS records:

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | opensourcerisk.github.io |

Once DNS has propagated and the site is confirmed live, decommission the old WordPress server.

## Testing locally

The site is plain static HTML — just serve the repo root with any local HTTP server. **Do not open `index.html` directly in a browser** (file:// breaks root-relative links like `/wp-content/...`).

**Option 1 — Python (no install needed):**
```bash
python3 -m http.server 8000
```

**Option 2 — Node.js (`npx`, no install needed):**
```bash
npx serve .
```

**Option 3 — Ruby (if you have it):**
```bash
ruby -run -e httpd . -p 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## TODO

> ⚠️ **Blocker before making the repo public or doing DNS cutover:** Two commercial Envato plugins have assets committed to this repo (`revslider` and `js_composer`). Their licenses permit use on your own site but prohibit redistribution. A public GitHub repo constitutes redistribution. Resolve both issues below before going live publicly.

---

### Push to GitHub
1. Create a new repo under [github.com/OpenSourceRisk](https://github.com/OpenSourceRisk)
2. In the repo settings, enable **Pages → Source: GitHub Actions**
3. Run:
   ```bash
   git remote add origin https://github.com/OpenSourceRisk/<repo-name>.git
   git push -u origin main
   ```

### DNS cutover and old server shutdown
- ⚠️ **Blocked by:** Resolution of the two commercial plugin issues below
- Update DNS A records (see table above) to point `www.opensourcerisk.org` to GitHub Pages
- Verify the site is live, then decommission the old WordPress server

### ⚠️ Replace Revolution Slider (`revslider`) — commercial plugin
`wp-content/plugins/revslider/` contains **1,393 files** from a commercial Envato plugin and is used in the hero slider on **930 pages**.

**What it does:** Drives the hero image carousel (`<rs-module-wrap>` / `<rs-module>` custom elements) and bundles icon fonts (Font Awesome 4.7, Material Icons, PE Icon 7 Stroke).

**Replacement path:**
1. Add [Swiper.js](https://swiperjs.com/) (MIT licence) via CDN — it's a direct functional equivalent
2. Replace `<rs-module-wrap>` / `<rs-module>` markup in page templates with Swiper's `<div class="swiper">` structure
3. Load icon fonts from their official free CDNs instead of the revslider bundle:
   - Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css`
   - Material Icons: `https://fonts.googleapis.com/icon?family=Material+Icons`
4. Delete `wp-content/plugins/revslider/` and remove its `<link>`/`<script>` tags from all pages

### ⚠️ Replace WPBakery Page Builder (`js_composer`) — commercial plugin
`wp-content/plugins/js_composer/` contains **425 files** from a commercial Envato plugin and affects **12 pages**.

**What it does:** Provides a CSS grid layout system (classes like `vc_row-fluid`, `wpb_column`, `col-md-*`) and a front-end JS file. On a static site the JS serves no purpose.

**Replacement path:**
1. Create a small shim CSS file (e.g. `wp-content/plugins/js_composer/assets/css/shim.css`) that maps WPBakery's layout classes to standard CSS grid or Bootstrap 5 equivalents — the class names on the HTML don't need to change
2. Drop `js_composer_front.min.js` entirely (it's a visual editor script, not needed on a static site)
3. Delete `wp-content/plugins/js_composer/` and update the 12 affected pages to load the shim instead

---

### Migrate large videos to external hosting
- `wp-content/uploads/2020/09/ORE_XML_Introduction_August2020.mp4` is 59MB (GitHub recommends files under 50MB)
- Upload to YouTube or Vimeo and replace the `<video>` / `<source>` tag in the relevant HTML pages with an embed

### Migrate forum (bbpress) to a hosted alternative
- Forum reply forms do not work on static hosting — the archived topics are readable but users cannot post
- Options:
  - [GitHub Discussions](https://docs.github.com/en/discussions) — free, integrates with the repo
  - [Discourse](https://www.discourse.org/) — self-hosted or hosted forum
  - Leave as read-only archive and add a notice pointing to the new forum

### Migrate contact/feedback form
- The Contact Form 7 form on `/feedback/` did not render in the static export (shows as a raw shortcode)
- Replace with a static-compatible form service:
  - [Formspree](https://formspree.io/) — easy drop-in replacement
  - [Netlify Forms](https://www.netlify.com/products/forms/) — if migrating to Netlify
  - [EmailJS](https://www.emailjs.com/) — client-side email sending
