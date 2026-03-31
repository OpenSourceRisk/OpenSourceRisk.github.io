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

### Push to GitHub
1. Create a new repo under [github.com/OpenSourceRisk](https://github.com/OpenSourceRisk)
2. In the repo settings, enable **Pages → Source: GitHub Actions**
3. Run:
   ```bash
   git remote add origin https://github.com/OpenSourceRisk/<repo-name>.git
   git push -u origin main
   ```

### DNS cutover and old server shutdown
- Update DNS A records (see table above) to point `www.opensourcerisk.org` to GitHub Pages
- Verify the site is live, then decommission the old WordPress server

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
