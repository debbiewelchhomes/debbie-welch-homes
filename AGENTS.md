# Project conventions

- Keep visual refinements in existing shared components and global layout utilities; retain route-specific content and the established SSR/prerender/SEO architecture to avoid duplicated page systems.
- Keep button labels wrap-safe and mobile navigation independently scrollable so existing destinations remain usable on narrow or short screens.
- Use src/config/resourceLinks.ts for the repeated buyer-guide and market-report destinations; keep unique guides and area-filtered searches local because their targets and behavior differ.