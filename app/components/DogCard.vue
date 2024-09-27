<script setup lang="ts">
export interface Props {
  dog: { name: string, status: string, day: string, time: string }

}

const { dog } = defineProps<Props>()

const dogStatuses = ['Home', 'On way to park', 'At the park', 'On way home', 'Home (safe)']
const selected = ref(dog.status)
</script>

<template>
  <UCard
    class="w-60"
  >
    <template #header>
      <div class="text-2xl font-semibold">
        {{ dog.name }}
      </div>
    </template>

    <div class="">
      Status
    </div>

    <USelectMenu
      v-model="selected"
      class="mt-1"
      :options="dogStatuses"
    />
  </UCard>
</template>
