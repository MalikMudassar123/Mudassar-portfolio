# Mudassar Zafar - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark theme with purple accents and gradient effects
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Type Safe**: Written in TypeScript

## 📋 Sections

- **Hero**: Introduction with profile image and key stats
- **About**: Detailed information about background and education
- **Experience**: Professional work history with 4 companies
- **Skills**: Technical skills organized by category
- **Projects**: Showcase of 8+ major projects
- **Contact**: Contact form and information
- **Footer**: Quick links and social media

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**:
```bash
git clone <repository-url>
cd mudassar-portfolio
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Add profile image**:
   - Place your profile image in `public/mudassar-profile.jpg`
   - Or update the image path in `components/Hero.tsx`

4. **Run development server**:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: '#0d0d12',
  secondary: '#13131f',
  accent: '#7c3aed',
  'accent-light': '#a855f7',
}
```

### Content
Update the following files to customize content:
- `components/Hero.tsx` - Hero section content
- `components/About.tsx` - About section
- `components/Experience.tsx` - Work experience
- `components/Skills.tsx` - Technical skills
- `components/Projects.tsx` - Project showcase
- `components/Contact.tsx` - Contact information

### Metadata
Update SEO metadata in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your description',
  keywords: 'your, keywords',
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Manual Build
```bash
npm run build
npm run start
```

## 📄 Project Structure

```
mudassar-portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact section
│   ├── Experience.tsx       # Experience section
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── LoadingScreen.tsx    # Loading animation
│   ├── Navbar.tsx           # Navigation bar
│   ├── Projects.tsx         # Projects section
│   └── Skills.tsx           # Skills section
├── public/
│   └── mudassar-profile.jpg # Profile image
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## 🎯 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 📧 Contact

- **Email**: malikmudassar6086@gmail.com
- **Phone**: 0323-6086804
- **LinkedIn**: [linkedin.com/in/mudassar-mern-842584250](https://linkedin.com/in/mudassar-mern-842584250)

## 📝 License

© 2024 Mudassar Zafar. All rights reserved.

## 🙏 Acknowledgments

- Design inspired by modern portfolio trends
- Built with Next.js and Tailwind CSS
- Animations powered by Framer Motion
