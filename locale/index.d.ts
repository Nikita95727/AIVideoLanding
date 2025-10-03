export interface LandingLocale {
  meta: {
    title: string
    description: string
    keywords: string
    ogTitle: string
    ogDescription: string
  }
  ctaPrimary: string
  hero: {
    eyebrow: string
    h1: string
    sub: string
    secondary: string
    mockup: string
    points: string[]
  }
  problem: { title: string; text: string }
  solution: { title: string; text: string }
  benefits: { title: string; items: Array<{ tag: string; title: string; text: string }> }
  advantages: { title: string; items: Array<{ title: string; text: string }> }
  final: { title: string; text: string }
  footer: { rights: string }
}


