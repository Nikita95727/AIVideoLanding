<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <ClientOnly>
    <a
      href="#main-cta"
      class="fixed bottom-4 right-4 cta-btn shadow-xl ring-1 ring-white/10"
    >{{ currentLocale.ctaPrimary }}</a>
  </ClientOnly>
</template>

<script setup lang="ts">
const route = useRoute()
const lang = computed(() => (route.query.lang as string) || 'en')
const locales = {
  // populated at runtime by lazy import in pages
} as Record<string, any>

const currentLocale = reactive({ ctaPrimary: 'Start free trial + Get exclusive bonus' })

onMounted(async () => {
  try {
    const mod = await import(`./locale/${lang.value}.js`)
    Object.assign(currentLocale, { ctaPrimary: mod.default.ctaPrimary })
  } catch {}
})
</script>

<style>
/* global minimal */
</style>

