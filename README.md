# Genroku Grill website

The new genrokugrill.com. A static, free-to-host marketing site that links to your existing Wix order page.

## What's in here

```
genroku-grill/
├── index.html              # Home page
├── our-story.html          # Our Story
├── catering.html           # Catering
├── contact.html            # Contact + map
├── header.html             # Shared nav. Edit once, applies everywhere
├── footer.html             # Shared footer
├── info-band.html          # Shared hours/find-us/contact box
├── styles.css              # All styling (colors, fonts, layout)
├── includes.js             # Loads shared parts into pages
├── CNAME                   # Tells GitHub which domain to use
├── images/                 # Empty for now. For any photos you upload directly
├── DEPLOY.md               # ⭐ Read this first. How to put the site online
└── EDITING.md              # How to change things later
```

## What to do next

1. Open **DEPLOY.md** and follow the steps. It walks you through everything: GitHub account setup, uploading the files, turning on free hosting, pointing genrokugrill.com at it, and editing the Wix side.

2. Once you're live, **EDITING.md** explains how to make changes whenever you want.

## Architecture in plain words

- **genrokugrill.com** (this site) → marketing pages, beautiful, free hosting on GitHub
- **genrokusushigrill.com/online-ordering** → Wix's order page, untouched
- The "Order online" button on every page links to the Wix order page
- The Wix order page logo links back to genrokugrill.com
- Customers move between the two sites without noticing they're different systems

## Photos

The site currently uses photos hosted on Wix's CDN (the same images that already appear on your Wix menu). They'll load fine for visitors. If you want to swap them out later, see EDITING.md.

## Cost

- GitHub Pages hosting: $0
- Cloudflare DNS: $0
- SSL certificate (HTTPS): $0
- Domain: ~$12/year (already paid)
- Wix subscription (for the order page): your existing rate, unchanged

Total new cost to run this site: **$0/month.**

## Questions

If something breaks, looks wrong, or you want to make a bigger change, message me. Most things are easy fixes.
