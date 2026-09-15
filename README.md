# The First Academy — Student Gateway (v2)

A playful, bilingual (English / Arabic) landing page for students: pick your
grade (4–12), get a short list of vetted learning sites and skill-building
games — no shooters, no open social sandboxes like Roblox.

Redesigned to match the school's real navy-and-gold brand identity and logo,
with a one-tap EN ⇄ عربي switch (full right-to-left layout in Arabic).

## Files
- `index.html` — the homepage (header, hero, grade picker, safety cards, footer)
- `wheel.html` — **Class Spinner**: pick a random student per class with a spinning wheel
- `style.css` — all styling, using the school's brand colors (shared by both pages)
- `script.js` — homepage grade data (English + Arabic) and language switch
- `wheel.js` — Class Spinner logic and language switch

## About the Class Spinner (`wheel.html`)

- Add a class, paste a roster (one name per line), hit save — done. Names are
  stored in that browser's `localStorage` only, under the key
  `fa-spinner-classes-v1`. **They are never written into `index.html`,
  `wheel.html`, or any file in this repo** — so no student names ever end up
  in your public GitHub source.
- Because of that, the roster only exists on the device/browser where it was
  saved. If you spin from a different computer, you'll need to paste the
  roster there too (once).
- Spinning picks a random name from the class's "wheel pool." After a spin,
  you can **remove that name from the wheel** (so it won't repeat) while
  keeping it in the saved roster, or **reset the wheel** any time to bring
  everyone back in.
- Deleting a class, or the × on an individual name, removes it from
  `localStorage` permanently — there's a confirmation prompt before deleting
  a whole class.
- If a teacher ever needs to wipe everything (e.g. shared/lab computer),
  clearing the browser's site data for this page removes all saved rosters.


## Host it on GitHub Pages (free)

1. Create a new GitHub repository, e.g. `first-academy-gateway`.
2. Upload `index.html`, `wheel.html`, `style.css`, `script.js`, `wheel.js` to
   the repo root — drag-and-drop on github.com works, or:
   ```bash
   git init
   git add index.html wheel.html style.css script.js wheel.js README.md
   git commit -m "Student gateway + class spinner"
   git branch -M main
   git remote add origin https://github.com/<your-username>/first-academy-gateway.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from a branch → `main` /
   `root`** → Save.
4. Live in a minute or two at:
   `https://<your-username>.github.io/first-academy-gateway/`
5. Optional: if the school owns `firstacademy.org` (or a subdomain), add a
   `CNAME` file in the repo root with just that domain, and point DNS at
   `<your-username>.github.io`.

## About the logo and photo

The header logo and hero photo currently point at the two image links you
shared — both are Google's cached thumbnail versions, so they're small and
may not stay available long-term. Before publishing, swap them for real
files hosted in the repo:

1. Save the official logo as `assets/logo.png` (transparent background,
   at least 200×200px looks best).
2. In `index.html`, replace the `<img src="https://encrypted-tbn0...">` in
   the `.brand` block with `<img src="assets/logo.png" alt="The First
   Academy logo">`.
3. Do the same for the hero photo (`assets/hero.jpg`) in the `.hero-photo`
   block.

## Things to double-check before publishing

- **Resource lists**: everything a student sees lives in `RESOURCE_BANDS`
  at the top of `script.js`, with English and Arabic text side by side for
  each item. Add, remove, or re-grade any link there.
- **Arabic wording**: I've translated everything, but it's worth a native
  speaker's once-over before this goes live school-wide.
- **Contact email / links**: update the footer's email and the "Main
  school website" link.

## Why these particular resources

Every linked site teaches a real, transferable skill (coding, math,
language, digital literacy), and many issue a certificate or badge on
completion — good for a student portfolio. Nothing with unmoderated chat,
ad-heavy pages, or open-world social sandboxes was included.
