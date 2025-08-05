# 🎬 Movie Info & Streaming Search (Personal Use)

This is a simple personal-use web project that allows you to:

- 🔍 Search for a movie by name
- 📝 Display its basic details (title, year, plot, poster) using the **OMDb API**
- ▶️ Stream the movie via **Vidsrc**, based on its IMDb ID

> ⚠️ This project is for **personal and educational purposes only**. Streaming content via Vidsrc may violate copyright laws and should **not be used in public or commercial projects**.

---

## 📦 How It Works

- The user types a movie name into an input field.
- The app fetches data from the [OMDb API](http://www.omdbapi.com/) using the title.
- If found:
  - Displays the poster and plot using OMDb data.
  - Embeds a streaming player via `vidsrc.to` using the movie's IMDb ID.

---

## 🛠️ Technologies Used

- HTML
- JavaScript
- [OMDb API](https://www.omdbapi.com/)
- Vidsrc iframe embeds (unofficial)

---

## 🔐 API Keys

- The OMDb API key used here is `24a875a1` (demo/testing key).
- For personal long-term use, [get your own free API key here](https://www.omdbapi.com/apikey.aspx).

---

## 🚫 Disclaimer

> This project includes embedded streaming via a third-party provider (Vidsrc) which **may not be legally authorized** to distribute this content. Do **not** use this for public or production deployments.

This is for **learning purposes only**.

---

## 📸 Example Usage

```js
search(); // Gets movie info and poster
play();   // Loads video player with movie stream via Vidsrc
