<script setup lang="ts">
const { loggedIn } = useUserSession()
</script>

<template>
  <div class="flex flex-col h-screen w-full overflow-hidden">
    <AppHeader />

    <UMain class="h-full flex">
      <div
        v-if="loggedIn"
        class="w-1/6 h-full p-8 border-r border-gray-200 dark:border-gray-800 flex flex-col space-y-2 "
      >
        <ULink
          to="/schedule"
          active-class="text-primary"
        >
          Sechdule
        </ULink>

        <ULink
          to="/manager"
          active-class="text-primary"
        >
          Manage Walkers
        </ULink>
      </div>

      <slot />
    </UMain>
  </div>
</template>
