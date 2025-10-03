<template>
  <main class="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
    
    <!-- Fixed Premium Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
      <nav class="container-responsive">
        <div class="flex justify-between items-center h-20">
          <div class="flex items-center gap-4">
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50"></div>
              <div class="relative w-12 h-12 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
            <div>
              <h1 class="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">InVideo AI</h1>
              <p class="text-xs text-slate-500">Powered by AI</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4">
            <div class="relative">
              <button @click="langOpen = !langOpen" class="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-sm font-medium">
                <span class="text-lg">{{ languageFlags[lang] }}</span>
                <span class="hidden sm:inline text-slate-300">{{ languageNames[lang] }}</span>
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div v-show="langOpen" @click="langOpen = false" class="absolute right-0 mt-2 w-56 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 py-2 max-h-80 overflow-y-auto">
                <button v-for="code in languageCodes" :key="code" @click="lang = code" :class="lang === code ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white' : 'text-slate-300 hover:bg-white/5'" class="w-full flex items-center gap-3 px-4 py-3 text-sm transition-all">
                  <span class="text-xl">{{ languageFlags[code] }}</span>
                  <span class="font-medium">{{ languageNames[code] }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Epic Hero Section -->
    <section class="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container-responsive relative">
        <div class="max-w-5xl mx-auto text-center space-y-10">
          
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-full backdrop-blur-sm">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
            </span>
            <span class="text-sm font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-wider">
              {{ t.hero?.badge || '🔥 Limited Time Offer' }}
            </span>
          </div>

          <!-- Main Headline -->
          <div class="space-y-6">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              <span class="text-white">{{ t.hero?.h1 || 'Stop Wasting Hours:' }}</span>
              <br />
              <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {{ t.hero?.h1sub || 'Create 10 Viral Shorts in 20 Minutes' }}
              </span>
            </h1>
            
            <p class="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
              {{ t.hero?.sub || 'The revolutionary AI-powered tool that turns your ideas into professional viral videos in seconds. No editing skills required.' }}
            </p>
          </div>

          <!-- Social Proof -->
          <div class="flex flex-wrap justify-center items-center gap-8 py-4">
            <div class="flex items-center gap-2">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-slate-900"></div>
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-900"></div>
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-slate-900"></div>
              </div>
              <span class="text-sm text-slate-400 font-medium">5M+ Happy Creators</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="flex gap-0.5">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <span class="text-sm text-slate-400 font-medium">4.9/5 (10K+ Reviews)</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="text-sm text-slate-400 font-medium">100% Free Trial</span>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-4 space-y-4">
            <button @click="onCtaClick" class="group relative inline-flex items-center gap-3 px-10 py-5 sm:px-12 sm:py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl font-bold text-lg sm:text-xl text-white shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105">
              <svg class="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span>{{ t.ctaPrimary || 'Start Free Trial + Get Exclusive Bonus' }}</span>
            </button>
            <p class="text-sm text-slate-500">✓ No credit card required  ✓ Cancel anytime  ✓ Full access</p>
          </div>

          <!-- Video Mockup -->
          <div class="relative mt-16 group">
            <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div class="relative overflow-hidden rounded-3xl bg-slate-800/50 backdrop-blur-sm border border-white/10">
              <div class="aspect-video flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                <div class="text-center space-y-6">
                  <div class="w-24 h-24 mx-auto bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500 transition-all">
                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
                    </svg>
                  </div>
                  <p class="text-white font-semibold text-lg">Watch Demo Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem/Solution Section -->
    <section class="py-20 sm:py-28 relative">
      <div class="container-responsive">
        <div class="max-w-6xl mx-auto space-y-20">
          
          <!-- Problems -->
          <div class="space-y-12">
            <h2 class="text-4xl sm:text-5xl font-black text-center">
              <span class="text-red-400">{{ t.problem?.title || 'Sound Familiar?' }}</span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="item in (t.problem?.items || defaultProblems)" :key="item" class="group p-8 bg-red-500/5 border border-red-500/20 rounded-3xl hover:bg-red-500/10 transition-all">
                <div class="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <p class="text-slate-300 font-semibold text-lg leading-relaxed">{{ item }}</p>
              </div>
            </div>
          </div>

          <!-- Arrow -->
          <div class="flex justify-center">
            <svg class="w-16 h-16 text-indigo-400 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>

          <!-- Solutions -->
          <div class="space-y-12">
            <h2 class="text-4xl sm:text-5xl font-black text-center">
              <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {{ t.solution?.title || 'InVideo AI Solves Everything' }}
              </span>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div v-for="item in (t.solution?.items || defaultSolutions)" :key="item" class="group relative p-8 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-3xl hover:border-white/20 transition-all overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="relative">
                  <div class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p class="text-white font-bold text-lg leading-relaxed">{{ item }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section ref="benefitsRef" class="py-20 sm:py-28 relative">
      <div class="container-responsive">
        <div class="max-w-6xl mx-auto space-y-16">
          <div class="text-center space-y-4 max-w-3xl mx-auto">
            <h2 class="text-4xl sm:text-5xl font-black text-white">
              {{ t.benefits?.title || 'Why Top Creators Choose InVideo AI' }}
            </h2>
            <p class="text-xl text-slate-400">Join millions of content creators who are already 10x-ing their output</p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div v-for="(item, idx) in (t.benefits?.items || defaultBenefits)" :key="idx" class="group relative">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
              <div class="relative h-full p-8 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col">
                <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="idx === 0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    <path v-else-if="idx === 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <div class="flex-grow space-y-4">
                  <h3 class="text-2xl font-bold text-white">{{ item.title }}</h3>
                  <p class="text-slate-400 leading-relaxed">{{ item.text }}</p>
                </div>
                <div class="mt-6 pt-6 border-t border-white/10">
                  <p class="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{{ item.stat }}</p>
                  <p class="text-sm text-slate-500 mt-1">{{ item.statLabel }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-20 sm:py-28 relative">
      <div class="container-responsive">
        <div class="max-w-6xl mx-auto space-y-16">
          <div class="text-center space-y-4 max-w-3xl mx-auto">
            <h2 class="text-4xl sm:text-5xl font-black text-white">
              {{ t.advantages?.title || 'Everything You Need to Go Viral' }}
            </h2>
            <p class="text-xl text-slate-400">Powerful AI features that make video creation effortless</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="item in (t.advantages?.items || defaultAdvantages)" :key="item.title" class="group p-6 bg-slate-800/30 border border-white/5 rounded-2xl hover:bg-slate-800/50 hover:border-white/10 transition-all">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-lg font-bold text-white mb-2">{{ item.title }}</h3>
                  <p class="text-slate-400 text-sm leading-relaxed">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 sm:py-28 relative">
      <div class="container-responsive">
        <div class="max-w-6xl mx-auto space-y-16">
          <div class="text-center space-y-4">
            <h2 class="text-4xl sm:text-5xl font-black text-white">Join Thousands of Successful Creators</h2>
            <p class="text-xl text-slate-400">Real results from real people</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="item in (t.testimonials || defaultTestimonials)" :key="item.name" class="p-8 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl flex flex-col hover:border-white/20 transition-all">
              <div class="flex gap-1 mb-6">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <div class="flex-grow">
                <p class="text-slate-300 leading-relaxed italic mb-6">"{{ item.text }}"</p>
              </div>
              <div class="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {{ item.name[0] }}
                </div>
                <div>
                  <p class="font-bold text-white">{{ item.name }}</p>
                  <p class="text-sm text-slate-500">{{ item.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 sm:py-28 relative">
      <div class="container-responsive">
        <div class="max-w-4xl mx-auto space-y-12">
          <div class="text-center">
            <h2 class="text-4xl sm:text-5xl font-black text-white">Frequently Asked Questions</h2>
          </div>
          
          <div class="space-y-4">
            <details v-for="item in (t.faq?.items || defaultFaq)" :key="item.q" class="group p-6 bg-slate-800/30 border border-white/5 rounded-2xl hover:bg-slate-800/50 hover:border-white/10 transition-all">
              <summary class="flex justify-between items-center cursor-pointer list-none">
                <h3 class="text-lg font-bold text-white pr-4">{{ item.q }}</h3>
                <svg class="w-6 h-6 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p class="mt-4 text-slate-400 leading-relaxed">{{ item.a }}</p>
            </details>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 bg-slate-950 border-t border-white/5">
      <div class="container-responsive">
        <div class="max-w-6xl mx-auto text-center space-y-8">
          <div class="flex items-center justify-center gap-4">
            <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <span class="text-2xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">InVideo AI</span>
          </div>
          
          <p class="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {{ t.footer?.disclaimer || 'This is an independent promotional page. InVideo AI is a registered trademark. This page is not officially affiliated with InVideo but promotes their excellent product through an affiliate partnership.' }}
          </p>
          
          <div class="pt-8 border-t border-white/5">
            <p class="text-sm text-slate-600">© 2025 {{ t.footer?.rights || 'InVideo AI Pre-lander. All rights reserved.' }}</p>
          </div>
          
          <div class="pt-6">
            <p class="text-xs text-slate-600 mb-4">Available in 11 languages:</p>
            <div class="flex flex-wrap justify-center gap-2">
              <button v-for="code in languageCodes" :key="code" @click="lang = code" :class="lang === code ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800'" class="px-3 py-1.5 text-xs rounded-lg transition-all font-medium">
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
  ctaPrimary: 'Start Free Trial + Get Exclusive Bonus',
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

// SEO
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
@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}
.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
details summary::-webkit-details-marker {
  display: none;
}
</style>
