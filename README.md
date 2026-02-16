# Video Editor Portfolio

A dark cinematic portfolio website showcasing video editing work with inline YouTube embeds.

## 🎬 Features

- **Dark Cinematic Design**: Netflix-inspired aesthetic with subtle animations
- **Inline Video Player**: Click thumbnails to watch videos without leaving the page
- **Filterable Work Grid**: Sort projects by YouTube, Client Work, or Personal
- **Responsive Layout**: Looks great on desktop, tablet, and mobile
- **Smooth Animations**: Elegant transitions and hover effects
- **Contact Form**: Ready for integration with form services

## 🚀 Setup Instructions

### 1. Install Dependencies
```bash
cd video-portfolio
npm install
```

### 2. Customize Content

Edit the following files:

**Hero Section** (`src/components/Hero.jsx`):
- Replace `YOUR NAME` with your name
- Add your showreel YouTube video ID

**Work Section** (`src/components/Work.jsx`):
- Update the `projects` array with your actual videos
- Replace video IDs and thumbnails
- Add your project descriptions

**About Section** (`src/components/About.jsx`):
- Update your bio and stats
- Modify the tools list

**Contact Section** (`src/components/Contact.jsx`):
- Add your email and social links
- Optional: Integrate with Formspree or EmailJS for working contact form

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

## 📦 Deployment to GitHub Pages

### Step 1: Update Vite Config
In `vite.config.js`, change the `base` to your GitHub repo name:
```javascript
base: '/your-repo-name/',
```

### Step 2: Create GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 3: Deploy
```bash
npm run deploy
```

This will build your site and push it to the `gh-pages` branch.

### Step 4: Enable GitHub Pages
1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select the `gh-pages` branch
4. Save and wait a few minutes

Your portfolio will be live at: `https://yourusername.github.io/your-repo-name/`

## 🎨 Customization Tips

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --bg-primary: #0a0a0a;
  --accent-red: #ff0000; /* Change to your brand color */
  /* ... */
}
```

### Fonts
The portfolio uses:
- **Bebas Neue** for headers (bold, cinematic)
- **Outfit** for body text (clean, readable)

Change fonts in `index.html` and update CSS font-family values.

### Add More Sections
Create new components in `src/components/` and import them in `App.jsx`.

## 🔧 Optional Enhancements

### Add Form Backend
Integrate with:
- [Formspree](https://formspree.io/) (free tier available)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)

### Add Analytics
```bash
npm install react-ga4
```

### Add Smooth Scroll Library
```bash
npm install react-scroll
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

Free to use and modify for your portfolio!

---

**Pro Tips:**
- Use high-quality thumbnails (1920x1080)
- Keep video descriptions concise
- Update your work regularly
- Test on mobile devices
- Compress images for faster load times
