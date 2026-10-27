# Infrastructure inventory (read-only, no changes made)

## Findings with evidence

**Backend type: Lovable Cloud, not an owner-managed Supabase account.**
- Evidence: the platform's project info reports "Managed by Lovable: true" and "Backend: Lovable Cloud". The website's settings file and the frontend settings point to the same single instance (one instance serves both preview and the live site).
- Control: the underlying account sits in a Lovable-managed organization. No owner-held Supabase login or organization membership for Debbie is visible. The database password and service-role key cannot be accessed on Lovable Cloud.
- Size: Tiny instance, currently running (not paused).

**Server functions:** one function in the code, `send-contact-email`. It uses two configuration names: `RESEND_API_KEY` and `RESEND_FROM`. Only `RESEND_API_KEY` appears in the stored secret list; `RESEND_FROM` is not stored, so the code must be using a built-in fallback. Other stored names (`LOVABLE_API_KEY`, `SUPABASE_*`) are platform-provided. No values were read.
- The function only accepts requests from an allowed list of web addresses that includes `debbie-welch-homes.lovable.app`, plus any `lovable.app` or `lovableproject.com` address. A new host or custom domain must be added to this list, or the forms will be refused.

**Database / storage:** no database functions, triggers, or file-storage buckets. Leads are sent by email and never stored. There are no migration files in the code.

**Frontend assets:** all 30 images are bundled from the code's own image folder. No Lovable-hosted images, asset links, or storage links were found in the site's code, public files, or page template.
- Lovable build-time dependency: `lovable-tagger`, a development-only helper loaded in `vite.config.ts`. It does not run on the live site, but the package must still install for builds to work, or the line must be removed.

**Hosting:** the site is currently unpublished. Its address would be `debbie-welch-homes.lovable.app`, and no custom domain is attached. The site relies on its prerender build script, so any new host must run the same production build.

## What is in GitHub vs. only on the live backend
- In the code (and in GitHub, if the sync is working): the whole website, the email function's code, the SEO scripts, and the project ID in the settings file.
- Only on the backend, not in GitHub: secret values (including the Resend key), the deployed copy of the function, auth/email settings, and the backend account itself.

## Unknowns (not verified)
- Whether the deployed function exactly matches the code (the deployed version was not compared).
- Resend account ownership and domain verification status (it lives outside this project).
- Whether `RESEND_FROM` is set somewhere other than the stored secret list.
- GitHub sync status and repository ownership.
- Whether a backend export is complete. There is no data to move, but the function and secrets would have to be recreated by hand.

## Conclusion
The contact forms depend on Lovable Cloud and the Lovable-held Resend key. If Lovable were cancelled without first moving these, the forms would stop working. Nothing here proves it is safe to cancel.

## Proposed next step (only if approved)
No changes. If wanted later, a separate plan would cover: creating an owner-owned backend account, redeploying the email function, re-entering the Resend key, updating the allowed web addresses, and removing `lovable-tagger`.
