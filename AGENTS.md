# AGENTS.md

## Cursor Cloud specific instructions

This is a **static HTML/CSS/JS academic project page** for the RE-VLM paper (CVPR 2026). There is no build step or package manager.

### Running locally
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

### Deployment
GitHub Pages is deployed via `.github/workflows/deploy.yml` (GitHub Actions). It triggers on every push to `main`. The user must enable **GitHub Pages** in repo Settings → Pages → Source: **GitHub Actions** for the workflow to work.

### Key files
- `index.html` — single-page project site
- `static/css/style.css` — all styling
- `static/js/main.js` — BibTeX copy, scroll animations
- `static/images/` — place paper figures here (PNG/JPG/WebP)

### Notes
- No linter or test framework is configured; validation is visual (open in browser).
- All external resources (Google Fonts, Font Awesome) are loaded via CDN — network access is required for full rendering.
