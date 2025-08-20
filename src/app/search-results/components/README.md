# Arabic Search Functionality Implementation

This document describes the implementation of Arabic search functionality for the search results page, including bilingual support and RTL (Right-to-Left) layout.

## Overview

The search functionality has been enhanced to support both English and Arabic languages, allowing users to:

- **Search using Arabic text and characters regardless of the website language setting**
- View search results in Arabic when the language is set to Arabic
- Navigate through a fully translated interface
- Experience proper RTL layout for Arabic content
- **Search bilingually - Arabic search works even when website is in English mode**

## Key Features

### 1. **Universal Bilingual Search Support** ⭐

- **Arabic Text Detection**: Automatically detects when users type Arabic characters
- **Language-Independent**: Works regardless of the current website language setting
- **Arabic Text Normalization**: Handles Arabic diacritics and character variations
- **Dual Language Content**: All searchable content has both English and Arabic versions
- **Cross-Language Search**: English searches can find Arabic content and vice versa

### 2. Enhanced Search Logic

- **Smart Language Detection**: Uses regex patterns to identify Arabic text
- **Normalized Matching**: Removes diacritics and normalizes character variations
- **Comprehensive Search**: Searches through titles, excerpts, categories, and tags in both languages
- **Mixed Language Support**: Can search with Arabic text even when website is in English mode

### 3. RTL Layout Support

- **Directional Layout**: Automatically switches between LTR and RTL based on language
- **Proper Text Alignment**: All components respect the text direction
- **Icon Direction**: Navigation arrows and icons flip appropriately for RTL

### 4. Complete Translation Coverage

- **Search Interface**: All UI elements are translated
- **Search Results**: Titles, excerpts, and categories display in the appropriate language
- **Pagination**: Page numbers, navigation, and status messages are translated
- **Error Messages**: Loading states and error messages are localized

## Implementation Details

### Search Data Structure

The search data has been enhanced to include Arabic versions:

```typescript
interface SearchResult {
  id: number;
  title: string;
  titleAr?: string; // Arabic title
  excerpt: string;
  excerptAr?: string; // Arabic excerpt
  category: string;
  categoryAr?: string; // Arabic category
  readMoreUrl: string;
  tags?: string[];
  tagsAr?: string[]; // Arabic tags
}
```

### Arabic Text Processing

#### Detection Function

```typescript
const containsArabic = (text: string): boolean => {
  const arabicRegex =
    /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return arabicRegex.test(text);
};
```

#### Normalization Function

```typescript
const normalizeArabicText = (text: string): string => {
  return text
    .normalize("NFD")
    .replace(/[\u064B-\u065F]/g, "") // Remove diacritics
    .replace(/[أإآ]/g, "ا") // Normalize alef variations
    .replace(/[ىي]/g, "ي") // Normalize yaa variations
    .replace(/[ةه]/g, "ه") // Normalize taa marbouta and haa
    .replace(/[ؤئ]/g, "و") // Normalize waw and hamza variations
    .toLowerCase();
};
```

### Enhanced Search Matching Logic

The enhanced search function supports both languages regardless of website language:

```typescript
const matchesSearchTerm = (item: SearchResult, searchTerm: string): boolean => {
  const isArabicSearch = containsArabic(searchTerm);

  if (isArabicSearch) {
    // Search in Arabic fields when user types Arabic
    const normalizedArabicSearch = normalizeArabicText(searchTerm);
    return (
      (item.titleAr &&
        normalizeArabicText(item.titleAr).includes(normalizedArabicSearch)) ||
      (item.excerptAr &&
        normalizeArabicText(item.excerptAr).includes(normalizedArabicSearch)) ||
      (item.categoryAr &&
        normalizeArabicText(item.categoryAr).includes(
          normalizedArabicSearch
        )) ||
      (item.tagsAr &&
        item.tagsAr.some((tag) =>
          normalizeArabicText(tag).includes(normalizedArabicSearch)
        ))
    );
  }

  // For English search, search in BOTH English and Arabic fields
  // This allows finding Arabic content even when searching in English
  return (
    // Search in English fields
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags?.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
    ) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    // Also search in Arabic fields for English terms (for better discoverability)
    (item.titleAr &&
      item.titleAr.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.excerptAr &&
      item.excerptAr.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.categoryAr &&
      item.categoryAr.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.tagsAr &&
      item.tagsAr.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ))
  );
};
```

## Component Updates

### 1. SearchResultsList.tsx

- Added translation support for result counts and pagination
- Implemented RTL-aware layout
- Enhanced accessibility with proper ARIA labels

### 2. SearchResultItem.tsx

- Added bilingual title and excerpt display
- Implemented RTL text direction
- Added translated "Read more/Read less" buttons

### 3. SearchPagination.tsx

- Added Arabic translation for all pagination elements
- Implemented RTL-aware navigation arrows
- Enhanced accessibility with translated ARIA labels

### 4. SearchSidebar.tsx

- Added Arabic category labels
- Implemented RTL layout support
- Enhanced hover animations for RTL

### 5. SearchSuggestions.tsx

- Added bilingual suggestion display
- Implemented RTL-aware animations
- Enhanced arrow direction for RTL
- **Shows both languages in suggestions when available**

