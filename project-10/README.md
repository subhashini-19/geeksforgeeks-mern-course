# Photon Lab – Browser-based Image Editor ✨

Photon Lab is a browser-based image editing tool built using **HTML5 Canvas, Vanilla JavaScript, and CSS**. It allows users to upload an image, apply real-time visual adjustments, and download the edited image directly from the browser.

This project focuses on **core frontend fundamentals** such as DOM manipulation, canvas rendering, state handling, and responsive UI design — without using any external libraries.

---

[Demo link](https://photo-lab-eight.vercel.app/)

## 🚀 Features

* Upload images from local device
* Real-time image adjustments using sliders

  * Brightness
  * Contrast
  * Saturation
  * Blur
* One-click effects

  * Grayscale
  * Sepia (toggle)
* Reset all filters to default
* Download edited image as PNG
* Responsive layout
* No third-party libraries

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling & layout
* **JavaScript (ES6)** – Logic & interactivity
* **HTML5 Canvas API** – Image rendering & filters

---

## 📸 How It Works

1. User uploads an image using the file input
2. Image is drawn on the canvas
3. Sliders update canvas filters in real time using `ctx.filter`
4. Effects like grayscale and sepia are applied via filter manipulation
5. The edited image can be downloaded using `canvas.toDataURL()`

---

## 📂 Project Structure

```
photon-lab/
│
├── index.html      # Markup
├── style.css       # Styling
├── script.js       # Application logic
└── README.md       # Project documentation
```

---

## 💡 Key Learnings

* Working with HTML5 Canvas
* Real-time image manipulation
* Managing UI state without frameworks
* Handling file uploads in the browser
* Performance-conscious re-rendering
* Building interactive UI with Vanilla JS

---


