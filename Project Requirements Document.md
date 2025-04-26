# Project Requirements Document: Wedding Album Auto-Creation Landing Page

**IMPORTANT NOTE**: This document has been superseded by the text content file named **"Wedding Album Texts"**. This file should only be used as a structured reference. All implementation should follow the content and language exactly as written in the complementary text file.

**Language**: Entire website must be in **Hebrew**.

## Functional Requirements Table with Fulfillment Status

**NOTE:** Requirements related to main page content (headlines, flow, storytelling, explanations, etc.) are now unified into a single requirement referencing the document **Site Main Page Text.md**.

**Fulfillment Status Legend:**

- **TODO** – Not yet started or not present on the site.
- **WIP** – In progress or partially implemented.
- **DONE** – Fully implemented and verifiable in the site structure.
- **DEPRECATED** - not relevant anymore
- **HOLD** - Written but shall not be fulfilled yet

| Requirement ID | Description | User Story | Expected Behavior/Outcome | Note | Fulfillment Status |
| FR001 | Follow main page text file | As a team, we want to follow finalized content | Follow content in the attached file | Reference: Site Main Page Text.md                         | DONE |
| FR002 | Secure payment | As a user, I want to pay safely | Show price summary, payment, and privacy checkbox | Replaced by FR012                                                      | DEPRECATED |
| FR003 | Display Google Reviews (Mock) | As a user, I want social proof | Show star rating and a few quotes | NONE                                                                     | DONE |
| FR004 | Contact information in footer | As a visitor, I want to easily contact the business | Footer includes email and WhatsApp links | NONE                                         | DONE |
| FR005 | Remove unwanted pages | As a user, I do not want to click a page but then nothing happens |  | NONE                                                                           | DONE |
| FR006 | Placeholders for images | As a team, we want to see a placeholder at image places to figure site look even we do not have final images yet |  | Some new image placeholders   | DONE |
| FR007 | Validate Purchase Intent | As a team I want to be sure user will pay for actual service. | Show price, CTA button, and email prompt on click. | Replaces FR007                | DONE |
| FR008 | Display Google Reviews (Real) | As a user, I want social proof | Show real reviews from Google | Will share doc when moved to TODO                                            | HOLD |
| FR009 | Placeholder with descriptive label | As a team, we want to show what missing images represent | Show placeholder with short text like "דוגמה לעיצוב אלבום" | NONE             | DEPRECATED |
| FR010 | Post validate Purchase Intent | As a team we also do not want to be rude | After user shows intent, pop up that we are not live yet and invite for waiting list|              | DONE |
| FR011 | Site text in separate files | As a developer, I want all text content organized in dedicated files | All text should be stored in separate markdown files | file per page     | DONE |
| FR012 | Remove success page | As a user, I expect logical navigation | Delete success page | Not relevant for waiting list only                                                       | DONE |
| FR013 | Remove redundant image labels | As a developer, I already understand the existing placeholders, and this has two | Remove the "דוגמה לעיצוב אלבום מודרני" | Image structure already clear without | DONE |
| FR014 | Update navigation styling | As a user, I want elegant navigation | No underlines on links; use color/subtle accents instead | Applies to all states                           | DONE |
| FR015 | Balance Story/Value section layout | As a user, I want visually balanced content | Implement true 50/50 split between text and image areas | fix layout only (not text)       | DONE |
| FR016 | Remove redundant step titles in "How It Works" section | As a user, I want to avoid reading the same title twice | Each description should start directly with the instruction content without repeating the step title | All 7 steps in "איך זה עובד?" | DONE |
| FR017 | Replace placeholder icons with actual album style images | As a user, I want to see what I'm purchasing before buying | Replace the small placeholder icons with the corresponding album photos from the image directory | Use shared images 2-4 in place of placeholders | DONE |
| FR018 | Match album style names with corresponding images | As a user, I want clear identification of album styles | Label each album option using correct Hebrew names: for leather, for linen, for basic | Names should correspond to actual physical material shown in images | DONE |
| FR019 | Remove placeholder image from Album Page Selection screen | As a user, I want a clean interface focused on selecting album options | Remove the sample image placeholder and its container from the album page selection screen | No images should appear in this section at all | DONE |
| FR020 | Remove decorative underlines from section headings | As a user, I want consistent heading styles across the site | Remove the brown/tan decorative underline elements below the section headers "לקוחות מספרים" and "לפני שאתם משלמים - חשוב שתדעו" | Affects multiple section headers across the site | DONE |
| FR021 | Ensure pricing consistency across all album selections | As a user, I want trustworthy pricing information | Make sure prices displayed on album selection cards match exactly with the prices shown in the order summary for all album types | Apply to all album types and page count options | DONE |
| FR022 | Simplify pre-payment information section | As a user, I want only essential payment information | Remove both "תמחור ותשלום" and "פרטיות ואבטחה" panels entirely and replace with a single, concise message about payment | Significantly reduce content under "לפני שאתם משלמים - חשוב שתדעו" section | DONE |
| FR023 | Fix floating satisfaction guarantee box position | As a user, I want a cohesive layout with clear section boundaries | Move the satisfaction guarantee text ("חשוב לדעת כי תוכלו לקבל החזר כספי מלא...") inside the main "הזמן אלבום חתונה" container | Text should appear within the white box, not floating underneath it | DONE |
| FR024 | Reorder album options for right-to-left pricing progression | As a Hebrew reader, I want to see options ordered from least to most expensive from right to left | Reorganize album cards so the cheapest option (₪499) is on the right, middle option (₪599) in the center, and most expensive option (₪649) on the left | Aligns with Hebrew reading direction and conventional price ordering | DONE |
| FR025 | Remove "צפו בדוגמה" tags from album images | As a user, I want a clean album selection interface | Remove all "צפו בדוגמה" tags overlaid on the album images in the album selection section | Apply to all three album style options | DONE |
| FR026 | Remove "Read more reviews" button | As a user, I want to see only the curated reviews on the site | Remove the "קראו עוד ביקורות בגוגל" button from the bottom of the reviews section | Keep existing review content, just remove the external link button | DONE |
| FR029 | Right-align phone number input field text | As a Hebrew user, I expect text fields to follow RTL alignment | Change text alignment in the phone number input field from left to right | Applies to the "מספר טלפון" field | TODO |
| FR030 | Simplify service status popup information | As a user, I want clear, concise messages without unnecessary details | Remove specific launch date information ("צפי להשקת השירות: מאי 2025") and simplify the message to only thank the user for their interest and confirm they'll be notified | Keep the email collection function but with simplified messaging | DONE |
| FR031 | Improve spacing and color consistency across page sections | As a user, I want a visually unified and well-spaced design | Standardize background color between hero section and content sections; increase vertical spacing between elements for better readability | Apply to hero section and "התמונות מהחתונה מתכות?" section | TODO |

## Final Note

All design, development, and implementation must be based on the wording, structure, and tone defined in the "Wedding Album Texts" document.
This file should serve only as a traceability reference for requirements.

