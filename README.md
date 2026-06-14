# 🌟 Tiara Clianta Andiwi — Portfolio Website

> Clean & Modern portfolio built with pure HTML, CSS, and JavaScript.  
> Auto-deployed to **GitHub Pages** via CI/CD pipeline (GitHub Actions).

---

## 🚀 Live Site

**[https://your-username.github.io/portfolio](https://your-username.github.io/portfolio)**

---

## 📁 Project Structure

```
tiara-portfolio/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css          # All styles
│   └── js/
│       └── main.js            # All interactivity
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD pipeline
└── README.md
```

---

## ⚡ Features

- ✅ Custom animated cursor
- ✅ Smooth scroll with active nav highlight
- ✅ Scroll-triggered reveal animations
- ✅ Animated skill bars
- ✅ Counter animation for stats
- ✅ Typing effect on hero tagline
- ✅ Parallax blob background
- ✅ Floating cards on hero
- ✅ Timeline for organizations
- ✅ Contact form with feedback
- ✅ Fully responsive (mobile-first)
- ✅ Reduced-motion accessible

---

## 🛠️ Technology

| Layer | Tech |
|-------|------|
| Structure | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Interactivity | Vanilla JavaScript (ES6+) |
| Fonts | Plus Jakarta Sans + DM Mono (Google Fonts) |
| Deployment | GitHub Pages via GitHub Actions |

---

## 📋 Step-by-Step: Deploy to GitHub Pages

### Prerequisites
- GitHub account
- Git installed on your computer

---

### Step 1 — Create GitHub Repository

1. Go to [github.com](https://github.com) → **New repository**
2. Name it **`portfolio`** (or any name you like)
3. Set to **Public**
4. **Do NOT** initialize with README (we'll push our own)
5. Click **Create repository**

---

### Step 2 — Initialize & Push Code

Open Terminal (or Git Bash) in your project folder:

```bash
# Navigate to your portfolio folder
cd tiara-portfolio

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "🎉 Initial portfolio launch"

# Connect to your GitHub repo (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git

# Push to main branch
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, choose **GitHub Actions**
4. Click **Save**

---

### Step 4 — Trigger the Pipeline

The pipeline runs automatically on every push to `main`.  
You can also trigger it manually:

1. Go to your repo → **Actions** tab
2. Select **"Deploy Portfolio to GitHub Pages"**
3. Click **"Run workflow"** → **"Run workflow"**

Wait ~1-2 minutes, then your site will be live at:  
`https://YOUR-USERNAME.github.io/portfolio`

---

### Step 5 — Verify It's Live

1. Go to **Actions** tab → you should see a green ✅ checkmark
2. Click the deployment → find the live URL
3. Share it with the world! 🎉

---

## 🔄 How CI/CD Works

```
You edit code locally
        ↓
git add . && git commit -m "update" && git push
        ↓
GitHub detects push to main
        ↓
GitHub Actions runs deploy.yml:
  1. Validates files exist
  2. Builds artifact
  3. Deploys to GitHub Pages
        ↓
Live site updates in ~60 seconds ✨
```

---

## 📝 How to Update Your Portfolio

```bash
# Make your changes to any file, then:
git add .
git commit -m "✨ Update projects section"
git push
```

That's it! GitHub Actions will automatically redeploy. You can watch the progress in the **Actions** tab.

---

## 🎨 Customization Guide

### Change your info
Edit `index.html` — look for:
- Name: `Tiara Clianta Andiwi`
- Email: `tiara.clianta@gmail.com`
- GitHub: `github.com/tiaraclianta`
- LinkedIn: `linkedin.com/in/tiara-clianta`

### Add a project
Find the `projects-grid` div in `index.html` and copy one `project-card` block.

### Change colors
Edit `assets/css/style.css` — look for the `:root` block at the top. Main colors:
- `--c-teal: #2BBFB0` → main accent
- `--c-violet: #9B7FEA` → secondary accent
- `--c-coral: #FF7B6B` → fun accent

---

## 🤝 License

MIT — feel free to use as a template!

---

*Built with ❤️ and a lot of coffee ☕ by Tiara Clianta Andiwi*
