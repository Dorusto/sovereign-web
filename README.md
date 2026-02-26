# Sovereign Life OS - Website

**Your life. Your data. Your rules.**

Un sistem personal pentru a-ți organiza viața digitală, complet privat. Transformă-ți casa într-un ecosistem inteligent și privat, fără compromisuri.

## 🚀 Project Overview

Sovereign Life OS este o platformă care consolidează toate serviciile tale digitale într-un singur sistem local:
- 🏛️ **Majordomul Financiar** - Buget, investiții, facturi
- 🧠 **Majordomul Sănătății** - Fitness, nutriție, wellness
- 🏠 **Home Assistant** - Automatizări case, control local
- 🛡️ **Majordomul Digital** - Backup, media, documente

## 🏗️ Project Structure

```
/
├── public/                 # Static assets (images, fonts, etc.)
├── src/
│   ├── components/        # Reusable Astro components
│   │   ├── CTA.astro
│   │   ├── FAQ.astro
│   │   ├── FinanceAI.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeroSection.astro
│   │   ├── MasterCategories.astro
│   │   └── ... (15+ components)
│   ├── layouts/           # Layout components
│   │   └── Layout.astro
│   ├── pages/             # Astro pages/routes
│   │   ├── index.astro    # Main landing page
│   │   └── en/           # English localized pages
│   └── styles/           # Global styles
│       └── global.css    # Tailwind imports & custom styles
├── astro.config.mjs      # Astro configuration
├── package.json          # Dependencies & scripts
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework:** [Astro 5.17.1](https://astro.build/) - Static Site Generation
- **Styling:** [Tailwind CSS 4.1.18](https://tailwindcss.com/) - Utility-first CSS
- **Internationalization:** Astro i18n (Romanian & English)
- **Build Tool:** Vite
- **Package Manager:** npm

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🌍 Internationalization

The site supports two languages:
- **Romanian (ro)** - Default locale
- **English (en)** - Available at `/en/` routes

## 🎨 Design System

- **Primary Gradient:** `text-gradient-sovereign` (emerald-300 → blue-500)
- **Typography:** Custom utility classes (`.heading-xl`, `.heading-lg`, `.text-subtitle`)
- **Color Palette:** Focus on emerald, blue, cyan, purple with variants
- **Spacing:** Consistent padding/margin system using Tailwind
- **Effects:** Backdrop blur, gradients, smooth hover animations

## 🔧 Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sovereign-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:4321`

## 📈 Performance Goals

- ✅ Lighthouse Performance > 90
- ✅ Accessibility Score > 95  
- ✅ SEO Score > 90
- ✅ First Contentful Paint < 1.5s
- ✅ Cumulative Layout Shift < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 👥 Team (Februarie 2026)

- **Architect:** [Your Name]
- **Mentor:** AI Assistant
- **Developer:** Aider (Claude Sonnet)

## 📞 Contact

For inquiries about the Sovereign Life OS project, please contact the project architect.

---

*Built with privacy, performance, and sovereignty in mind.*
