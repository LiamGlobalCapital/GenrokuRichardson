# Deploy

You've done GitHub Pages before, so this is the short version.

## Files to push

```
index.html              ← page-specific content
our-story.html          ← page-specific content
catering.html           ← page-specific content
contact.html            ← page-specific content
header.html             ← shared nav (edit once, applies everywhere)
footer.html             ← shared footer
info-band.html          ← shared hours/find-us/contact
styles.css              ← all styling
includes.js             ← loads shared partials into pages
images/                 ← (empty for now, drop direct-uploaded photos here)
CNAME                   ← already set to genrokugrill.com
README.md
EDITING.md
DEPLOY.md
```

The `CNAME` file is already populated with `genrokugrill.com`. Push everything to a public repo, enable Pages from `main` / root, and you're hosted.

**Important:** The site uses a partials system where the header/footer load via JavaScript. This works perfectly on GitHub Pages but will NOT work if you double-click an HTML file locally (browsers block `file://` fetches). To preview locally, run `python3 -m http.server 8000` in the project folder.

## DNS for genrokugrill.com

Standard GitHub Pages apex + www setup. At your DNS provider (Cloudflare or wherever), set:

```
Type   Name   Value
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    <your-github-username>.github.io
```

If you're on Cloudflare, set the proxy to **DNS only** (gray cloud) for the initial setup so GitHub can issue the SSL cert. You can flip the proxy on later once HTTPS is working.

In the repo's **Settings → Pages**, set the custom domain to `genrokugrill.com` and check "Enforce HTTPS" once DNS has propagated.

## Two Wix edits

The new site links into your existing Wix order page. To make the seam invisible, two edits on the Wix side:

**1. Logo on the Wix order page.** Point it at the new domain.
- Wix editor → Online Ordering page → click the Genroku logo
- Change the link to `https://genrokugrill.com`
- Save and publish

**2. Wix order page nav.** Either hide it on the order page (cleanest), or update the links to point to the new site:
- Home → `https://genrokugrill.com`
- Our Story → `https://genrokugrill.com/our-story.html`
- Catering → `https://genrokugrill.com/catering.html`
- Contact → `https://genrokugrill.com/contact.html`

## Optional: redirect the old Wix homepage

So `genrokusushigrill.com` (homepage) auto-redirects to `genrokugrill.com`, while `/online-ordering` keeps working as-is. In Wix:

- Edit the Home page → strip its content
- Add an Embed HTML / Custom Code block with:

```html
<script>
  if (window.location.pathname === '/' || window.location.pathname === '/home') {
    window.location.replace('https://genrokugrill.com');
  }
</script>
```

Save and publish. Skippable if you'd rather leave both homepages live.

## What's already done

- `CNAME` populated with `genrokugrill.com`
- All Wix order/menu links pointed to `https://www.genrokusushigrill.com/online-ordering` and `/menu-1`
- Instagram links → `instagram.com/genrokurichardson`
- Facebook link → existing `Genroku-Sushi-and-Grill-109987643539` page
- Catering page populated from your PDF (real prices, recommended dishes flagged)
- ezCater button → `ezcater.com/catering/genroku-sushi-and-grill-3`
- Address includes suite #8 across all pages
- Founding year: 1996 / "thirty years"

## What to verify before pushing

- The map embed on `contact.html` uses approximate coordinates. After deploying, replace it with an exact Google Maps embed (Maps → search the restaurant → Share → Embed a map → swap the iframe).
- The hero photo currently uses the boneless basil chicken shot from your menu. If you want a different signature shot, swap the `src` in `index.html` (search for `hero-image`).
