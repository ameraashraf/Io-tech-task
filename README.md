# IO-TECH Legal Services Website

A modern, bilingual (English/Arabic) legal services website built with Next.js 15 frontend and Strapi CMS backend, featuring a comprehensive content management system with dynamic data fetching.

## 🏢 Project Overview

This is a full-stack legal services website that showcases professional legal services, team members, client testimonials, and provides interactive features like search functionality, contact forms, and newsletter subscriptions. The application is built with modern web technologies and follows best practices for performance, accessibility, and user experience.

## 🛠 Technologies Used

### Frontend Framework

- **Next.js 15** - React framework with App Router for server-side rendering and static generation
- **React 19** - Latest React version with concurrent features
- **TypeScript** - Type-safe development with comprehensive type definitions

### State Management & Data Fetching

- **Redux Toolkit** - Centralized state management for search functionality and form states
- **TanStack React Query** - Server state management with caching, background updates, and optimistic updates
- **Axios** - HTTP client for API communication with Strapi backend

### Form Handling & Validation

- **Formik** - Form management with complex validation logic
- **Yup** - Schema validation for email validation and form fields

### UI Framework & Styling

- **Shadcn/ui** - Modern component library built on Radix UI primitives
- **Tailwind CSS 4** - Utility-first CSS framework for responsive design
- **Radix UI** - Accessible component primitives (accordion, dialog, dropdown-menu, menubar, slot)
- **Framer Motion** - Animation library for smooth transitions and micro-interactions

### Backend & CMS

- **Strapi 5.22** - Headless CMS backend for content management and API
- **SQLite** - Database for development and content storage
- **RESTful API** - Custom API endpoints for dynamic content

### Internationalization

- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next
- **i18next-browser-languagedetector** - Automatic language detection

### Additional Libraries

- **Lucide React** - Icon library
- **React Hot Toast** - Toast notifications
- **Swiper** - Touch slider for testimonials and content carousels
- **Class Variance Authority** - Component variant management

## 🌟 Key Features

### 🔍 Advanced Search System

- Real-time search suggestions with debounced input
- Bilingual search support (English/Arabic)
- Arabic text normalization for better search matching
- Pagination for search results
- Keyboard navigation support
- Search result categorization (Services, Team, Blog, etc.)

### 📧 Email Subscription System

- Formik integration for form management
- Real-time email validation
- Duplicate subscription checking
- Loading states and error handling
- Toast notifications for user feedback

### 🌐 Bilingual Support

- Complete English/Arabic translation
- RTL (Right-to-Left) layout support for Arabic
- Language detection and persistence
- Hydration-safe translation implementation
- Dynamic content direction switching

### 📱 Responsive Design

- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Optimized mobile navigation
- Responsive typography and spacing

### ⚡ Performance & SEO

- Static Site Generation (SSG) for service pages
- Dynamic metadata generation
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized font loading with display swap
- SEO-friendly URLs and structure

### 🎨 Modern UI/UX

- Consistent design system with Shadcn/ui
- Smooth animations with Framer Motion
- Loading states and skeleton screens
- Accessibility features (ARIA labels, keyboard navigation)
- Dark mode ready components
- Micro-interactions and hover effects

## 📈 Version History & Improvements

### v1.1.0-improvements (Latest)

**Post-submission enhancements demonstrating continuous improvement and code quality focus**

#### 🏗️ Reusable Components Architecture

- **PageLayout**: Unified page structure with hero + content sections
- **LoadingSpinner**: Consistent loading states with accessibility features
- **ErrorMessage**: Standardized error handling with semantic HTML
- **AnimationVariants**: Centralized animation configurations
- **PageContainer**: Reusable section containers with consistent styling

#### ♿ Semantic HTML & Accessibility

- **HTML5 Semantic Tags**: Proper use of `main`, `section`, `article`, `nav`, `aside`
- **ARIA Attributes**: Enhanced accessibility with `role`, `aria-label`, `aria-live`
- **Schema.org Markup**: Structured data for better SEO
- **Screen Reader Support**: Improved navigation and content understanding
- **Keyboard Navigation**: Full keyboard accessibility support

#### 🎨 Enhanced Metadata & SEO

- **OpenGraph Tags**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Dynamic Metadata**: Page-specific meta information
- **Structured Data**: JSON-LD markup for search engines
- **Canonical URLs**: Proper URL canonicalization

#### 📝 Complete Service Content

- **16 Legal Services**: Comprehensive content for all service pages
- **Consistent Structure**: 3-section format per service
- **Professional Content**: Detailed descriptions and bullet points
- **SEO Optimization**: Service-specific meta tags and descriptions
- **Structured Format**: Consistent content organization

