# Zeytin Studio — Official Website

Official bilingual (Turkish / English) website for **Zeytin Studio**, an independent mobile puzzle game studio.

**Live website:** https://zeytin-studio.github.io/  
**Privacy policy:** https://zeytin-studio.github.io/gizlilik/  
**English privacy policy:** https://zeytin-studio.github.io/gizlilik/?lang=en

## Games

| Game | Genre | Status |
| --- | --- | --- |
| Renkli Oklar | Arrow puzzle | Coming soon to Google Play |
| Toplam Zinciri | Number puzzle | In development |
| Işık Yolu | Light and mirror puzzle | In development |

The website contains concept illustrations and descriptions; no unverified store links are displayed.

## Site structure

- `index.html` — bilingual homepage, game details, about, contact, SEO metadata
- `assets/style.css` — responsive light/dark theme
- `assets/site.js` — language switching and copy-email interaction
- `assets/favicon.svg` — studio icon
- `assets/social-preview.svg` — social sharing artwork (SVG)
- `gizlilik/index.html` — existing Turkish and English privacy policy
- `app-ads.txt` — existing advertising verification file
- `robots.txt` and `sitemap.xml` — search engine discovery

## Publishing

This repository is the GitHub Pages site for the **Zeytin-Studio** organization. The expected publishing source is `main` at repository root.

1. Edit the HTML/CSS/JS files and commit to `main`.
2. Confirm deployment in repository **Settings → Pages** or **Actions**.
3. Open https://zeytin-studio.github.io/ and verify both language versions and the privacy policy.

## Adding or updating a game

In `index.html`, edit the relevant `article.game` card, including its language-specific text and expandable `details.game-details` section. Update status labels only when a milestone is confirmed. Add a real Google Play link only after the store listing exists.

## Important compliance checks

- Confirm the contact address `zeytinsstudio@gmail.com` is monitored.
- Verify `app-ads.txt` contains the correct AdMob publisher identifier; it is intentionally not changed by the website refresh.
- Check that the privacy policy accurately describes the data processing and SDKs in the **actual shipped apps**. In particular, confirm any AdMob consent/UMP claims before release.
- Confirm Google Play target audience and data safety declarations match the apps.

The website refresh does **not** change the privacy policy or advertising configuration.
