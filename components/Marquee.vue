<script setup lang="ts">
export interface Image {
  src: string;
}
import { Vue3Marquee } from 'vue3-marquee'
const props = defineProps({
  imgArray: {
    type: Array as () => Image[],
    default: () => [],
  },
})
</script>

<template>
  <Vue3Marquee>
    <div class="mx-12px" v-for="(img, index) in imgArray" :key="img.src">
      <img class="h-[153px] w-full mdp:h-[240px] mdl:h-[303px]" :src="img.src" />
      <p>{{ index + 1 }}</p>
    </div>
  </Vue3Marquee>
</template>
