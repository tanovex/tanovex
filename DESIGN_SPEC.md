# 🎨 Tanovex Design System Specification

*A comprehensive guide to the cyberpunk-inspired design language*

---

## 🎯 Design Philosophy

The Tanovex design system embraces a **cyberpunk aesthetic** with modern glass morphism effects, creating a futuristic yet professional digital experience. The design balances high-tech visual elements with clean, readable interfaces.

### Core Principles
- **Glass Morphism**: Translucent surfaces with backdrop blur effects
- **Subtle Animations**: Smooth, purposeful micro-interactions
- **Cyberpunk Colors**: Neon blues and controlled accent colors
- **Dark Theme**: Professional dark backgrounds with appropriate contrast
- **Modern Typography**: Clean, readable fonts with proper hierarchy

---

## 🎨 Color Palette

### Primary Colors
```css
/* Brand Primary */
--primary-blue: #00aaff;
--primary-blue-dark: #0088cc;
--primary-blue-light: #33bbff;

/* Accent Colors */
--accent-pink: rgba(255, 0, 150, 0.08);
--accent-green: rgba(0, 255, 150, 0.06);
--accent-red: #ff4757;
```

### Background Colors
```css
/* Base Backgrounds */
--bg-primary: #242424;
--bg-secondary: #1a1a1a;
--bg-tertiary: #1e1e1e;

/* Glass Morphism Surfaces */
--glass-surface: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-hover: rgba(255, 255, 255, 0.08);
```

### Text Colors
```css
/* Text Hierarchy */
--text-primary: rgba(255, 255, 255, 0.95);
--text-secondary: rgba(255, 255, 255, 0.8);
--text-muted: rgba(255, 255, 255, 0.7);
--text-disabled: rgba(255, 255, 255, 0.5);
```

### State Colors
```css
/* Interactive States */
--hover-glow: rgba(0, 170, 255, 0.2);
--focus-ring: rgba(0, 170, 255, 0.4);
--border-subtle: rgba(255, 255, 255, 0.1);
--border-accent: rgba(0, 170, 255, 0.3);
```

---

## 🔤 Typography

### Font Families
```css
/* Primary Font Stack */
font-family: 'Lato', Inter, Avenir, Helvetica, Arial, sans-serif;

/* Code/Monospace */
font-family: 'JetBrains Mono', monospace;

/* Headings */
font-family: 'Lato', sans-serif;
font-weight: 700;
```

### Type Scale
```css
/* Heading Sizes */
--text-4xl: 3.2rem;     /* h1 */
--text-3xl: 1.875rem;   /* h2 */
--text-2xl: 1.5rem;     /* h3 */
--text-xl: 1.25rem;     /* h4 */
--text-lg: 1.125rem;    /* h5 */

/* Body Sizes */
--text-base: 1rem;      /* 16px */
--text-sm: 0.875rem;    /* 14px */
--text-xs: 0.75rem;     /* 12px */
```

### Font Weights
```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## 📐 Spacing & Layout

### Spacing Scale
```css
/* Spacing Units (rem) */
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-10: 2.5rem;     /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
```

### Border Radius
```css
--radius-sm: 4px;       /* Small elements */
--radius-md: 8px;       /* Buttons, inputs */
--radius-lg: 12px;      /* Cards, containers */
--radius-xl: 16px;      /* Large containers */
--radius-full: 9999px;  /* Circular elements */
```

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-max: 1000px; /* Site max-width */
```

---

## 🎭 Component Patterns

### Glass Morphism Cards
```css
.glass-card {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.glass-card:hover {
    transform: translateY(-5px);
    border-color: #00aaff;
    box-shadow: 0 12px 35px rgba(0, 170, 255, 0.2);
}
```

### Button Variants
```css
/* Primary Button */
.btn-primary {
    background: linear-gradient(135deg, #00aaff, #0088cc);
    color: white;
    box-shadow: 0 4px 15px rgba(0, 170, 255, 0.3);
    border: none;
    padding: 0.6em 1.2em;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 170, 255, 0.4);
}

/* Secondary Button */
.btn-secondary {
    background: transparent;
    border: 2px solid #00aaff;
    color: #00aaff;
    padding: 0.6em 1.2em;
    border-radius: 8px;
    transition: all 0.3s ease;
}
```

### Skeleton Loading
```css
.skeleton {
    background-color: rgba(255, 255, 255, 0.1);
    background-image: linear-gradient(
        90deg, 
        rgba(255, 255, 255, 0), 
        rgba(0, 170, 255, 0.3),
        rgba(255, 255, 255, 0)
    );
    background-size: 80px 100%;
    background-repeat: no-repeat;
    background-position: left -80px top 0;
    animation: shine 2s ease-in-out infinite;
    border-radius: 4px;
}

@keyframes shine {
    to {
        background-position: right -80px top 0;
    }
}
```

---

## ✨ Animation Guidelines

### Transition Durations
```css
--duration-fast: 0.15s;     /* Quick interactions */
--duration-base: 0.3s;      /* Standard transitions */
--duration-slow: 0.5s;      /* Complex animations */
--duration-loading: 2s;     /* Loading animations */
```

