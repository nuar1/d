# YourBrand Property Management – One Page

Single-file, responsive landing page modeled on a modern property management site. All content is original and easily customizable.

## Run

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8080 --directory /workspace
```

Then visit `http://localhost:8080`.

## Customize

- Site name: edit the brand text in `index.html` header and footer.
- Colors/spacing: tweak CSS variables in `assets/css/styles.css` under `:root`.
- Pricing/locations/services: update relevant sections in `index.html`.
- Forms: they currently open an email via `mailto:`. Replace with your backend endpoint if desired.

## Files

- `index.html` – markup and sections
- `assets/css/styles.css` – styles and layout
- `assets/js/script.js` – interactivity (nav, scroll, carousel, sticky CTA)
