# 🔍 StatSleuth

A daily sports player guessing game for MLB, NBA, and NFL — like Wordle, but for stats.

## Files
- `config.js` — **Edit this every day** with the player + clues
- `mlb.html` / `nba.html` / `nfl.html` — The three game pages
- `shared.css` — All shared styles
- `game.js` — Game engine (no need to edit)
- `index.html` — Redirects to MLB by default

---

## 🚀 How to Host Free on GitHub Pages

1. Create a free account at [github.com](https://github.com)
2. Click **New Repository** — name it `statsleuth`, set it to **Public**
3. Upload all these files to the repo
4. Go to **Settings → Pages**
5. Under "Source" select **Deploy from a branch → main → / (root)**
6. Hit Save — your site will be live at:
   `https://YOUR-USERNAME.github.io/statsleuth/`

---

## 📅 Daily Update Instructions

Each day, open `config.js` and update the three sport blocks:

```js
mlb: {
  answer: "Player Full Name",
  clues: [
    { label: "Year",              value: "2021" },
    { label: "Batting Average",   value: ".312" },
    { label: "Position / Throws", value: "1B / Right" },
    { label: "League",            value: "National League" },
    { label: "Team",              value: "Atlanta Braves" }
  ],
  players: [ /* your full player list */ ]
}
```

After editing, re-upload `config.js` to GitHub and the site updates automatically.

---

## Eligibility Rules
- ⚾ **MLB**: Minimum 100 PA in the clue year
- 🏈 **NFL**: Minimum 6 Games Played in the clue year
- 🏀 **NBA**: Minimum 25 Games Played in the clue year

---

## Share Format
```
🔍 StatSleuth ⚾ MLB — March 5
🟥🟥🟩

Got it in 3/5!
Play: statsleuth.com/mlb
```
