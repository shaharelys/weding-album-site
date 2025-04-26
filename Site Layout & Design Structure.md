### Site Layout & Design Structure

---

## 🧱 General Layout

The site is a **single-page layout (one-pager)**, fully responsive, composed of sequential visual sections. Each section has generous vertical spacing and clearly separated background tones for clarity.

---

### 1. ניווט עליון
- Sticky top navbar with white background.
- Right-aligned logo (text-based).
- Left-aligned nav links: Home, How it Works, Pricing, Contact.
- Font is clean and minimal (sans-serif).
- **Active page indicated by color change or subtle bottom accent, never with a full underline.**
- **No underlines on any navigation links, including on hover states.**

---

### 2. כותרת פתיחה (Hero) (static)
- Full-width container with a dark gray background.
- Centered white text: headline, short description, CTA button.
- CTA button in peach color with rounded corners.
- No images; purely typographic intro section.

---

### 3. סיפור הבעיה / הצעת ערך (static)
- White background with two clearly defined sides.
- On the right side: black/bold text blocks. Two paragraphs explaining the problem and emotional value. Generous padding.
- On the left side: a single image.
- **Both sides must have equal width (50/50 split) for proper balance.**
- **Content should be vertically centered within each side.**
- **Maintain consistent margins between the text and image sections.**
- **Text should be properly aligned (right-aligned for Hebrew) with clear paragraph spacing.**

---

### 4. איך זה עובד (static)
- Section title centered at top.
- 7 step cards displayed in sequence, one below the other.
- Each card:
  - Small and elegant
  - White background, subtle shadow
  - Circular step number at top (brown background, white text)
  - Step title (bold)
  - **Short description that doesn't redundantly repeat the step title**
  - **Each description should provide unique information about the step**
- All cards use equal width/height.

---

### 5. המלצות משתמשים (static)
- Centered title: star rating + total review count.
- **Displays 3 horizontally arranged testimonial cards (not 2 as previously specified).**
- Each card includes:
  - Name, date, avatar with initials in colored circle.
  - Yellow stars rating (5/5).
  - Short paragraph.
- Clean design with shadows and rounded corners.
- **No "Read more reviews" button needed - all testimonials should be visible on the page.**
- **Card scrolling/pagination indicated by subtle dots below the testimonials.**

---

### 6. בחירת סגנון אלבום (static)
- Title centered.
- 3 cards horizontally aligned (Vintage, Modern, Classic).
- Each card contains:
  - Subheading: Album name and style
  - **Sample album image displayed directly in the card (no "View sample" button needed)**
  - Short description of the style
  - Starting price in bold
  - Button: "Select" ("בחירה")
- Light peach/pink background in card headers.
- Layout adjusts responsively for mobile.
- Only three styles should be presented to avoid visual clutter.

---

### 7. הזמנת אלבום (Opens after album selection)
- This section opens only **after** a user selects an album style.
- Page count selector should allow choosing only: **30, 50, or 70** pages.
- Displays calculated price based on selected page count.
- Note: shows crossed-out base price and final price including printing & shipping.
- Highlights photo estimate (e.g., ~84 photos).

---

### 8. לפני שאתם משלמים (Opens after album selection)
- Clean, organized section with tabbed categories.
- Three clear categories with icons: Payment Terms, Return Policy, Privacy.
- Each category minimal bullet points with checkmarks.
- **Information must be concise - no lengthy explanations and only taken from a respective text file as described in FR011.**
- **Uses visual hierarchy with colored borders to distinguish categories.**
- **Important notices highlighted in light blue info boxes.**
- **All text must be brief and scannable.**

---

### 9. העלאת תמונות + טופס פרטים (Opens after album selection)
- Opens after previous step is completed.
- Section includes:
  - Google Drive link input
  - Full name, email, phone, shipping address
  - Notes about max 5000 photos and permission requirements
- Includes a short visual explanation of next steps (select photos, approve, print).

---

### 10. צור קשר (static)
- Static section at the end of the page.
- Shows WhatsApp, Email, and Operating Hours.
- Centered layout with icons and clean spacing.

---

### 11. קריאה לפעולה תחתונה (static)
- Light beige background across full width.
- Centered motivational line in large bold font.
- CTA button: peach background with white text.
- Padding ensures clear visual separation from footer.

---

## 📌 Global Design Rules

### Link Hover Behavior
All text links across the site (especially in the top navigation) should **not display a default underline on hover**.  
Instead, use a **more elegant and branded hover effect**, such as:
- Subtle color transition on hover  
- Optional animated bottom border or highlight  
- The interaction should feel modern, smooth, and minimal — consistent with the site’s clean aesthetic

This applies globally to all links unless a specific exception is documented.

