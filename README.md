# Visualiser Demos

 https://srg774.github.io/Tilted-Realms/

Here's a **README.md** tailored specifically for your **Sequential Visualizations** project:

---

# 🎞️ Sequential Visualizations

An interactive viewer for presenting a sequence of embedded HTML visualizations inside a sleek, responsive fullscreen interface. Designed for showcasing visual storytelling, data progression, or step-by-step demos.

---

## 📦 Features

* Fullscreen **iframe** display for clean, immersive presentation
* Neon-glow **"Next"** button for intuitive navigation
* Cycles through multiple visualizations (`viz.html`, `viz1.html`, `viz2.html`, etc.)
* Mobile-friendly, responsive design
* Custom favicon and social media meta tags included

---

## 🚀 Getting Started

### 1. **Project Structure**

```
/your-project-folder
│
├── index.html         # Main visualizer
├── viz.html           # First visualization
├── viz1.html          # Second visualization
├── viz2.html          # Third visualization
├── abc.png            # Favicon and Open Graph image
```

> 💡 You can add more visualizations by extending the `visualizations` array in the JavaScript.

---

### 2. **Usage**

Open `index.html` in any modern browser. The first visualization loads automatically. Click the **→** button in the bottom-right corner to advance through the sequence. After the final visualization, it loops back to the beginning.

---

### 3. **Customizing Visuals**

* **Button Style**: Located in the CSS under `#nextButton`. You can customize color, glow effect, or even replace with an icon.
* **Dark Theme**: Easily switch background/text colors in the `<style>` block to match your branding or use case.
* **Meta Tags**: Update the Open Graph and Twitter meta tags in the `<head>` to control how the page looks when shared.

---

## 🌐 SEO & Sharing

This page is ready for social media previews:

* Includes Open Graph and Twitter card support
* Add your own domain in the meta tag:

  ```html
  <meta property="og:url" content="https://yourdomain.com">
  ```

---

## 🧠 Notes

* The iframe height is fixed to `100vh`, which avoids scrollbars and ensures visual focus.
* JavaScript ensures looping behavior when all visualizations have been viewed.

---

## 📋 TODO (Optional Enhancements)

* Add "Previous" button for backward navigation
* Keyboard shortcuts for navigating slides
* Slide transition animations
* Preload iframe content for smoother transitions
* Loading spinner while switching

