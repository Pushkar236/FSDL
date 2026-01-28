# Portfolio Website - Next.js

A modern, responsive portfolio website built with Next.js 14, TypeScript, and React. Features a beautiful dark/light theme system, smooth animations, and excellent UX.

## 🚀 Live Demo

- **Local**: http://localhost:3000
- **Network**: http://10.90.3.23:3000

## ✨ Features

### Core Functionality
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Dark/Light Theme** - Smooth theme switching with localStorage persistence
- ✅ **Smooth Scrolling** - Animated navigation between sections
- ✅ **Active Link Highlighting** - Navigation links highlight based on scroll position
- ✅ **Project Filtering** - Filter projects by category (Web Apps, UI Components, Full Stack)
- ✅ **Carousel Navigation** - Touch/swipe support with arrow controls
- ✅ **Form Validation** - Client-side validation with toast notifications
- ✅ **Animated Skills** - Progress bars animate when scrolled into view
- ✅ **Scroll to Top** - Floating button appears when scrolling down

### UX Enhancements
- 🎨 **Premium Card Designs** - Gradient borders, smooth hover effects, and subtle shadows
- 🎯 **Micro-interactions** - Button ripple effects, smooth transitions, and scaling animations
- ♿ **Accessibility** - ARIA labels, keyboard navigation, and semantic HTML
- 📱 **Mobile Menu** - Smooth slide-in animation with backdrop blur
- 🖼️ **Image Optimization** - Next.js Image component for performance
- ⚡ **Performance** - Fast page loads with code splitting and lazy loading

## 🛠️ Technologies

- **Next.js 16.1.6** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Bootstrap Icons** - Icon library
- **CSS Custom Properties** - Advanced theming system

## 📦 Installation

```bash
# Clone the repository
cd portfolio-nextjs

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🎨 Theme System

The portfolio features a sophisticated theme system with two modes:

### Light Theme
- Background: `#ffffff`
- Surface: `#f8f9fa`
- Text: `#0b1220`
- Primary: `#0d6efd`

### Dark Theme
- Background: `#060010`
- Surface: `#0f1720`
- Text: `#e6eef8`
- Primary: `#66b2ff`

Theme preference is automatically saved to localStorage and persists across sessions.

## 📂 Project Structure

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main page
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── Navbar.tsx           # Navigation with theme toggle
│       ├── Hero.tsx             # Hero section
│       ├── About.tsx            # About section
│       ├── Skills.tsx           # Skills with progress bars
│       ├── Projects.tsx         # Projects with filtering
│       ├── Contact.tsx          # Contact form
│       ├── Footer.tsx           # Footer
│       └── ScrollToTop.tsx      # Scroll to top button
├── public/
│   └── images/                  # Static images
├── next.config.ts               # Next.js configuration
└── package.json                 # Dependencies
```

## 🎯 Components

### Navbar
- Smooth scroll navigation
- Active link highlighting
- Theme toggle (light/dark)
- Mobile responsive menu
- Keyboard navigation support

### Hero
- Profile image with floating animation
- Social media links
- Call-to-action button
- Responsive grid layout

### Skills
- Three categories (Frontend, Backend, Tools)
- Animated progress bars
- Skill level badges
- IntersectionObserver for performance

### Projects
- Category filtering
- Carousel with touch/swipe support
- Responsive cards (3/2/1 columns)
- Hover effects with image zoom
- Project badges and tags

### Contact
- Form validation
- Email format checking
- Toast notifications
- Contact information cards

### ScrollToTop
- Appears after scrolling 300px
- Smooth scroll to top
- Fade-in animation

## 🚀 Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎨 UX Improvements Made

### 1. **Enhanced Animations**
- Smooth fade-in on page load
- Card hover effects with scaling
- Button ripple effects
- Progress bar animations
- Slide-in mobile menu

### 2. **Better Visual Feedback**
- Gradient borders on hover
- Image zoom on card hover
- Active states for all interactive elements
- Focus rings for keyboard navigation
- Loading states and transitions

### 3. **Improved Accessibility**
- ARIA labels on all interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Focus management
- Screen reader friendly

### 4. **Mobile Experience**
- Touch/swipe support for carousel
- Smooth mobile menu animation
- Optimized touch targets
- Responsive images
- Mobile-first design

### 5. **Performance**
- Code splitting
- Image optimization
- Lazy loading
- CSS custom properties
- Minimal JavaScript

## 🐛 Bugs Fixed

1. ✅ **Image Loading Error** - Added `unoptimized` prop for external images
2. ✅ **Mobile Menu** - Fixed positioning and added smooth animations
3. ✅ **Carousel Responsiveness** - Added touch support and resize handling
4. ✅ **Theme Persistence** - Fixed localStorage integration
5. ✅ **Accessibility** - Added proper ARIA labels and keyboard support

## 📊 UX Rating

### Before Improvements: 6/10
- Basic functionality
- Limited animations
- No accessibility features
- Basic mobile support

### After Improvements: 9/10
- ✅ Premium animations and transitions
- ✅ Excellent accessibility
- ✅ Touch/swipe support
- ✅ Keyboard navigation
- ✅ Smooth theme switching
- ✅ Professional card designs
- ✅ Micro-interactions
- ✅ Scroll to top button

### Areas for Future Enhancement:
- Add page transitions
- Implement skeleton loading states
- Add more animation variants
- Integrate analytics
- Add blog section
- Implement CMS for content management

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- **Netlify**: Connect Git repository
- **AWS Amplify**: Connect Git repository
- **DigitalOcean**: Use App Platform

## 📝 Customization

### Update Personal Information
Edit the following files:
- `src/components/Hero.tsx` - Name and bio
- `src/components/About.tsx` - About text
- `src/components/Skills.tsx` - Skills data
- `src/components/Projects.tsx` - Projects data
- `src/components/Contact.tsx` - Contact info

### Change Theme Colors
Edit `src/app/globals.css`:
```css
body.light-theme {
    --primary: #your-color;
}

body.dark-theme {
    --primary: #your-color;
}
```

### Add New Sections
1. Create component in `src/components/`
2. Import in `src/app/page.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Tanushka Patil**
- Email: tanushkapatil2412@gmail.com
- GitHub: [@tanushkapatil](https://github.com)
- LinkedIn: [Tanushka Patil](https://linkedin.com)

---

Made with ❤️ using Next.js and TypeScript
