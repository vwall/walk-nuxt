<script setup lang="ts">
const { loggedIn, session, user } = useUserSession()

const userItems = [
  [
    {
      label: user.value?.email || '',
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-8-tooth',
    },
  ],
  [
    {
      label: 'Documentation',
      icon: 'i-heroicons-book-open',
    },
    {
      label: 'Changelog',
      icon: 'i-heroicons-megaphone',
    },
    {
      label: 'Status',
      icon: 'i-heroicons-signal',
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-heroicons-arrow-left-on-rectangle',
      click: async () => {
        await $fetch('/api/_auth/session', {
          method: 'DELETE',
        })

        session.value = {}

        await navigateTo('/')
      },
    },
  ],
]
</script>

<template>
  <UHeader class="w-full max-w-none">
    <template #logo>
      Dog Walkers <UBadge label="Beta" variant="subtle" class="mb-0.5" />
    </template>

    <template #right>
      <UColorModeButton />

      <UDropdown
        v-if="loggedIn && user"
        :items="userItems"
        :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-start' }"
      >
        <UAvatar :alt="user.name" size="sm" />

        <template #account="{ item }">
          <div class="text-left">
            <p>Signed in as</p>
            <p class="truncate font-medium text-gray-900 dark:text-white">
              {{ item.label }}
            </p>
          </div>
        </template>

        <template #item="{ item }">
          <span class="truncate">{{ item.label }}</span>

          <UIcon
            :name="item.icon"
            class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
          />
        </template>
      </UDropdown>

      <template v-else>
        <ULink
          to="/login"
          class="mr-2"
          active-class="text-primary"
          inactive-class="text-primary"
        >
          Log in
        </ULink>
      </template>
    </template>
  </UHeader>
</template>
