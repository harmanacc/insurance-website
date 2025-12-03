# Hero Block Cards Modification

## Description

Modify the HeroBlock component to embed cards data directly within the component for easier maintenance. Create a new layout with cards dead center on desktop: 3 rows - Row 1: double card up left + 2 normal; Row 2: 2 normal + double for important card; Row 3: 4 normal. Important cards ("بیمه عمر" and "بیمه بازنشستگی") are the doubles, sized 2x (size-72 vs size-36).

## Steps

1. Review current HeroBlock Component.tsx and types.ts to understand structure.
2. Define row-based card arrays with size properties (normal/double).
3. Implement 4-column grid layout with col-span-2 for doubles.
4. Ensure mobile and desktop responsiveness, and follow SEO best practices.

## Tasklist

- [x] Review HeroBlock types and current implementation
- [x] Update card data arrays for new layout
- [x] Modify grid to 4-column with spans
- [x] Apply size-36 for normal, size-72 for double
- [x] Test responsiveness (though not running server)
