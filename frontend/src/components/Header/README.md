# Header Components

This directory contains the header components that have been refactored for better maintainability and separation of concerns.

## Component Structure

### Main Components

- **`Header.tsx`** - Main header component that orchestrates the entire header
- **`HeaderActions.tsx`** - Container for header action items (search, language, appointment)

### Search Components

- **`SearchTrigger.tsx`** - Search button that opens the search interface
- **`SearchBox.tsx`** - Search input field with suggestions dropdown
- **`SearchSuggestions.tsx`** - Dropdown component for search suggestions

### Utility Components

- **`BookAppointmentButton.tsx`** - Appointment booking button
- **`useSearchKeyboard.ts`** - Custom hook for keyboard shortcuts and interactions

## Architecture Benefits

### 1. **Single Responsibility Principle**

Each component now has a single, well-defined responsibility:

- `SearchTrigger` - Only handles the search button
- `SearchBox` - Only handles the search input and form
- `BookAppointmentButton` - Only handles appointment booking

### 2. **Reusability**

Components can be easily reused in different contexts:

- `SearchTrigger` can be used independently
- `BookAppointmentButton` can be placed anywhere in the app
- `useSearchKeyboard` can be used by other search components

### 3. **Maintainability**

- Easier to test individual components
- Easier to modify specific functionality
- Clear separation of concerns
- Reduced cognitive load when working on specific features

### 4. **Performance**

- Components can be optimized individually
- Better tree-shaking opportunities
- Reduced re-renders through focused component boundaries

## Usage

```tsx
import {
  Header,
  HeaderActions,
  SearchTrigger,
  SearchBox,
  BookAppointmentButton
} from "@/components/Header";

// Use the main header
<Header />

// Or use individual components
<HeaderActions />

// Or use search components independently
<SearchTrigger onOpen={handleOpen} triggerRef={triggerRef} />
<SearchBox isOpen={isOpen} onClose={handleClose} inputRef={inputRef} boxRef={boxRef} />
```

## Keyboard Shortcuts

The search functionality supports the following keyboard shortcuts:

- `Ctrl/Cmd + K` - Open search
- `/` - Open search
- `Escape` - Close search

These are handled by the `useSearchKeyboard` hook.
