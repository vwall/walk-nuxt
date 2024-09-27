<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})

useSeoMeta({
  title: 'Dog Walkers - Schedule',
  description: 'Dog Walkers is a platform to manage dog walking services.',
})

const { data: shifts } = useFetch<Shift[]>(() => '/api/schedule')

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const times = ['Morning', 'Afternoon', 'All Day']

const selectedDays = ref(days[0])
const selectedShift = ref(times[0])

interface TransformedDataItem {
  name: string
  status: string
  day: string
  time: string
}

const transformedShifts = computed<TransformedDataItem[]>(() =>
  (shifts.value ?? []).flatMap(shift =>
    shift.shiftAssignments.map((assignment, index) => ({
      name: assignment.dog.name,
      status: mapStatus(assignment.status),
      day: capitalizeFirstLetter(shift.day),
      time: times[index % times.length] ?? 'Unknown',
    })),
  ).filter((dog) => {
    return dog.day === selectedDays.value && dog.time === selectedShift.value
  }),
)

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function mapStatus(status: string): string {
  switch (status) {
    case 'home_waiting':
    case 'home_safe':
      return 'Home'
    case 'at_field':
      return 'At Field'
    case 'transit_home':
    case 'transit_park':
      return 'In Transit'
    default:
      return 'Unknown'
  }
}
</script>

<template>
  <div class="h-full flex flex-col w-full overflow-auto p-8">
    <div class="flex items-center">
      <h1 class="text-4xl font-semibold">
        My Schedule
      </h1>

      <div class="ml-auto mr-2">
        <div class="mb-1">
          Select Day
        </div>

        <USelectMenu
          v-model="selectedDays"
          class="w-full lg:w-48"
          :options="days"
        />
      </div>

      <div class="">
        <div class="mb-1">
          Shift
        </div>

        <USelectMenu
          v-model="selectedShift"
          class="w-full lg:w-48"
          :options="times"
        />
      </div>
    </div>

    <div
      v-auto-animate
      class="flex flex-wrap mt-8 gap-6"
    >
      <div
        v-if="!transformedShifts.length"
        class="flex items-center justify-center w-full h-32 text-2xl font-semibold"
      >
        No dogs on {{ selectedDays }} for {{ selectedShift }}
      </div>

      <DogCard
        v-for="dog in transformedShifts"
        :key="dog.name"
        :dog="dog"
      />
    </div>
  </div>
</template>