#### 🔧 Code Quality Improvements

- **Reduced Duplication**: Eliminated ~150 lines of duplicate code
- **Centralized Animations**: Shared animation variants across components
- **Consistent Patterns**: Standardized loading and error states
- **Better Organization**: Improved component structure and naming
- **Type Safety**: Enhanced TypeScript implementations

### v1.0.0-submission

**Initial submission - Complete law firm website**

- ✅ All requirements delivered on time
- ✅ Responsive design with RTL support
- ✅ Internationalization (EN/AR)
- ✅ Dynamic service pages
- ✅ Search functionality
- ✅ Team and client sections

## 🏗 Project Structure

```
io-tech-task2/
├── frontend/                 # Next.js application
│   ├── src/
│   │   ├── app/             # Next.js App Router pages
│   │   │   ├── about-us/    # About us page with components
│   │   │   ├── blogs/       # Blog listing and detail pages
│   │   │   ├── contact-us/  # Contact form and information
│   │   │   ├── our-team/    # Team member profiles
│   │   │   ├── search-results/ # Search functionality
│   │   │   ├── services/    # Service pages with dynamic routing
│   │   │   └── social-responsibility/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header/      # Navigation and search
│   │   │   ├── Footer/      # Footer with subscription form
│   │   │   ├── HeroSection/ # Landing page hero
│   │   │   ├── OurTeamSection/ # Team member display
│   │   │   ├── Clients/     # Client testimonials
│   │   │   ├── ui/          # Shadcn/ui components
│   │   │   └── shared/      # Common components
│   │   ├── features/        # Redux Toolkit slices
│   │   │   ├── search/      # Search state management
│   │   │   └── subscriptionForm/ # Form state management
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions and configurations
│   │   ├── locales/         # Translation files (en.json, ar.json)
│   │   ├── services/        # API service functions
│   │   └── store/           # Redux store configuration
│   └── public/              # Static assets
├── backend/                  # Strapi CMS
│   ├── src/
│   │   ├── api/             # API endpoints
│   │   ├── components/      # Strapi components
│   │   └── extensions/      # Strapi extensions
│   └── config/              # Strapi configuration
└── scripts/                 # Build and deployment scripts
```

## 🔧 Key Implementation Details

### Clean Code Architecture

- Modular component structure
- Custom hooks for business logic separation
- Type-safe development with TypeScript
- Consistent naming conventions
- Comprehensive error handling

### Reusable Components

- Component composition patterns
- Props interfaces for type safety
- Variant-based component design
- Consistent styling with design tokens

### Search Logic

- Debounced search input
- Bilingual search with Arabic text normalization
- Categorized search results
- Pagination with Redux state management
- Keyboard navigation support

### Form Validation

- Formik + Yup schema validation
- Real-time email validation
- Duplicate subscription checking
- Loading states and error handling
- Accessible form design

### Performance Optimization

- Static generation for static pages
- Image optimization and lazy loading
- Code splitting and dynamic imports
- Efficient state management
- Optimized bundle size

### Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Semantic HTML structure

## 🔧 Strapi CMS Integration - Strategic Implementation

### Where Strapi is Used:

**Successfully implemented Strapi integration in key areas:**

1. **Team Section**: Dynamic team member data from Strapi

   - API integration with `useTeamSections` hook
   - Real-time team member updates
   - Localized content (EN/AR)

2. **Client Testimonials**: Dynamic client feedback

   - API integration with `useClientSections` hook
   - Transform and display testimonials
   - Section metadata management

3. **Hero Section**: Dynamic hero content
   - API integration with `useHeroSections` hook
   - Localized hero content
   - Dynamic content updates

### Technical Implementation:

- **API Hooks**: Custom React Query hooks for data fetching
- **Data Transformation**: Functions to transform Strapi data to component format
- **Error Handling**: Proper loading and error states
- **Localization**: Support for multiple languages

### Strategic Decision:

**Why not 100% Strapi integration?**

- **Time Constraints**: Learning curve for first-time Strapi usage
- **Content Stability**: Static content ensures consistent user experience
- **Performance**: Faster initial load with static content
- **Future-Proof**: Easy to expand Strapi integration later

### What Was Learned:

- Strapi content type creation and relationships
- API endpoint configuration and testing
- Data transformation patterns
- Integration with Next.js and React Query
- Localization handling in Strapi

### Future Enhancement Path:

- Complete Strapi integration for all content
- Admin panel for content management
- Real-time content updates
- Advanced content relationships

