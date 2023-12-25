<script setup lang="ts">
import OtherServiceSection, {
  type OtherServiceItemData,
} from '@/components/OtherServiceSection.vue'


defineProps<{
  title: string
  data: OtherServiceItemData[]
}>()


</script>

<template>
  <div class="bs-container gap-y-0 py-strangers">
    <div
      class="col-span-12 mb-distant-acquaintances flex flex-col items-center justify-center gap-close-ish-friends text-center">
      <h2 class="typography-h2-emp whitespace-pre-line text-n-950 mdp:whitespace-normal">
        {{ title }}
      </h2>
    </div>

    <OtherServiceSection :data="data"></OtherServiceSection>

  </div>
</template>
