# IO-TECH Legal Services Website

A modern, bilingual (English/Arabic) legal services website built with Next.js 15 frontend and **Strapi CMS backend**, featuring a comprehensive content management system with dynamic data fetching.

## �� **Project Overview**

This is a full-stack legal services website that showcases professional legal services, team members, client testimonials, and provides interactive features like search functionality, contact forms, and newsletter subscriptions. The application is built with modern web technologies and follows best practices for performance, accessibility, and user experience.

## 🛠 **Technologies Used**

### **Frontend Framework**

- **Next.js 15** - React framework with App Router for server-side rendering and static generation
- **React 19** - Latest React version with concurrent features
- **TypeScript** - Type-safe development with comprehensive type definitions

### **State Management & Data Fetching**

- **Redux Toolkit** - Centralized state management for search functionality and form states
- **TanStack React Query** - Server state management with caching, background updates, and optimistic updates
- **Axios** - HTTP client for API communication with Strapi backend

### **Form Handling & Validation**

- **Formik** - Form management with complex validation logic
- **Yup** - Schema validation for email validation and form fields

### **UI Framework & Styling**

- **Shadcn/ui** - Modern component library built on Radix UI primitives
- **Tailwind CSS 4** - Utility-first CSS framework for responsive design
- **Radix UI** - Accessible component primitives (accordion, dialog, dropdown-menu, menubar, slot)
- **Framer Motion** - Animation library for smooth transitions and micro-interactions

### **Backend & CMS**

- **Strapi 5.22** - Headless CMS backend for content management and API
- **SQLite** - Database for development and content storage
- **RESTful API** - Custom API endpoints for dynamic content

### **Internationalization**

- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next
- **i18next-browser-languagedetector** - Automatic language detection

### **Additional Libraries**

- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **Swiper** - Touch slider for testimonials and content carousels
- **Class Variance Authority** - Component variant management

## �� **Key Features**

### **🔍 Advanced Search System**

- Real-time search suggestions with debounced input
- Bilingual search support (English/Arabic)
- Arabic text normalization for better search matching
- Pagination for search results
- Keyboard navigation support
- Search result categorization (Services, Team, Blog, etc.)

### **�� Email Subscription System**

- Formik integration for form management
- Real-time email validation
- Duplicate subscription checking
- Loading states and error handling
- Toast notifications for user feedback

### **🌐 Bilingual Support**

- Complete English/Arabic translation
- RTL (Right-to-Left) layout support for Arabic
- Language detection and persistence
- Hydration-safe translation implementation
- Dynamic content direction switching

### **📱 Responsive Design**

- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized mobile navigation
- Responsive typography and spacing

### **⚡ Performance & SEO**

- Static Site Generation (SSG) for service pages
- Dynamic metadata generation
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized font loading with display swap
- SEO-friendly URLs and structure

### **🎨 Modern UI/UX**

- Consistent design system with Shadcn/ui
- Smooth animations with Framer Motion
- Loading states and skeleton screens
- Accessibility features (ARIA labels, keyboard navigation)
- Dark mode ready components
- Micro-interactions and hover effects

## 🏗 **Project Structure**

```
src/
├── app/                    # Next.js App Router pages
│   ├── about-us/          # About us page with components
│   ├── blogs/             # Blog listing and detail pages
│   ├── contact-us/        # Contact form and information
│   ├── our-team/          # Team member profiles
│   ├── search-results/    # Search functionality
│   ├── services/          # Service pages with dynamic routing
│   └── social-responsibility/
├── components/            # Reusable UI components
│   ├── Header/           # Navigation and search
│   ├── Footer/           # Footer with subscription form
│   ├── HeroSection/      # Landing page hero
│   ├── OurTeamSection/   # Team member display
│   ├── Clients/          # Client testimonials
│   ├── ui/               # Shadcn/ui components
│   └── shared/           # Common components
├── features/             # Redux Toolkit slices
│   ├── search/           # Search state management
│   └── subscriptionForm/ # Form state management
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── locales/              # Translation files (en.json, ar.json)
├── services/             # API service functions
└── store/                # Redux store configuration
```

## 🔧 **Key Implementation Details**

### **Clean Code Architecture**

- Modular component structure
- Custom hooks for business logic separation
- Type-safe development with TypeScript
- Consistent naming conventions
- Comprehensive error handling

### **Reusable Components**

- Component composition patterns
- Props interfaces for type safety
- Variant-based component design
- Consistent styling with design tokens

### **Search Logic**

- Debounced search input
- Bilingual search with Arabic text normalization
- Categorized search results
- Pagination with Redux state management
- Keyboard navigation support

### **Form Validation**

- Formik + Yup schema validation
- Real-time email validation
- Duplicate subscription checking
- Loading states and error handling
- Accessible form design

### **Performance Optimization**

- Static generation for static pages
- Image optimization and lazy loading
- Code splitting and dynamic imports
- Efficient state management
- Optimized bundle size

### **Accessibility**

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Semantic HTML structure

## 🚀 **Getting Started**

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Set up environment variables**
4. **Start the development server**: `npm run dev`
5. **Start Strapi backend**: `cd my-project && npm run dev`

## 🔧 **Backend Setup (Strapi)**

The project includes a complete Strapi CMS backend in the `my-project/` directory:

- **Content Types**: Hero sections, team members, client testimonials, services
- **API Endpoints**: RESTful APIs for all content types
- **Media Management**: Image upload and management
- **Admin Panel**: User-friendly content management interface
- **Database**: SQLite for development (easily configurable for production)

## 📝 **Environment Variables**

```env
NEXT_PUBLIC_API_URL=http://localhost:1337/api
```

## 🎨 **Design System**

The application uses a consistent design system with:

- Custom color palette
- Typography scale
- Spacing system
- Component variants
- Animation guidelines

## 🌍 **Internationalization**

- Complete English/Arabic support
- RTL layout for Arabic
- Language detection and persistence
- Dynamic content switching
- Translation file management

This project demonstrates modern web development practices with a focus on performance, accessibility, and user experience. The **Strapi CMS backend** provides a robust content management system, while the Next.js frontend delivers a fast, responsive, and user-friendly interface, making it a comprehensive full-stack solution for legal service websites.
