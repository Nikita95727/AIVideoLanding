export default defineEventHandler((event) => {
  const baseUrl = 'https://ai-video-landing.vercel.app'
  const languages = ['en', 'es', 'zh', 'hi', 'fr', 'ar', 'pt', 'ru', 'de', 'ja', 'uk']
  
  const urls = languages.map(lang => {
    return `  <url>
    <loc>${baseUrl}/?lang=${lang}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${lang === 'en' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${baseUrl}/?lang=${lang}"/>
  </url>`
  }).join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})

