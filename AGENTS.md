# Project conventions

- Keep visual refinements in existing shared components and global layout utilities; retain route-specific content and the established SSR/prerender/SEO architecture to avoid duplicated page systems.
- Reveal independently positioned content with its own viewport trigger; avoid a shared trigger that can stay offscreen on phones, and use vertical motion where horizontal transforms would overflow tablet layouts.
- Keep button labels wrap-safe and mobile navigation independently scrollable so existing destinations remain usable on narrow or short screens.
- Render dropdown destination links with Radix's `asChild` so pointer and keyboard selection activate the same link; keep testimonial rotation optional and disabled under reduced motion.
- Use src/config/resourceLinks.ts for the repeated buyer-guide and market-report destinations; keep unique guides and area-filtered searches local because their targets and behavior differ.
- Use src/lib/blogDate.ts for machine-readable article publication dates while retaining the existing displayed dates; reject invalid input instead of inventing a date.