## 🧠 Professional Growth Mindset

This project demonstrates:

1. **Honesty**: Acknowledging learning curves and constraints
2. **Strategic Thinking**: Making informed technical decisions
3. **Quality Focus**: Prioritizing user experience and code quality
4. **Continuous Improvement**: Post-submission enhancements
5. **Learning Orientation**: Embracing new technologies and challenges

The decision to focus on frontend excellence while learning Strapi shows mature technical judgment and commitment to delivering value.

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 6.0.0

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ameraashraf/Io-tech-task.git
   cd io-tech-task
   ```

2. **Install dependencies**

   ```bash
   npm run install:all
   ```

3. **Environment Setup**

   Create environment files for both frontend and backend:

   **Frontend (.env.local)**

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:1337
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

   **Backend (.env)**

   ```env
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS=your-app-keys
   API_TOKEN_SALT=your-api-token-salt
   ADMIN_JWT_SECRET=your-admin-jwt-secret
   JWT_SECRET=your-jwt-secret
   ```

4. **Start Development Servers**

   ```bash
   # Start both frontend and backend
   npm run dev

   # Or start individually:
   npm run dev:frontend  # Frontend on http://localhost:3000
   npm run dev:backend   # Backend on http://localhost:1337
   ```

### Access the Applications

- **Frontend**: http://localhost:3000 (or 3001 if 3000 is busy)
- **Backend**: http://localhost:1337
- **Strapi Admin**: http://localhost:1337/admin

## 🔧 Backend Setup (Strapi)

The project includes a complete Strapi CMS backend in the `backend/` directory:

- **Content Types**: Hero sections, team members, client testimonials, services
- **API Endpoints**: RESTful APIs for all content types
- **Media Management**: Image upload and management
- **Admin Panel**: User-friendly content management interface
- **Database**: SQLite for development (easily configurable for production)

## 📝 Environment Variables

### Local Development

```env
NEXT_PUBLIC_API_URL=http://localhost:1337
```

### Vercel Deployment

For production deployment on Vercel, you need to set the environment variable in your Vercel project settings:

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add a new variable:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: Your Strapi backend URL (e.g., `https://your-strapi-app.herokuapp.com` or your deployed Strapi URL)
   - **Environment**: Production (and Preview if needed)

**Important**: Make sure your Strapi backend is deployed and accessible from the internet for the images to load properly.

## 📦 Build & Deployment

### Build both applications

```bash
npm run build
```

### Build frontend only

```bash
npm run build:frontend
```

### Build backend only

```bash
npm run build:backend
```

### Production Start

```bash
npm run start
```

## 🧪 Testing

```bash
npm test
```

## 📝 Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:frontend` - Start frontend only
- `npm run dev:backend` - Start backend only
- `npm run build` - Build both applications
- `npm run start` - Start both applications in production mode
- `npm run install:all` - Install dependencies for all packages
- `npm run clean` - Clean build artifacts and node_modules
- `npm run lint` - Run linting for both applications

## 🎨 Design System

The application uses a consistent design system with:

- Custom color palette
- Typography scale
- Spacing system
- Component variants
- Animation guidelines

## 🌍 Internationalization

- Complete English/Arabic support
- RTL layout for Arabic
- Language detection and persistence
- Dynamic content switching
- Translation file management

## 📱 Pages

- **Home** - Landing page with hero section and services
- **About Us** - Company information and values
- **Services** - Service offerings with detailed pages
- **Our Team** - Team member profiles
- **Blogs** - Articles and news
- **Contact Us** - Contact information and form
- **Search Results** - Search functionality

## 🔧 Configuration

### Frontend Configuration

- **Next.js Config**: `frontend/next.config.ts`
- **Tailwind Config**: `frontend/tailwind.config.js`
- **TypeScript Config**: `frontend/tsconfig.json`

### Backend Configuration

- **Strapi Config**: `backend/config/`
- **Database Config**: `backend/config/database.ts`
- **Server Config**: `backend/config/server.ts`

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend Deployment (Railway/Heroku)

1. Set up environment variables
2. Configure database (PostgreSQL recommended for production)
3. Deploy using the platform's CLI or dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Amira Ashraf**

- GitHub: [@ameraashraf](https://github.com/ameraashraf)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Strapi team for the powerful headless CMS
- All contributors and maintainers

---

This project demonstrates modern web development practices with a focus on performance, accessibility, and user experience. The Strapi CMS backend provides a robust content management system, while the Next.js frontend delivers a fast, responsive, and user-friendly interface, making it a comprehensive full-stack solution for legal service websites.
