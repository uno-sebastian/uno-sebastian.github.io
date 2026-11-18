# uno-sebastian.github.io

Personal portfolio of Sebastian Echeverry: Software Engineer, Unity · XR · Real-Time 3D.
Live at **https://uno-sebastian.github.io/**

A plain HTML/CSS/JS site with no build step and no dependencies.

## Updating the content

All text, links and images come from **[`content.js`](content.js)**. Edit that one file to:

- add a job → copy an entry in `experience` (newest first)
- add a featured piece → copy an entry in `work` (the first two are shown larger)
- add a side project → copy an entry in `projects`
- change skills, education, stats, links or the intro

Inside text, `**bold**` makes bold text and `[label](https://...)` makes a link.
Images go in `assets/img/`. A work item's `media` can be:

| Field | Shows |
|---|---|
| `image` | A 16:9 picture |
| `image` + `video` (a Vimeo id) | The picture with a play button; the video opens in the page |
| `icon` | A square app icon on a colored background |
| `glyph` | A drawn cover: `traffic`, `chart`, `vr` or `app` |

## Previewing locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

then visit http://localhost:8000.

## Publishing

Every push to `main` deploys through [`.github/workflows/pages.yml`](.github/workflows/pages.yml).
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Files

```
index.html           Page structure
content.js           All site content  ← edit this
assets/js/main.js    Renders content.js into the page, theme toggle, video player, hero animation
assets/css/style.css Styles (light and dark themes)
assets/img/          Images and favicon
404.html             Not-found page
```