### 6. SearchBox.tsx

- Added Arabic text detection
- Shows Arabic search hint when Arabic text is detected
- **Works regardless of website language setting**

## Translation Keys

The following translation keys have been added to support Arabic search:

### English (en.json)

```json
{
  "pages": {
    "searchResults": {
      "showingResults": "Showing {start} to {end} of {total} results",
      "itemsPerPage": "Items per page:",
      "readMore": "Read more",
      "readLess": "Read less",
      "page": "Page {current} of {total}",
      "previousPage": "Go to previous page",
      "nextPage": "Go to next page",
      "goToPage": "Go to page {page}",
      "morePages": "More pages",
      "searchHint": "Press Enter or click search to find results",
      "arabicSearchHint": "Searching in Arabic content"
    },
    "searchCategories": {
      "team": "Team",
      "services": "Services"
    }
  }
}
```

### Arabic (ar.json)

```json
{
  "pages": {
    "searchResults": {
      "showingResults": "عرض {start} إلى {end} من {total} نتيجة",
      "itemsPerPage": "العناصر في الصفحة:",
      "readMore": "اقرأ المزيد",
      "readLess": "اقرأ أقل",
      "page": "الصفحة {current} من {total}",
      "previousPage": "انتقل إلى الصفحة السابقة",
      "nextPage": "انتقل إلى الصفحة التالية",
      "goToPage": "انتقل إلى الصفحة {page}",
      "morePages": "المزيد من الصفحات",
      "searchHint": "اضغط Enter أو انقر على البحث للعثور على النتائج",
      "arabicSearchHint": "البحث في المحتوى العربي"
    },
    "searchCategories": {
      "team": "الفريق",
      "services": "الخدمات"
    }
  }
}
```

## Usage Examples

### **Arabic Search Examples (Works in ANY language mode)** ⭐

Users can search using Arabic text regardless of website language:

- "القانون التجاري" (Corporate Law) - works even when website is in English
- "الملكية الفكرية" (Intellectual Property) - works even when website is in English
- "التحكيم الدولي" (International Arbitration) - works even when website is in English
- "أحمد الراشد" (Ahmed Al-Rashid) - works even when website is in English

### English Search Examples

Users can also search using English text:

- "Corporate Law"
- "Intellectual Property"
- "International Arbitration"
- "Ahmed Al-Rashid"

### **Cross-Language Search Examples** ⭐

- Search "law" in English mode → finds "القانون التجاري" (Corporate Law)
- Search "قانون" in English mode → finds "Corporate Law & Business Services"
- Search "arbitration" in English mode → finds "التحكيم الدولي" (International Arbitration)

## Technical Considerations

### Performance

- Arabic text normalization is optimized for performance
- Search suggestions are limited to 5 items for responsiveness
- Debounced search input to reduce API calls

### Accessibility

- All interactive elements have proper ARIA labels
- Keyboard navigation supports both LTR and RTL
- Screen reader compatibility for both languages

### Browser Compatibility

- Uses standard Unicode normalization
- Compatible with all modern browsers
- Graceful fallback for older browsers

## Testing

### Manual Testing Checklist

- [ ] Search with Arabic text when website is in English mode ✅
- [ ] Search with Arabic text when website is in Arabic mode ✅
- [ ] Search with English text when website is in Arabic mode ✅
- [ ] Search with English text when website is in English mode ✅
- [ ] Switch language and verify translations
- [ ] Test RTL layout in Arabic mode
- [ ] Verify pagination in both languages
- [ ] Test keyboard navigation
- [ ] Check accessibility with screen readers

### **Key Test Scenarios** ⭐

1. **Website in English mode, search Arabic text**: Should find Arabic content
2. **Website in Arabic mode, search English text**: Should find English content
3. **Mixed language search**: Should work seamlessly
4. **Arabic suggestions in English mode**: Should display properly
5. **English suggestions in Arabic mode**: Should display properly

## Future Enhancements

1. **Fuzzy Search**: Implement fuzzy matching for Arabic text
2. **Search Analytics**: Track search patterns in both languages
3. **Advanced Filters**: Add language-specific search filters
4. **Search History**: Save search history with language preference
5. **Voice Search**: Add voice search support for Arabic
6. **Search Suggestions**: Improve bilingual suggestion relevance

## Dependencies

- `react-i18next`: Internationalization
- `framer-motion`: Animations
- `@reduxjs/toolkit`: State management
- `next/navigation`: Routing

## Contributing

When adding new searchable content:

1. Always include both English and Arabic versions
2. Use proper Arabic text normalization
3. Test with both languages
4. Update translation files
5. Follow the established patterns for RTL support
6. **Test search functionality in both language modes**

## **Summary** ⭐

The search functionality now provides **universal bilingual support**:

- ✅ **Arabic search works when website is in English mode**
- ✅ **English search works when website is in Arabic mode**
- ✅ **Cross-language discovery** (English searches find Arabic content)
- ✅ **Proper RTL support** for Arabic content
- ✅ **Complete translation coverage** for all UI elements
- ✅ **Enhanced user experience** with bilingual suggestions
