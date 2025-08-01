# Static Resource Dashboard

This repository hosts a static dashboard with pages for resources, events
and FAQs. Everything is bundled as plain HTML, CSS and JavaScript so no
backend is required.

## Viewing the pages

Open `index.html` in your web browser to start browsing. You can simply
double‑click the file or serve the folder with any static file server.
Other pages such as `events.html`, `faq.html` and `glossary.html` may also
be opened directly.


# Dashboard

This project uses [Prettier](https://prettier.io/) to keep code formatting consistent.

## Formatting

Run Prettier before committing changes:

```bash
npx prettier --write .
```

Prettier is configured to use 2 spaces for indentation and omit semicolons.

## Viewing the dashboard

Prerequisites: Python 3 or Node.js.

The HTML files in this repo are static. You can open them directly in a browser, but it’s easier to run a local server. If you have Python installed, run:

```bash
python3 -m http.server
```

Then navigate to `http://localhost:8000` and open `index.html`.

If you prefer Node.js, install `serve` and run `npx serve`.

