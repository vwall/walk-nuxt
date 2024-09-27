<script setup>
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/icon.png' }],

})

useSeoMeta({
  title: 'Dog Walkers',
  description: 'Dog Walkers is a platform to manage dog walking services.',

})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <UNotifications />
  <UModals />
</template>
