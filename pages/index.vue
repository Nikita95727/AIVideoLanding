<template>
  <main>
    <Head>
      <Title>{{ t.meta.title }}</Title>
      <Meta name="description" :content="t.meta.description" />
      <Meta name="keywords" :content="t.meta.keywords" />
      <Meta name="google-site-verification" content="G7SKoVRUHs-Skaf5oYvan-2iFnXsAvYA-uaftVi5Yto" />
      <Meta property="og:title" :content="t.meta.ogTitle" />
      <Meta property="og:description" :content="t.meta.ogDescription" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" :content="canonicalUrl" />
      <Meta property="og:image" content="/og.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" :content="t.meta.ogTitle" />
      <Meta name="twitter:description" :content="t.meta.ogDescription" />
      <Link rel="canonical" :href="canonicalUrl" />
      <Link rel="alternate" hreflang="x-default" :href="canonicalBase" />
      <template v-for="l in hreflangs" :key="l.href">
        <Link rel="alternate" :href="l.href" :hreflang="l.lang" />
      </template>
    </Head>

    <!-- Header -->
    <header class="sticky top-0 z-40 bg-surface-900/70 backdrop-blur supports-[backdrop-filter]:glass border-b border-white/5">
      <div class="container-responsive py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <svg class="h-8 w-8 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
        <span class="font-semibold text-white">InVideo AI</span>
      </div>
      <div class="flex items-center gap-3">
        <select v-model="lang" class="bg-slate-800/70 text-slate-100 border border-white/10 rounded-lg px-3 py-2 text-sm">
          <option v-for="code in languageCodes" :key="code" :value="code">{{ code.toUpperCase() }}</option>
        </select>
        <button id="main-cta" @click="onCtaClick" class="cta-btn">{{ t.ctaPrimary }}</button>
      </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="hero-wrap">
      <div class="container-responsive pt-8 pb-12 sm:pt-14 sm:pb-18">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-7 space-y-5">
          <div class="flex items-center gap-2">
            <span class="eyebrow">{{ t.prelander?.badge || 'Pre-lander review' }}</span>
            <span class="text-xs text-slate-400">{{ t.prelander?.note || 'Independent overview. No credit card required.' }}</span>
          </div>
          <div class="eyebrow">{{ t.hero.eyebrow }}</div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            {{ t.hero.h1 }}
          </h1>
          <p class="text-slate-300/90 text-base sm:text-lg">{{ t.hero.sub }}</p>
          <div class="flex items-center gap-3">
            <button @click="onCtaClick" class="cta-btn">{{ t.ctaPrimary }}</button>
            <button @click="scrollToBenefits" class="text-slate-300 hover:text-white text-sm sm:text-base underline underline-offset-4">{{ t.hero.secondary }}</button>
          </div>
          <ul class="text-slate-400 text-sm list-disc pl-5 space-y-1">
            <li>{{ t.hero.points[0] }}</li>
            <li>{{ t.hero.points[1] }}</li>
            <li>{{ t.hero.points[2] }}</li>
          </ul>
        </div>
        <div class="lg:col-span-5">
          <div class="aspect-video rounded-3xl glass flex items-center justify-center text-slate-300 shadow-elev-2">
            <span class="text-center px-6">{{ t.hero.mockup }}</span>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- Problem / Solution -->
    <section class="container-responsive py-12 sm:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold mb-3">{{ t.problem.title }}</h2>
          <p class="text-slate-300">{{ t.problem.text }}</p>
        </div>
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold mb-3">{{ t.solution.title }}</h2>
          <p class="text-slate-300">{{ t.solution.text }}</p>
        </div>
      </div>
    </section>

    <!-- 3 Benefits -->
    <section ref="benefitsRef" class="container-responsive py-12 sm:py-16">
      <h2 class="text-2xl sm:text-3xl font-bold mb-8">{{ t.benefits.title }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(b, i) in t.benefits.items" :key="i" class="rounded-2xl p-6 bg-slate-900/60 ring-1 ring-white/10">
          <div class="eyebrow mb-2">{{ b.tag }}</div>
          <h3 class="text-xl font-semibold mb-1">{{ b.title }}</h3>
          <p class="text-slate-400">{{ b.text }}</p>
        </div>
      </div>
    </section>

    <!-- Social Proof / Metrics -->
    <section class="container-responsive py-10">
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="text-3xl font-extrabold text-white">2M+</div>
          <div class="text-xs text-slate-400">videos generated</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-extrabold text-white">1,000+</div>
          <div class="text-xs text-slate-400">retention templates</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-extrabold text-white">40%</div>
          <div class="text-xs text-slate-400">avg. watch-time lift</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-extrabold text-white">150+</div>
          <div class="text-xs text-slate-400">countries supported</div>
        </div>
      </div>
    </section>

    <!-- Advantages -->
    <section class="container-responsive py-12 sm:py-16">
      <h2 class="text-2xl sm:text-3xl font-bold mb-8">{{ t.advantages.title }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(a, i) in t.advantages.items" :key="i" class="rounded-2xl p-6 bg-slate-900/60 ring-1 ring-white/10">
          <h3 class="text-lg font-semibold mb-1">{{ a.title }}</h3>
          <p class="text-slate-400">{{ a.text }}</p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="container-responsive py-12 sm:py-16">
      <h2 class="text-2xl sm:text-3xl font-bold mb-6">{{ t.faqTitle || 'Frequently asked questions' }}</h2>
      <div class="space-y-4">
        <details class="rounded-2xl glass p-5">
          <summary class="cursor-pointer font-semibold">{{ t.faq?.q1 || 'Can I generate multiple Shorts at once?' }}</summary>
          <p class="text-slate-300 mt-2">{{ t.faq?.a1 || 'Yes — queue prompts and templates to generate and edit in batches.' }}</p>
        </details>
        <details class="rounded-2xl glass p-5">
          <summary class="cursor-pointer font-semibold">{{ t.faq?.q2 || 'Will captions and brand kit apply automatically?' }}</summary>
          <p class="text-slate-300 mt-2">{{ t.faq?.a2 || 'Auto-captions support emojis and highlight styles; brand kit persists across videos.' }}</p>
        </details>
        <details class="rounded-2xl glass p-5">
          <summary class="cursor-pointer font-semibold">{{ t.faq?.q3 || 'Which platforms are supported?' }}</summary>
          <p class="text-slate-300 mt-2">{{ t.faq?.a3 || 'YouTube Shorts, TikTok, and Instagram Reels with perfect exports.' }}</p>
        </details>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="container-responsive py-12 sm:py-20">
      <div class="rounded-3xl bg-gradient-to-br from-primary-900/50 to-primary-700/30 ring-1 ring-white/10 p-8 text-center">
        <h2 class="text-2xl sm:text-3xl font-bold mb-4">{{ t.final.title }}</h2>
        <p class="text-slate-200 mb-6">{{ t.final.text }}</p>
        <button @click="onCtaClick" class="cta-btn text-base sm:text-lg">{{ t.ctaPrimary }}</button>
      </div>
    </section>

    <footer class="container-responsive py-8 text-center text-xs text-slate-500">
      <p>© {{ new Date().getFullYear() }} InVideo AI – {{ t.footer.rights }}</p>
      <p class="mt-2 text-slate-500">{{ t.prelander?.disclaimer || 'This is an independent pre-lander. By continuing you may be redirected to the official InVideo free trial page via an affiliate link.' }}</p>
    </footer>
  </main>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const languageCodes = [
  'en','es','zh','hi','fr','ar','pt','ru','de','ja','uk'
]

const defaultLang = 'en'
const lang = ref<string>((route.query.lang as string) || defaultLang)

const canonicalBase = 'https://invideo-ai-landing.example.com'
const canonicalUrl = computed(() => `${canonicalBase}/?lang=${lang.value}`)

const hreflangs = computed(() => languageCodes.map(code => ({
  lang: code,
  href: `${canonicalBase}/?lang=${code}`
})))

const t = reactive<any>({
  meta: { title: 'InVideo AI', description: '', keywords: '', ogTitle: '', ogDescription: '' },
  ctaPrimary: 'Start free trial + Get exclusive bonus',
  hero: { eyebrow: '', h1: '', sub: '', secondary: '', mockup: '', points: [] },
  problem: { title: '', text: '' },
  solution: { title: '', text: '' },
  benefits: { title: '', items: [] },
  advantages: { title: '', items: [] },
  final: { title: '', text: '' },
  footer: { rights: '' }
})

const ctaHref = computed(() => {
  const base = runtimeConfig.public.affiliateBaseUrl
  const params = runtimeConfig.public.affiliateParams
  return `${base}?${params}&lang=${lang.value}`
})

function onCtaClick() {
  try {
    const ts = Date.now()
    const url = new URL(ctaHref.value)
    url.searchParams.set('plang', lang.value)
    url.searchParams.set('pts', String(ts))
    window.location.href = url.toString()
  } catch {
    window.location.href = ctaHref.value
  }
}

async function loadLocale(code: string) {
  const mod = await import(`../locale/${code}.js`)
  const data = mod.default
  Object.assign(t, data)
}

onMounted(async () => {
  if (!languageCodes.includes(lang.value)) {
    lang.value = defaultLang
  }
  await loadLocale(lang.value)
})

watch(lang, async (val) => {
  await loadLocale(val)
  router.replace({ query: { ...route.query, lang: val } })
})

const benefitsRef = ref<HTMLElement | null>(null)
function scrollToBenefits() {
  benefitsRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// SEO: set <html lang> and RTL where needed
useHead(() => ({
  htmlAttrs: {
    lang: lang.value,
    dir: ['ar'].includes(lang.value) ? 'rtl' : 'ltr'
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'InVideo AI',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'InVideo AI Landing',
        url: canonicalBase,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${canonicalBase}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
}))
</script>

<style scoped>
</style>

