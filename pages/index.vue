<template>
  <main>
    <!-- Fixed Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-100 transition-all duration-300">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 sm:h-20">
          <div class="flex items-center space-x-3">
            <div class="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl shadow-lg">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="text-lg sm:text-xl font-bold text-neutral-900">InVideo AI</span>
          </div>
          <div class="relative">
            <button @click="langOpen = !langOpen" class="flex items-center space-x-2 px-3 py-2 sm:px-4 sm:py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-all focus:outline-none focus:ring-2 focus:ring-primary/50">
              <span class="text-lg">{{ languageFlags[lang] }}</span>
              <span class="hidden sm:inline">{{ languageNames[lang] }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-show="langOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-neutral-100 py-2 max-h-96 overflow-y-auto">
              <button v-for="code in languageCodes" :key="code" @click="lang = code; langOpen = false" :class="{'bg-primary text-white font-semibold': lang === code, 'text-neutral-700 hover:bg-neutral-50': lang !== code}" class="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-left transition-colors">
                <span class="text-lg">{{ languageFlags[code] }}</span>
                <span>{{ languageNames[code] }}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-50/50 to-accent/5 -z-10"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
      
      <div class="section-container">
        <div class="max-w-5xl mx-auto text-center space-y-8">
          <div class="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-full">
            <svg class="w-5 h-5 text-accent animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm font-bold text-accent uppercase tracking-wide">🔥 {{ t.hero?.badge || 'Limited Time Offer' }}</span>
          </div>

          <h1 class="heading-xl text-neutral-900 px-4">
            {{ t.hero?.h1 || 'Stop Wasting Hours:' }}
            <span class="text-gradient block mt-2">{{ t.hero?.h1sub || 'Create 10 Viral Shorts in 20 Minutes with InVideo AI' }}</span>
          </h1>

          <p class="text-lg sm:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed px-4">
            {{ t.hero?.sub || 'The revolutionary AI-powered tool that turns your ideas into professional viral videos in seconds. No editing skills required.' }}
          </p>

          <div class="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-4">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span class="text-sm sm:text-base font-semibold text-neutral-700">4.9/5 Stars (10,000+ Reviews)</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <span class="text-sm sm:text-base font-semibold text-neutral-700">5M+ Happy Creators</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-sm sm:text-base font-semibold text-neutral-700">100% Free Trial</span>
            </div>
          </div>

          <div class="pt-6 space-y-4">
            <button @click="onCtaClick" class="btn-primary text-lg sm:text-xl px-10 py-5 sm:px-12 sm:py-6 shadow-2xl hover:shadow-primary/60 group">
              <span class="flex items-center space-x-3">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>{{ t.ctaPrimary || 'Start Free Trial + Get Exclusive Bonus' }}</span>
              </span>
            </button>
            <p class="text-sm text-neutral-500">✓ No credit card required  ✓ Cancel anytime  ✓ Full access</p>
          </div>

          <div class="mt-12 relative group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white transform group-hover:scale-105 transition-transform duration-300">
              <div class="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <div class="text-center space-y-4">
                  <div class="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                    <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                    </svg>
                  </div>
                  <p class="text-white font-semibold text-lg">Watch Demo Video</p>
                </div>
              </div>
            </div>
            <div class="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-accent rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity -z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="section-container">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16 space-y-6">
            <h2 class="heading-lg text-neutral-900">
              <span class="text-red-600">{{ t.problem?.title || 'Sound Familiar?' }}</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div v-for="item in (t.problem?.items || defaultProblems)" :key="item" class="p-10 bg-red-50 border-2 border-red-100 rounded-3xl">
                <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <p class="text-neutral-700 font-semibold text-lg leading-relaxed">{{ item }}</p>
              </div>
            </div>
          </div>

          <div class="flex justify-center my-16">
            <svg class="w-16 h-16 text-primary animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          <div class="text-center space-y-6">
            <h2 class="heading-lg text-neutral-900">
              <span class="text-gradient">{{ t.solution?.title || 'InVideo AI Solves Everything' }}</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div v-for="item in (t.solution?.items || defaultSolutions)" :key="item" class="p-10 bg-gradient-to-br from-primary/5 to-purple-50 border-2 border-primary/20 rounded-3xl hover:shadow-xl transition-shadow">
                <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p class="text-neutral-800 font-bold text-lg leading-relaxed">{{ item }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section ref="benefitsRef" class="py-16 sm:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div class="section-container">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center space-y-4">
            <h2 class="heading-lg text-neutral-900">{{ t.benefits?.title || 'Why Top Creators Choose InVideo AI' }}</h2>
            <p class="text-xl text-neutral-600 max-w-3xl mx-auto">Join millions of content creators who are already 10x-ing their output</p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div v-for="(item, idx) in (t.benefits?.items || defaultBenefits)" :key="idx" class="relative group flex">
              <div class="h-full w-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-100 group-hover:border-primary/30 flex flex-col">
                <div class="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="idx === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    <path v-else-if="idx === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h3 class="text-2xl font-bold text-neutral-900 mb-4">{{ item.title }}</h3>
                  <p class="text-neutral-600 leading-relaxed mb-6">{{ item.text }}</p>
                </div>
                <div class="pt-4 border-t border-neutral-100 mt-auto">
                  <p class="text-3xl font-black text-gradient">{{ item.stat }}</p>
                  <p class="text-sm text-neutral-500 mt-1">{{ item.statLabel }}</p>
                </div>
              </div>
              <div class="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages/Features Section -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="section-container">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center space-y-4">
            <h2 class="heading-lg text-neutral-900">{{ t.advantages?.title || 'Everything You Need to Go Viral' }}</h2>
            <p class="text-xl text-neutral-600 max-w-3xl mx-auto">Powerful AI features that make video creation effortless</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="item in (t.advantages?.items || defaultAdvantages)" :key="item.title" class="flex items-start space-x-4 p-6 bg-gradient-to-br from-neutral-50 to-white rounded-2xl hover:shadow-lg transition-all border border-neutral-100">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold text-neutral-900 mb-2">{{ item.title }}</h3>
                <p class="text-neutral-600">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 sm:py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div class="section-container">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center space-y-4">
            <h2 class="heading-lg text-neutral-900">Join Thousands of Successful Creators</h2>
            <p class="text-xl text-neutral-600">Real results from real people</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="item in (t.testimonials || defaultTestimonials)" :key="item.name" class="p-8 bg-white rounded-2xl shadow-lg border border-neutral-100 flex flex-col">
              <div class="flex space-x-1 mb-4">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <p class="text-neutral-700 mb-6 italic leading-relaxed">"{{ item.text }}"</p>
              </div>
              <div class="flex items-center space-x-3 mt-auto">
                <div class="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {{ item.name[0] }}
                </div>
                <div>
                  <p class="font-semibold text-neutral-900">{{ item.name }}</p>
                  <p class="text-sm text-neutral-500">{{ item.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 sm:py-20 bg-white">
      <div class="section-container">
        <div class="max-w-4xl mx-auto space-y-12">
          <div class="text-center space-y-4">
            <h2 class="heading-lg text-neutral-900">Frequently Asked Questions</h2>
          </div>
          
          <div class="space-y-4">
            <details v-for="item in (t.faq?.items || defaultFaq)" :key="item.q" class="group p-6 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-primary/30 transition-colors">
              <summary class="flex justify-between items-center cursor-pointer list-none">
                <h3 class="text-lg font-semibold text-neutral-900 pr-4">{{ item.q }}</h3>
                <svg class="w-6 h-6 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p class="mt-4 text-neutral-600 leading-relaxed">{{ item.a }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 bg-neutral-900 text-neutral-400">
      <div class="section-container">
        <div class="max-w-6xl mx-auto text-center space-y-6">
          <div class="flex items-center justify-center space-x-3 mb-6">
            <div class="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="text-xl font-bold text-white">InVideo AI</span>
          </div>
          
          <p class="text-sm max-w-2xl mx-auto">
            {{ t.footer?.disclaimer || 'This is an independent promotional page. InVideo AI is a registered trademark. This page is not officially affiliated with InVideo but promotes their excellent product through an affiliate partnership. All product claims are based on verified user testimonials and platform capabilities.' }}
          </p>
          
          <div class="pt-6 border-t border-neutral-800">
            <p class="text-sm">© 2025 {{ t.footer?.rights || 'InVideo AI Pre-lander. All rights reserved.' }}</p>
          </div>
          
          <div class="pt-4">
            <p class="text-xs mb-3">Available in 11 languages:</p>
            <div class="flex flex-wrap justify-center gap-2">
              <button v-for="code in languageCodes" :key="code" @click="lang = code" :class="{'bg-primary text-white font-semibold': lang === code, 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700': lang !== code}" class="px-3 py-1.5 text-xs rounded-lg transition-colors">
                {{ languageFlags[code] }} {{ languageNames[code] }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const router = useRouter()

const languageCodes = ['en','es','zh','hi','fr','ar','pt','ru','de','ja','uk']

const languageFlags = {
  en: '🇺🇸', es: '🇪🇸', zh: '🇨🇳', hi: '🇮🇳', fr: '🇫🇷',
  ar: '🇸🇦', pt: '🇧🇷', ru: '🇷🇺', de: '🇩🇪', ja: '🇯🇵', uk: '🇺🇦'
}

const languageNames = {
  en: 'English', es: 'Español', zh: '中文', hi: 'हिन्दी', fr: 'Français',
  ar: 'العربية', pt: 'Português', ru: 'Русский', de: 'Deutsch', ja: '日本語', uk: 'Українська'
}

const defaultLang = 'en'
const lang = ref(typeof route.query.lang === 'string' ? route.query.lang : defaultLang)
const langOpen = ref(false)

const canonicalBase = 'https://invideo-ai-landing.example.com'
const canonicalUrl = computed(() => `${canonicalBase}/?lang=${lang.value}`)

const hreflangs = computed(() => languageCodes.map(code => ({
  lang: code,
  href: `${canonicalBase}/?lang=${code}`
})))

const t = reactive({
  meta: { title: 'InVideo AI', description: '', keywords: '', ogTitle: '', ogDescription: '' },
  ctaPrimary: 'Start free trial + Get exclusive bonus',
  hero: { badge: '', h1: '', h1sub: '', sub: '' },
  problem: { title: '', items: [] },
  solution: { title: '', items: [] },
  benefits: { title: '', items: [] },
  advantages: { title: '', items: [] },
  testimonials: [],
  faq: { items: [] },
  footer: { disclaimer: '', rights: '' }
})

const defaultProblems = [
  '⏰ Spending 4-6 hours creating a single short video',
  '😰 Frustrated with complex editing software',
  '📉 Your videos aren\'t getting the views they deserve'
]

const defaultSolutions = [
  '⚡ Create 10 videos in the time it takes to make 1',
  '🎯 Simple text prompts - AI does all the work',
  '🚀 Professional viral-ready videos every time'
]

const defaultBenefits = [
  { title: '⚡ Lightning Speed', text: 'What used to take hours now takes minutes. Our AI analyzes viral trends and creates optimized videos instantly. From script to final video in under 2 minutes per video.', stat: '10x', statLabel: 'Faster Production' },
  { title: '💰 Massive Savings', text: 'Stop paying expensive freelancers or buying multiple software subscriptions. InVideo AI replaces your entire video production stack with one affordable tool.', stat: '$5,000+', statLabel: 'Saved Per Month' },
  { title: '🎯 Proven Results', text: 'Our AI is trained on millions of viral videos. Get professional quality that consistently performs. Your videos will look like a pro team created them.', stat: '94%', statLabel: 'Engagement Increase' }
]

const defaultAdvantages = [
  { title: 'Text-to-Video AI', text: 'Simply type what you want and watch our AI create stunning videos with relevant footage, music, and transitions.' },
  { title: 'Viral Template Library', text: 'Access 5,000+ proven templates optimized for YouTube Shorts, TikTok, and Instagram Reels.' },
  { title: 'Smart Script Generator', text: 'AI writes engaging, viral-worthy scripts based on trending topics and your niche.' },
  { title: 'Auto Captions & Subtitles', text: 'Increase engagement by 80% with AI-generated captions in 70+ languages.' },
  { title: 'Stock Media Library', text: 'Access 16M+ premium stock videos, images, and music tracks - all royalty-free.' },
  { title: 'One-Click Publishing', text: 'Export in perfect dimensions for any platform. Publish directly to YouTube, TikTok, and Instagram.' },
  { title: 'Voice Over AI', text: 'Choose from 200+ realistic AI voices or clone your own voice for consistent branding.' },
  { title: 'Trending Topic Finder', text: 'AI identifies viral trends in your niche so you\'re always ahead of the curve.' }
]

const defaultTestimonials = [
  { name: 'Sarah Johnson', role: 'YouTube Creator', text: 'I went from struggling to post 3 videos a week to easily creating 30+ viral shorts per week. My channel grew from 5K to 100K subscribers in 3 months!' },
  { name: 'Michael Chen', role: 'E-commerce Entrepreneur', text: 'As a small business owner, I don\'t have time for video editing. InVideo AI creates all my marketing videos in minutes. It\'s like having a professional video team.' },
  { name: 'Emma Rodriguez', role: 'Digital Marketer', text: 'The ROI is insane. I canceled 3 software subscriptions and stopped paying freelancers. Now I create better videos myself in a fraction of the time.' }
]

const defaultFaq = [
  { q: 'Do I need video editing experience?', a: 'Absolutely not! InVideo AI is designed for complete beginners. Just type what you want, and the AI handles everything - editing, effects, music, transitions. If you can type, you can create viral videos.' },
  { q: 'How long does it take to create a video?', a: 'Most videos are ready in 2-3 minutes. Simply describe your video idea in text, and our AI generates a complete, professional video. You can make tweaks if needed, but many users publish videos as-is.' },
  { q: 'Is the free trial really free?', a: 'Yes! No credit card required. You get full access to all features during your trial. Create unlimited videos and see if InVideo AI is right for you, risk-free.' },
  { q: 'What platforms can I create videos for?', a: 'InVideo AI optimizes videos for YouTube Shorts, TikTok, Instagram Reels, Facebook, LinkedIn, Twitter, and more. Videos are automatically formatted for each platform.' },
  { q: 'Can I use my own footage and music?', a: 'Absolutely! Upload your own media or choose from our library of 16M+ premium stock videos, images, and royalty-free music tracks. Mix and match however you like.' },
  { q: 'What languages are supported?', a: 'InVideo AI supports 70+ languages for captions, subtitles, and voice overs. Create content for global audiences effortlessly.' }
]

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

async function loadLocale(code) {
  try {
    const mod = await import(`../locale/${code}.js`)
    const data = mod.default
    Object.assign(t, data)
  } catch (err) {
    console.warn(`Failed to load locale ${code}:`, err)
  }
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

const benefitsRef = ref(null)
function scrollToBenefits() {
  benefitsRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// SEO: set <html lang> and RTL where needed
useHead(() => ({
  htmlAttrs: {
    lang: lang.value,
    dir: ['ar'].includes(lang.value) ? 'rtl' : 'ltr'
  },
  title: t.meta.title,
  meta: [
    { name: 'description', content: t.meta.description },
    { name: 'keywords', content: t.meta.keywords },
    { property: 'og:title', content: t.meta.ogTitle },
    { property: 'og:description', content: t.meta.ogDescription },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:image', content: '/og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t.meta.ogTitle },
    { name: 'twitter:description', content: t.meta.ogDescription }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: 'x-default', href: canonicalBase },
    ...hreflangs.value.map(l => ({ rel: 'alternate', hreflang: l.lang, href: l.href }))
  ],
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
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (t.faq?.items || defaultFaq).map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      })
    }
  ]
}))
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.rtl {
  direction: rtl;
}
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
details summary::-webkit-details-marker {
  display: none;
}
</style>
