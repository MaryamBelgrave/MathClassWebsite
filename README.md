# Mrs. Barbee's Math

The class website for 5th and 6th grade math at Pan American Academy Charter School. It runs on GitHub Pages and works in English and Spanish.

You only ever edit **content.js**. Everything else draws itself from that file.

## What's in the folder

| File | What it does |
| --- | --- |
| `content.js` | All the words, dates, and links. **This is the file you edit.** |
| `index.html` | The page frame. Don't edit. |
| `app.js` | Builds each page from content.js. Don't edit. |
| `styles.css` | Colors, fonts, and layout. |
| `404.html` | Shows up if someone types a wrong address. |
| `favicon.svg` | The little icon in the browser tab. |
| `.nojekyll` | Tells GitHub to serve the files as they are. Leave it alone, even though it's empty. |
| `images/` | Photos for the store and the puzzle. Keep each one under 200 KB. |

## Publish on GitHub Pages

1. Sign in at github.com. Click **+** (top right), then **New repository**.
2. Name it something short, like `math`. Choose **Public**. Click **Create repository**.
3. On the next screen, click **uploading an existing file**.
4. Drag in every file and the `images` folder. To see `.nojekyll` on a Mac, press Cmd + Shift + period in the Finder window.
5. Click **Commit changes**.
6. Go to **Settings**, then **Pages** (left side).
7. Under **Branch**, pick `main` and `/ (root)`. Click **Save**.
8. Wait about two minutes and refresh. GitHub shows your address, like `https://yourname.github.io/math/`.
9. Open it on your phone and check both languages.

## Weekly update routine

1. Open your repository on github.com and click `content.js`.
2. Click the pencil icon (Edit).
3. Update `announcements`: add this week's notes at the top and delete the old ones.
4. Add next week's `homework` for each grade.
5. Change the `puzzle`.
6. Check the `store` items: flip `inStock` to `true` or `false`.
7. Change `lastUpdated` to today's date.
8. Click **Commit changes**.
9. Wait a minute, then open the site to check it.

If the site goes blank after an edit, a comma or a quote is missing. Click **History** on content.js to see what changed and fix that line.

## Common edits

**Dates** are always `"YYYY-MM-DD"`. October 5, 2026 is `"2026-10-05"`.
**Times** are 24-hour `"HH:MM"`. 1:45 PM is `"13:45"`.
**Links** you don't have yet stay as `""`. The site shows "Coming soon" instead of a broken link.

### Add a homework assignment

Find `homework:` inside the right grade (`"5"` or `"6"`) and add one line:

```js
{ due: "2026-10-20", title: { en: "Lesson 8 practice", es: "Práctica de la lección 8" }, link: "" },
```

It appears under **Due soon** on the home page during the 7 days before it's due, then disappears on its own.

### Add a store item

Find `items:` inside `store` and add one line:

```js
{ name: { en: "Glitter pen", es: "Pluma con brillantina" }, price: 15, category: "supplies", inStock: true, image: "", alt: "" },
```

- `category` must be `"supplies"`, `"privileges"`, or `"treats"`.
- For a photo, upload it to the `images` folder, then use `image: "images/glitter-pen.jpg"` and describe it in `alt: { en: "...", es: "..." }`. No photos of students.

### Add a new module

Find `modules:` inside the right grade. Copy a whole module block, from its `{` to its matching `},`, and paste it after the last one. Then change:

- `number`, `title`, `start`, `end`
- `bigIdea` and `vocab`
- `assessments`: `{ date: "...", title: { en: "...", es: "..." } }`
- `topics`: leave as `[]` until you're ready. The Help page will say "Coming soon".

The site works out "You are here" from the dates. You never mark it by hand.

### Add a topic to Homework help

Copy one topic block from 5th grade Module 2 and change the text. Each topic has `letter`, `title`, `bigIdea`, `vocab`, `example` (problem, steps, answer), and `video`, `slides`, `family` links. Anything you leave blank is hidden.

## Swap the fonts

In `content.js`, near the top, change one letter:

```js
fontPairing: "A",
```

- `"A"`: Fraunces headings, Atkinson Hyperlegible Next body (the default)
- `"B"`: Bricolage Grotesque headings, Lexend body
- `"C"`: Recursive (casual) headings, Atkinson Hyperlegible Next body

All three use Shantell Sans for your handwritten notes. The font settings live in `styles.css` under "Font pairings" if you ever want to adjust one.

## Preview another day

To check the schedule or "Due soon" for a different day and time, add this to the end of the address (before any `#`):

```
?date=2026-10-06&time=09:30
```

Example: `https://yourname.github.io/math/?date=2026-10-06&time=09:30#schedule`

## Before you go live

Search `content.js` for these words and fix each one:

- **PLACEHOLDER**: your real details (email, school info, Classroom links, sections, bell times, store currency)
- **SAMPLE**: sample data to replace or delete
- **TODO(es)**: Spanish to double-check with a Spanish-speaking colleague
- **TODO**: Eureka Math² names and links to confirm

## Privacy

This site is public. Never add student names, photos, grades, or individual schedules. Sections only (like 5-201). The site has no cookies, no analytics, and no forms. It saves the grade, class section, and language a visitor picked on their own device only. If you need to collect something, link to a school Google Form.
