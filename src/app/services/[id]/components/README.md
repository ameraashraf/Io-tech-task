# Service Page Components

This directory contains the refactored service page components with improved separation of concerns and maintainability.

## Component Structure

### Main Components

- **`ServicePageClient.tsx`** - Main orchestrator component that handles mounting state and renders appropriate version
- **`ServicePageContent.tsx`** - Static version without animations (for SSR/hydration)
- **`ServicePageAnimated.tsx`** - Animated version with framer-motion (for client-side)
- **`ServicePageLayout.tsx`** - Shared layout component to eliminate duplication

### Supporting Files

- **`useServicePageMount.ts`** - Custom hook for handling mounting state
- **`animationVariants.ts`** - Shared animation constants for reusability

## Benefits of This Structure

1. **Single Responsibility**: Each component has a clear, focused purpose
2. **No Code Duplication**: Shared layout eliminates repeated JSX
3. **Better Maintainability**: Changes to layout only need to be made in one place
4. **Improved Performance**: Animations only load after hydration
5. **Reusable Animations**: Animation variants can be used across components
6. **Cleaner Code**: Smaller, more focused components are easier to understand

## Usage

```tsx
// The main component automatically handles mounting state
<ServicePageClient service={serviceData} />
```

## Component Responsibilities

- **ServicePageClient**: Orchestrates mounting state and component selection
- **ServicePageContent**: Renders static content for SSR/hydration
- **ServicePageAnimated**: Wraps content with animations
- **ServicePageLayout**: Provides the actual page structure and content
- **useServicePageMount**: Manages client-side mounting state
- **animationVariants**: Provides reusable animation configurations
