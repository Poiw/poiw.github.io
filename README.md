# Personal Page Structure

Open `index.html` directly in a browser to view the page.

## Where To Edit

- `data/site-data.js`: profile text, bio, publications, projects, experience, misc.
- `data/assets/`: migrated local assets such as profile image, CV, paper PDFs, citations, and thumbnails.
- `MODP/` and `ExtraSS/`: local copies of the project pages linked from publications.
- `styles/theme.css`: Miku color palette, fonts, shared color variables.
- `styles/base.css`: page reset, image background, body background, base typography.
- `styles/layout.css`: sidebar, main content width, section spacing.
- `styles/components.css`: profile links, publication/project rows, buttons, timeline, misc text.
- `styles/responsive.css`: mobile and tablet layout changes.
- `scripts/render.js`: turns the data into HTML. You usually do not need to edit this.

## Optional Buttons

For each publication or project in `data/site-data.js`, edit the `buttons` array.
Remove a button object to hide it, or add one to show another link.

Example:

```js
buttons: [
  { label: "Website", href: "#", icon: "website" },
  { label: "PDF", href: "#" },
  { label: "Code", href: "#" }
]
```

## Text Links

Bio paragraphs can mix plain strings and links:

```js
[
  "Advised by ",
  { text: "Prof. Ling-Qi Yan", href: "https://sites.cs.ucsb.edu/~lingqi/" },
  "."
]
```

Publication and project authors can be either plain strings or linked objects:

```js
authors: [
  { text: "Songyin Wu", href: "index.html" },
  "Coauthor Without Link",
  { text: "Ling-Qi Yan", href: "https://sites.cs.ucsb.edu/~lingqi/" }
]
```

## Background Image

The page uses `data/background.png` as a subtle fixed background.
To make it stronger or weaker, edit `opacity` in `body::before` inside
`styles/base.css`.
