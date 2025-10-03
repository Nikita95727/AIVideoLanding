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

<script setup>
const route = useRoute()
const lang = computed(() => (typeof route.query.lang === 'string' ? route.query.lang : 'en'))

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

