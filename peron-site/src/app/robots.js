export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://peron-alenaist.vercel.app/sitemap.xml',
  }
} 