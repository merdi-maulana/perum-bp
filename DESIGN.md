# Design System Document: The Organic Sanctuary

## 1. Overview & Creative North Star

Affordable housing often suffers from a "utilitarian" aesthetic that feels rigid and institutional. This design system rejects that narrative. Our Creative North Star is **"The Living Canvas."**

We are moving away from the "boxed-in" layout of traditional real estate portals. Instead, we treat the interface as a serene, breathable landscape. By utilizing **intentional asymmetry, expansive white space, and tonal layering**, we create an experience that feels premium, trustworthy, and aspirational. We aren't just selling "subsidy housing"; we are presenting a dignified, modern lifestyle.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule

The palette is rooted in nature, designed to evoke the feeling of a sun-drenched garden.

### Color Tokens (Material Design 3 Mapping)

- **Primary (`#096138` / `#2D7A4F`):** The anchor. Used for high-level branding and primary actions.
- **Surface / Background (`#F9F9FF`):** A slightly cooled white to prevent eye strain.
- **Surface-Container-Low (`#F0F3FF`):** For large secondary sections.
- **Surface-Container-Highest (`#DCE2F3`):** For subtle emphasis without using borders.

### The "No-Line" Rule

**Explicit Instruction:** Do not use 1px solid borders to define sections. Layout boundaries must be established solely through background color shifts. For example, a card using `surface-container-lowest` (#FFFFFF) should sit on a `surface-container-low` (#F0F3FF) background.

### Signature Textures

To elevate the UI beyond "standard flat," apply a linear gradient to Primary buttons: `linear-gradient(135deg, #2D7A4F 0%, #096138 100%)`. This subtle shift mimics the way light hits a leaf, adding organic "soul" to the component.

---

## 3. Typography: Editorial Authority

We use a high-contrast scale to create an editorial feel, making the information feel curated rather than just listed.

- **Display (Plus Jakarta Sans):** Use `display-lg` (3.5rem) for hero statements. The generous kerning and Bold weight convey confidence.
- **Headings (Plus Jakarta Sans):** `headline-md` (1.75rem) should be used for section titles, paired with a Primary Green color to draw the eye.
- **Body (Inter):** `body-lg` (1rem) is the workhorse. Inter’s tall x-height ensures maximum legibility for property details and legal fine print.
- **Labels (Inter):** Use `label-md` (0.75rem) in Medium weight for metadata (e.g., "Ready Stock," "Type 36").

---

## 4. Elevation & Depth: The Layering Principle

Depth is achieved through **Tonal Stacking** and **Atmospheric Perspective** rather than structural lines.

- **The Layering Principle:** Treat the UI as sheets of fine paper. A `surface-container-lowest` card placed on a `surface-container-low` section creates a soft, natural lift.
- **Ambient Shadows:** For floating elements (like a "Book Now" sticky bar), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(26, 26, 26, 0.06)`. The shadow color is a faint tint of the `on-surface` color, not pure black.
- **The "Ghost Border":** If a container requires definition against an identical background, use `outline-variant` (#BFC9BF) at **15% opacity**. It should be felt, not seen.
- **Glassmorphism:** Use `backdrop-filter: blur(12px)` on navigation bars and floating chips with a semi-transparent `surface` color. This integrates the UI into the background imagery.

---

## 5. Components: Soft & Intentional

### Buttons

- **Primary:** `rounded-2xl` (1rem). High-contrast text (`on-primary`).
- **Secondary:** Ghost style. No background, `outline-variant` ghost border, `primary` text color.
- **WhatsApp CTA:** Use `#25D366` with a soft glow shadow of the same color (10% opacity) to signify urgency and accessibility.

### Cards & Property Lists

- **Constraint:** Forbid the use of divider lines between list items. Use vertical white space (`2rem` spacing) or alternating subtle background shifts.
- **Geometry:** Always use `rounded-xl` (3rem) for image containers to soften the "industrial" feel of construction photos.

### Chips (Badges)

- **Status Chips:** Use `secondary-container` (#92F7C3) with `on-secondary-container` (#00734D) text. These should have a `full` (9999px) corner radius to contrast with the `2xl` corners of the cards.

### Input Fields

- **State:** Default state uses `surface-container-high`. On focus, transition to `surface-container-lowest` with a 2px `primary` bottom-border only. This keeps the form feeling light and "unboxed."

---

## 6. Do’s and Don’ts

### Do:

- **Embrace Asymmetry:** Place a heading on the left and a subtext paragraph slightly offset to the right. It feels human and designed.
- **Use Imagery as Backgrounds:** Let property photos bleed behind the navigation (using the Glassmorphism rule) to create immersion.
- **Whitespace is Content:** Treat empty space as a luxury feature. It suggests the "serenity" mentioned in the brand theme.

### Don’t:

- **Don't use "Card-in-Card" layouts:** If you need to nest information, use a typography shift or a simple icon instead of creating another container.
- **Don't use 100% Black:** Always use `on-surface` (#151C27) for text. Pure black (#000000) is too harsh for a "Natural Green" theme.
- **Don't use standard "Drop Shadows":** If it looks like a default Photoshop shadow, it’s wrong. It must be blurred, faint, and expansive.

---

## 7. Roundedness Scale

- **sm:** 0.5rem (Inner components like checkboxes/tags)
- **DEFAULT:** 1rem (Buttons, Input fields)
- **md:** 1.5rem (Small cards)
- **lg:** 2rem (Standard property cards)
- **xl:** 3rem (Feature blocks, Hero images)
