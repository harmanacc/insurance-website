# Fix HTML Nesting Error

## Description

Fixed the invalid HTML nesting issue where a <div> element was nested inside a <p> element, causing hydration errors in React due to invalid DOM structure.

## Steps

1. Identified the problematic code in `src/Footer/Component.tsx` at line 25-47, where a <div> containing contact info was nested inside a <p> element.
2. Replaced the outer <p> element with a <div> element to allow proper nesting of block-level elements.
3. Ensured the CSS classes and styling remained intact to maintain the visual appearance.

## Tasklist

[x] Locate the HTML nesting violation in the footer component.
[x] Replace <p> with <div> to fix the invalid nesting.
[x] Confirm the change resolves the hydration mismatch error.
