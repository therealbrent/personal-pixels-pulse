# Reimagine the Career Timeline

## Goal
Replace the compressed horizontal chart with the selected neo-brutalist narrative timeline, making Brent’s full career readable, chronological, and compelling on every screen.

## Build
- Reframe the page introduction with a bold mustard-backed “Timeline” treatment while preserving the existing headline and supporting copy.
- Present roles newest-to-oldest in a vertical narrative track with large titles, clear employers, date ranges, employment type, descriptions, contributions, and projects.
- Keep consulting visually distinct and understandable alongside overlapping full-time roles.
- Add education as a clearly labeled final chapter rather than mixing it ambiguously into employment history.
- Preserve the existing detail drawer interaction where useful, with strong keyboard and screen-reader support.
- Use the established mustard, onyx, hot pink, oxblood, cobalt, and off-white tokens with thick borders and hard shadows.

## Technical details
- Simplify `CareerTimeline.tsx` by removing horizontal positioning, scroll controls, watermark, and tiny cards.
- Update `CareerTimelinePage.tsx` to support the selected editorial header treatment.
- Reuse existing career data without changing its content.
- Keep animations restrained and disable them when reduced motion is requested.
- Validate desktop and mobile layouts, interactions, accessibility basics, and the live build.
