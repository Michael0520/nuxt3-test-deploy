<script setup lang="ts">
import type { PropType } from 'vue'

export interface OtherServiceItemData {
  title: string
  description: string
  link: string
  image: string
}

const props = defineProps({
  data: {
    type: Array as PropType<OtherServiceItemData[]>,
    default: () => [],
  },
})

const getBgImage = (image: string) => {
  return `background-image: url(${image})`
}
</script>

<template>
  <div
    class="col-span-12 flex flex-col items-center justify-center gap-32px mdp:flex-row mdp:items-start mdp:gap-16px mdl:gap-20px"
  >
    <template v-for="item in props.data">
      <div
        class="flex h-[397px] w-full flex-col items-start justify-start rounded-lg border border-n-100 bg-white p-20px text-n-950 mdp:h-[360px] mdl:h-[394px] lg:h-[437px] lg:p-24px"
      >
        <div
          class="mb-20px h-[207px] w-full bg-contain bg-center bg-no-repeat mdp:h-[122px] mdl:h-[180px] lg:mb-[24px] lg:h-[227px]"
          :style="getBgImage(item.image)"
        ></div>

        <div class="typography-h5-emp mb-8px">{{ item.title }}</div>
        <div class="typography-b2-reg [&_a]:text-o-500 [&_a]:underline">{{ item.description }}</div>

      </div>
    </template>
  </div>
</template>
