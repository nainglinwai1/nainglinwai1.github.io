# 🧠 Naing Lin Wai — AI Engineer Portfolio

> **Building AI Systems That Solve Real Business Problems**
>
> Computer Vision • Edge AI • Robotics • Machine Learning

A modern, premium personal portfolio website for an AI Engineer, hosted on **GitHub Pages**. Designed to convert visitors into freelance clients with a clean, professional aesthetic inspired by OpenAI, NVIDIA, and Hugging Face.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?logo=githubpages&logoColor=white)

---

## ✨ Features

- 🎨 **Premium Design** — Dark mode by default with light mode toggle, inspired by modern AI/tech aesthetics
- 📱 **Fully Responsive** — Looks great on mobile, tablet, and desktop
- ⚡ **Lightning Fast** — Static site, no heavy frameworks, optimized for Lighthouse 95+
- 🎬 **Tasteful Animations** — Fade-in, slide-up, typing effect, floating particles, animated counters
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigable
- 🔍 **SEO Optimized** — Meta tags, Open Graph, canonical URLs
- 🖼️ **Lazy Loading** — Images load on demand for faster page speed
- 🧭 **Sticky Navigation** — Smooth scrolling with active section highlighting
- 📂 **Individual Project Pages** — 6 detailed case study pages with architecture diagrams
- 🚀 **GitHub Actions CI/CD** — Automatic deployment on push

---

## 📁 Project Structure

```
/
├── index.html                  # Main landing page
├── css/
│   └── style.css               # All styles (dark/light mode)
├── js/
│   └── main.js                 # All interactivity (vanilla JS)
├── projects/
│   ├── smart-cctv-ai.html      # Smart CCTV AI case study
│   ├── retail-analytics.html   # Retail Analytics case study
│   ├── factory-defect-detection.html
│   ├── edge-ai-deployment.html
│   ├── ai-document-assistant.html
│   └── industrial-vision.html
├── assets/
│   ├── images/                 # Your photos and images
│   └── icons/                  # Custom icons (optional)
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Any modern web browser
- A local HTTP server (optional, for best results)

### Run Locally

**Option 1: Direct open**
```bash
# Simply open index.html in your browser
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

**Option 2: Local server (recommended)**
```bash
# Using Python 3
python3 -m http.server 8000

# Or using Node.js
npx serve .

# Then visit http://localhost:8000
```

---

## 📦 Deployment to GitHub Pages

### Method 1: Automatic (Recommended)

This repo includes a GitHub Actions workflow. Just push to `main` or `master`:

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

GitHub Actions will automatically deploy to `https://<your-username>.github.io`.

### Method 2: Manual

1. Go to your repository on GitHub
2. Navigate to **Settings > Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to the configured branch

---

## 🎨 Customization Guide

### Replace Placeholder Content

1. **Your Name & Bio** — Edit `index.html`:
   - Update hero headline and description
   - Modify the About section with your background
   - Update contact email and social links

2. **Your Photo** — Replace the hero avatar placeholder:
   - Add your photo to `assets/images/`
   - Replace `<i class="fas fa-user-astronaut"></i>` with `<img src="assets/images/your-photo.jpg" alt="Your Name">`

3. **Projects** — Edit each file in `projects/`:
   - Replace placeholder descriptions with your actual project details
   - Add real architecture diagrams, screenshots, and demo videos
   - Update GitHub and live demo links

4. **Skills** — Modify skill tags in `index.html` > Skills section

5. **Services** — Customize service cards in `index.html` > Services section

6. **Testimonials** — Replace placeholder testimonials with real client feedback

### Change Colors

Edit CSS custom properties in `css/style.css`:

```css
:root {
    --color-deep-blue: #1a3a5c;
    --color-cyan-accent: #00d4ff;
    --color-electric-blue: #3b82f6;
    --bg-primary: #0a0a0f;
    /* ... more variables */
}
```

### Add Blog Posts

Add new blog cards in `index.html` > Blog section, or create a separate blog page.

---

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Fonts** | Inter, JetBrains Mono (Google Fonts) |
| **Icons** | Font Awesome 6 (CDN) |
| **Hosting** | GitHub Pages |
| **CI/CD** | GitHub Actions |
| **Dev Icons** | Devicon (CDN, for skill badges) |

**Zero npm dependencies. Zero build steps. Pure static site.**

---

## 📊 Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 2s |

---

## 📄 License

MIT License — feel free to use this template for your own portfolio.

---

## 🙋‍♂️ Questions?

Open an issue or reach out at [mechine.nlw@gmail.com](mailto:machine.nainglin@gmail.com).

---

**Built with ❤️ using HTML, CSS & Vanilla JS**
