# How to make changes to the site later

## File structure

```
genroku-grill/
├── index.html          ← Home page (unique content)
├── our-story.html      ← Our Story (unique content)
├── catering.html       ← Catering (unique content)
├── contact.html        ← Contact (unique content)
├── header.html         ← Shared nav. Change once, applies everywhere
├── footer.html         ← Shared footer
├── info-band.html      ← Shared hours/find-us/contact
├── styles.css          ← All visual styling (colors, fonts, layout)
├── includes.js         ← Tiny script that loads shared parts into pages
└── images/             ← Drop any photos you upload directly here
```

The big idea: anything that should be the same on every page lives in its own `.html` file in the root (header.html, footer.html, info-band.html). Anything unique to a page lives in that page's main HTML file.

## To edit a file on GitHub

1. Open your repo on GitHub
2. Click the file → click the pencil icon
3. Make your change → scroll down → **Commit changes**
4. Wait ~30 seconds → refresh the live site

If you mess something up, every file has full version history under the **History** button. You can always revert.

---

## Common edits

### Update phone, hours, or address

These appear on every page through the **info band** partial. Edit `info-band.html` once and every page updates. Same for the **footer** (`footer.html`) for social links and the copyright line.

The contact page has a longer hours block in its main body. That one's specific to that page, so you'd edit it directly in `contact.html`.

### Add a new page (e.g. Press, Events, Gift Cards)

This is what the partials system was built for. Three steps:

**1. Copy an existing page as a starting point.** The shortest one is `our-story.html`, which is easiest to start from.

**2. Add a `data-page` attribute to the body tag**, matching the new page name:
```html
<body data-page="press">
```

**3. Add a nav link in `header.html`:**
```html
<a href="press.html" data-nav="press">Press</a>
```

That's it. The new page will have the same header, info band, and footer as everything else, and the "Press" link will be highlighted when you're on it.

### Add a new menu item to the catering page

Edit `catering.html`, find the right `<div class="tray-list">` section, and copy an existing tray block. Each tray looks like:

```html
<div class="tray">
  <div class="tray-info">
    <h3 class="tray-name">Dish Name</h3>
  </div>
  <div class="tray-price">$XX.XX</div>
</div>
```

To mark something as **Recommended**, add the `<span class="rec">` inside the name:
```html
<h3 class="tray-name">Dish Name<span class="rec">Recommended</span></h3>
```

To add a description below the name:
```html
<div class="tray-info">
  <h3 class="tray-name">Dish Name</h3>
  <p class="tray-meta">Short description goes here.</p>
</div>
```

### Swap a featured dish on the homepage

In `index.html`, find the section starting with `<!-- FEATURED DISHES -->`. Each dish looks like this:

```html
<a href="https://www.genrokusushigrill.com/online-ordering" class="dish">
  <div class="dish-img"><img src="..." alt="..." /></div>
  <h3 class="dish-name">Dish name</h3>
  <p class="dish-desc">Short description</p>
</a>
```

To swap one:
- Change the `src="..."` to a new image URL (right-click any image on your Wix order page → "Copy image address")
- Change `alt="..."` to describe the new dish (for screen readers and SEO)
- Change the name and description

### Change a photo

The easiest way: upload it to your Wix media library, copy the image URL from there, and use it in any HTML file. Wix's CDN is fast and free.

If you'd rather host directly on GitHub:
1. In GitHub, open the `images` folder → **Add file** → **Upload files**
2. Drag in your photo
3. Reference it in HTML as `images/your-photo.jpg`

### Change the colors

Open `styles.css`. Top of the file:

```css
:root {
  --paper: #F5F1E8;        /* warm off-white background */
  --paper-warm: #EAE3D2;   /* slightly darker warm cream */
  --ink: #1C2A4F;          /* deep indigo for text and buttons */
  --ink-soft: #3D4660;     /* softer indigo for body text */
  --ink-mute: #5D6B8A;     /* muted indigo for less important text */
  --gold: #C8A951;         /* gold accent (small caps, dot in logo) */
}
```

Change those hex codes and the whole site re-themes instantly. Just keep enough contrast or text becomes hard to read.

### Update the founding year or anniversary

Search for `1996` and `thirty years` and `Three decades` across all files. Year is mentioned on the home page hero, our-story page hero, and inside the our-story prose.

### Update social media links

Edit `footer.html` once. Both Instagram and Facebook links live there.

The Contact page also has a "Follow along" block with social buttons. Edit `contact.html` for that one.

---

## Important note about previewing locally

Because of how the partials system works (using JavaScript fetch), **double-clicking an HTML file to open it in a browser won't work for previewing**. The browser blocks `file://` protocol from loading partial files.

Two ways to preview:

**Option 1: Just push to GitHub.** GitHub Pages updates in ~30 seconds. Easiest.

**Option 2: Run a tiny local server.** If you have Python installed, open Terminal in the project folder and run:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser. Press Ctrl+C to stop.

If you have VS Code, the **Live Server** extension does the same thing with one click.

---

## What to AVOID changing

Some things are structural. Changing them can break the layout or partials system:

- The `data-include="..."` attributes on placeholder divs
- The `data-page="..."` attribute on the `<body>` tag (unless you're renaming a page everywhere)
- The `data-nav="..."` attributes on nav links
- Class names (`class="..."`), which connect HTML to CSS
- The `<!DOCTYPE html>` line at the top of every file

If you're not sure whether a change is safe, push it to a separate branch first or test locally before committing to main.

---

## When to call for help

Anything beyond simple text/photo/color edits. For example:
- Building a contact form that emails you
- Adding an Instagram feed widget
- Custom page animations
- A blog section

These need real HTML/CSS/JS work. Reach out, or hire a freelance developer for an hour.

---

## Backup plan

GitHub keeps every version of every file forever. If you ever break the site:

1. Open the broken file in GitHub
2. Click **History**
3. Find a version that worked
4. Click the **...** menu on that version → **Revert this commit**

Or message me. I'd rather fix it in 5 minutes than have you spend an hour stressed.
