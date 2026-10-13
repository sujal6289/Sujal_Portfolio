# Sujal Anant Supekar — Personal Portfolio

A modern, high-performance personal portfolio website built with **React**, **Vite**, and **Tailwind CSS** for **Sujal Anant Supekar** (Electronics & Computer Technology undergraduate at PICT Pune).

---

## 🚀 Live Demo & Repository
- **GitHub**: [https://github.com/sujal6289](https://github.com/sujal6289)
- **LinkedIn**: [https://www.linkedin.com/in/sujal-supekar-121981339/](https://www.linkedin.com/in/sujal-supekar-121981339/)
- **LeetCode**: [https://leetcode.com/u/sujalsupekar/](https://leetcode.com/u/sujalsupekar/)
- **CodeChef**: [https://www.codechef.com/users/sujal6289](https://www.codechef.com/users/sujal6289)
- **Codeforces**: [https://codeforces.com/profile/sujal_supekar](https://codeforces.com/profile/sujal_supekar)

---

## ✨ Features

- **Sophisticated Dark & Light Themes**: Dark-mode first design with glassmorphism, glowing accents, and smooth theme switching.
- **Hero Section**: Eyebrow highlight, headline, dynamic code/systems terminal widget, download resume CTA, and live coding profile badges.
- **About & Education**: Clean narrative detailing academic background at PICT Pune (8.83 CGPA), HSC, and SSC milestones with an elegant timeline.
- **Categorized Skills**: Clean grouped cards for Programming Languages, Backend Technologies, Relational Databases, Cloud, Cybersecurity, and Core CS.
- **Featured Projects Showcase**:
  - *Bunk Buddy — Smart Attendance Optimizer* (Node.js, Express.js, PostgreSQL, pg, JWT, REST APIs)
  - *AI Classroom Assistant* (Python, Whisper, NLP, Speech Recognition)
  - Full execution pipeline workflows and direct GitHub source buttons.
- **Campus Experience & Leadership**: Verified roles as UHV Head, Class Representative, and INC Management Team at PICT.
- **Competitive Milestones**: 3-Star CodeChef, Pupil Codeforces, 1000+ Algorithmic Problems, 1st Prize Avishkar AlgoBid, and Top 5 HACK-O-BIT finalist.
- **Resume Download**: Downloadable PDF linked directly from `public/Sujal-Supekar-Resume.pdf`.
- **Get in Touch**: Direct email (`mailto:`) with clipboard copy, telephone (`tel:`) with copy, interactive message composer, and location badges.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans & JetBrains Mono (via Google Fonts)

---

## 💻 Local Development Setup

### 1. Prerequisites
Ensure you have Node.js (v18+) and npm installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/`.

### 4. Build for Production
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
S_protfolio/
├── public/
│   ├── favicon.svg               # Vector brand monogram favicon
│   └── Sujal-Supekar-Resume.pdf  # Downloadable verified resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Floating header with theme toggle & resume CTA
│   │   ├── Hero.jsx              # Hero banner with terminal architecture widget
│   │   ├── About.jsx             # Personal narrative & key metric highlights
│   │   ├── Education.jsx         # Academic timeline (PICT, HSC, SSC)
│   │   ├── Skills.jsx            # Grouped tech competencies & badges
│   │   ├── Projects.jsx          # Project showcase with pipeline diagrams
│   │   ├── Experience.jsx        # PICT campus leadership & responsibilities
│   │   ├── Achievements.jsx      # Competitive programming & hackathon honors
│   │   ├── Certifications.jsx    # Modular credentials container (extensible)
│   │   ├── Contact.jsx           # Direct contact cards & mail composer
│   │   └── Footer.jsx            # Footer with quick links & back-to-top
│   ├── data/
│   │   └── portfolioData.js      # Central source-of-truth data store
│   ├── App.jsx                   # Main layout container
│   ├── index.css                 # Tailwind directives & design tokens
│   └── main.jsx                  # React entry point
├── vercel.json                   # Vercel deployment & routing config
├── tailwind.config.js            # Custom color palette & typography tokens
├── postcss.config.js             # PostCSS plugins
└── package.json                  # Dependencies and scripts
```

---

## 🚀 How to Push to GitHub & Deploy to Vercel

### Step 1: Initialize Git and Commit
```bash
git init
git add .
git commit -m "feat: complete personal portfolio for Sujal Anant Supekar"
```

### Step 2: Push to GitHub
1. Create a new repository on [GitHub](https://github.com/new) named `sujal-portfolio` (or your preferred name).
2. Link your remote repository and push:
```bash
git branch -M main
git remote add origin https://github.com/sujal6289/sujal-portfolio.git
git push -u origin main
```

### Step 3: Deploy to Vercel
1. Go to [Vercel](https://vercel.com/) and sign in with GitHub.
2. Click **Add New...** -> **Project**.
3. Select your `sujal-portfolio` repository.
4. Keep the default build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.
Your website will be live in seconds with HTTPS and automatic deployments on future commits!
