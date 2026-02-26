# 📏 Standards: Sovereign Life OS Website

Acestea sunt regulile tehnice obligatorii pentru dezvoltarea și menținerea site-ului.

## 🛠️ Tech Stack (Actual)

### **Framework & Core**
- **Framework:** [Astro 5.17.1](https://astro.build/) - Static Site Generation
- **Styling:** [Tailwind CSS 4.1.18](https://tailwindcss.com/) - Utility-first CSS framework
- **Build Tool:** Vite
- **Package Manager:** npm
- **Internationalization:** Astro i18n (Romanian & English)

### **Development Standards**
- **Components:** Astro Components (`.astro`) with TypeScript frontmatter
- **Styling Approach:** Tailwind utility classes + custom CSS in `src/styles/`
- **State Management:** Component props and Astro islands pattern
- **Type Safety:** TypeScript recommended for complex logic

## 🏛️ Architecture Principles

### **Component Structure**
```astro
---
// Frontmatter: Imports, props, logic
import type { Props } from './types';
const { prop1, prop2 } = Astro.props;
---

<!-- Template: Semantic HTML with Tailwind classes -->
<main class="container mx-auto px-4">
  <!-- Content -->
</main>

<style>
/* Custom styles only when Tailwind can't handle it */
.custom-class {
  /* ... */
}
</style>
```

### **File Organization**
```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layout components  
├── pages/         # Route components
├── styles/        # Global styles and Tailwind config
└── utils/         # Helper functions and utilities
```

### **Performance Requirements**
- ✅ **Lighthouse Performance:** > 90 (Mobile & Desktop)
- ✅ **First Contentful Paint:** < 1.5 seconds
- ✅ **Cumulative Layout Shift:** < 0.1
- ✅ **Time to Interactive:** < 3.5 seconds
- ✅ **Bundle Size:** < 150KB initial load

## 📝 Naming Conventions

### **Files & Directories**
- **Components:** `PascalCase.astro` (e.g., `HeroSection.astro`)
- **Pages:** `kebab-case.astro` (e.g., `about-us.astro`)
- **Utilities:** `camelCase.ts` (e.g., `formatDate.ts`)
- **Styles:** `kebab-case.css` (e.g., `global.css`)

### **CSS/Tailwind Classes**
- **Utility Classes:** Use Tailwind classes directly
- **Custom Classes:** Use descriptive names with BEM-like structure
- **Component Scoped:** Prefer scoped styles in component `<style>` blocks

### **Variables & Functions**
- **Constants:** `UPPER_SNAKE_CASE`
- **Variables:** `camelCase`
- **Functions:** `camelCase` with verb prefix (e.g., `formatDate`, `calculateTotal`)
- **Types/Interfaces:** `PascalCase` with `Type` suffix (e.g., `UserData`)

## 🎨 Design System Standards

### **Color Palette**
- **Primary Gradient:** `text-gradient-sovereign` (emerald-300 → blue-500)
- **Backgrounds:** Dark theme with subtle gradients
- **Text Colors:** Consistent contrast ratios (> 4.5:1)
- **Status Colors:** Semantic colors for success/warning/error

### **Typography**
- **Headings:** Use `.heading-xl`, `.heading-lg`, `.heading-md` utility classes
- **Body Text:** System fonts with optimal line-height and spacing
- **Responsive:** Fluid typography with clamp() where appropriate

### **Spacing & Layout**
- **Consistent Units:** Use Tailwind spacing scale (0.25rem increments)
- **Responsive Grid:** Tailwind grid utilities with mobile-first approach
- **Container Width:** `max-w-7xl` for content, `max-w-screen-2xl` for full width

## 🔒 Security & Privacy

### **Privacy First**
- ❌ **No Third-party Trackers:** Google Analytics, Facebook Pixel, etc.
- ❌ **No External Fonts:** System fonts only (no Google Fonts, Typekit, etc.)
- ✅ **Local Assets:** All images, fonts, and scripts hosted locally
- ✅ **Privacy-focused Analytics:** Self-hosted or privacy-respecting alternatives

### **Security Practices**
- **Environment Variables:** Use `.env` files for sensitive data
- **Dependency Audit:** Regular `npm audit` and dependency updates
- **Input Validation:** Validate all user inputs on client and server
- **HTTPS Enforcement:** Always use HTTPS in production

### **Code Security**
- **No Hardcoded Secrets:** API keys, passwords, or tokens
- **Dependency Scanning:** Use tools like `npm audit` or Snyk
- **Regular Updates:** Keep all dependencies updated to latest secure versions

## 🔧 Development Workflow

### **Git Commit Convention**
```
feat: add new feature
fix: bug fix
docs: documentation changes
style: code formatting
refactor: code restructuring
test: add or update tests
chore: maintenance tasks
```

### **Code Review Checklist**
- [ ] Follows project standards and conventions
- [ ] No performance regressions
- [ ] Accessibility requirements met
- [ ] Responsive design tested
- [ ] Internationalization considered
- [ ] Security implications reviewed

### **Testing Requirements**
- **Unit Tests:** For complex utilities and functions
- **Component Tests:** For interactive components
- **E2E Tests:** For critical user flows
- **Performance Tests:** Regular Lighthouse audits

## 🌍 Internationalization (i18n)

### **Implementation Standards**
- **Default Locale:** Romanian (ro)
- **Supported Locales:** Romanian (ro), English (en)
- **Routing Strategy:** Prefix-based (`/en/about`, `/ro/despre`)
- **Content Structure:** Separate directories for each locale

### **Translation Management**
- **Keys:** Use descriptive keys with context
- **Plurals:** Handle plural forms correctly
- **Formatting:** Use locale-aware date/number formatting
- **RTL:** Consider right-to-left languages for future expansion

## 📊 Quality Assurance

### **Automated Checks**
- **Code Formatting:** Prettier configuration
- **Linting:** ESLint for TypeScript/JavaScript
- **Type Checking:** TypeScript strict mode
- **Build Validation:** CI/CD pipeline checks

### **Manual Testing**
- **Cross-browser:** Chrome, Firefox, Safari, Edge
- **Cross-device:** Mobile, tablet, desktop
- **Accessibility:** Screen readers, keyboard navigation
- **Performance:** Real device testing

---

*Aceste standards sunt obligatorii pentru toate contribuțiile la proiect. Excepțiile trebuie aprobate de architect.*