### Easing Functions
```css
--ease-out: ease-out;           /* Standard exits */
--ease-in-out: ease-in-out;     /* Balanced transitions */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Animations
```css
/* Hover Lift */
.hover-lift {
    transition: transform 0.3s ease;
}
.hover-lift:hover {
    transform: translateY(-5px);
}

/* Fade In */
.fade-in {
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
    to { opacity: 1; }
}

/* Scale In */
.scale-in {
    transform: scale(0.9);
    opacity: 0;
    animation: scaleIn 0.4s ease forwards;
}

@keyframes scaleIn {
    to {
        transform: scale(1);
        opacity: 1;
    }
}
```

---

## 🏗️ Layout Patterns

### Page Structure
```html
<div class="page-container">
    <header class="site-header">
        <!-- Navigation -->
    </header>
    <main class="main-content">
        <div class="content-wrapper">
            <!-- Page content -->
        </div>
    </main>
</div>
```

### Grid Systems
```css
/* Card Grid */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
}

/* Feature Grid */
.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}
```

### Flexbox Patterns
```css
/* Center Content */
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Space Between */
.flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Column Layout */
.flex-col {
    display: flex;
    flex-direction: column;
}
```

---

## 🌙 Background System

### Cyberpunk Background Layers
```css
/* Layer 1: Base gradient with animated pulses */
body::before {
    content: '';
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -2;
    background: 
        radial-gradient(circle at 20% 20%, rgba(0, 170, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 0, 150, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 40% 60%, rgba(0, 255, 150, 0.06) 0%, transparent 50%),
        linear-gradient(135deg, #1a1a1a 0%, #242424 50%, #1e1e1e 100%);
    animation: cyberpunk-pulse 8s ease-in-out infinite;
}

/* Layer 2: Moving grid pattern */
body::after {
    content: '';
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -1;
    background-image: 
        linear-gradient(90deg, transparent 79px, rgba(0, 170, 255, 0.03) 81px, rgba(0, 170, 255, 0.03) 82px, transparent 84px),
        linear-gradient(0deg, transparent 79px, rgba(0, 170, 255, 0.03) 81px, rgba(0, 170, 255, 0.03) 82px, transparent 84px);
    background-size: 80px 80px;
    animation: grid-move 20s linear infinite;
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

### Mobile Adaptations
```css
@media (max-width: 768px) {
    .glass-card {
        margin: 0.5rem;
        min-width: 300px;
    }
    
    .hero {
        padding: 2rem 1rem;
    }
    
    .feature-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
}
```

---

## 🎪 Special Effects

### Glow Effects
```css
.glow-primary {
    box-shadow: 0 0 20px rgba(0, 170, 255, 0.3);
}

.glow-hover:hover {
    box-shadow: 0 0 25px rgba(0, 170, 255, 0.4);
}

.text-glow {
    text-shadow: 0 0 10px rgba(0, 170, 255, 0.5);
}
```

### Scrollbar Styling
```css
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
    background: #00aaff;
    border-radius: 4px;
}
```

---

## 🧩 Component Library

### Available Components

#### Cards
- **Card**: Media card with skeleton loading
- **ProductCard**: Property listing with favorite functionality
- **ContentCard**: General purpose content container

#### Navigation
- **Header**: Main site navigation
- **RouterLink**: Enhanced navigation links

#### Layout
- **Hero Section**: Landing page hero with CTA buttons
- **Grid Containers**: Responsive grid layouts

#### Interactive
- **Buttons**: Primary, secondary, and accent variants
- **Forms**: Input fields with glass morphism styling

---

## 🎨 Usage Guidelines

### Do's ✅
- Use glass morphism effects for elevated surfaces
- Maintain consistent spacing using the spacing scale
- Apply hover effects for interactive elements
- Use skeleton loading for better perceived performance
- Keep animations subtle and purposeful

### Don'ts ❌
- Don't overuse bright accent colors
- Avoid mixing different border radius values inconsistently
- Don't create overly complex animations that distract
- Avoid breaking the glass morphism pattern with solid backgrounds
- Don't ignore mobile responsiveness

---

## 🔧 Implementation Notes

### CSS Architecture
```
styles/
├── globals.css          # Global styles and CSS reset
├── variables.css        # CSS custom properties
├── components/          # Component-specific styles
├── utilities/           # Utility classes
└── animations/          # Keyframe animations
```

### Vue Component Structure
```vue
<template>
    <!-- Semantic HTML structure -->
</template>

<script setup lang="ts">
    // Composition API logic
</script>

<style scoped lang="scss">
    // Component-specific styles
</style>
```

### Performance Considerations
- Use `backdrop-filter` sparingly for better performance
- Implement proper loading states with skeletons
- Optimize animations with `will-change` property
- Use CSS containment for isolated components

---

## 📚 Resources

### Design Tools
- **Figma**: For design mockups and prototyping
- **Adobe Color**: For color palette generation
- **CSS Gradient Generator**: For background effects

### Code Tools
- **SCSS**: For enhanced CSS authoring
- **Vue DevTools**: For component debugging
- **Lighthouse**: For performance auditing

### Inspiration
- Cyberpunk 2077 UI design
- Glass morphism design trends
- Modern dark theme interfaces
- Sci-fi movie interfaces

---

*Last updated: August 6, 2025*
*Version: 1.0*
