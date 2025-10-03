Locales are custom, SEO-friendly i18n objects used without any i18n library.

Usage:
- The page dynamically imports `locale/<code>.js` based on `?lang=` query.
- Keep keys aligned with `locale/index.d.ts`.
- Add RTL awareness for languages like `ar` via `pages/index.vue` `useHead`.

