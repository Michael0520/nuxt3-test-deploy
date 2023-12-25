<script setup lang="ts">
import SharingCard01 from '@/assets/images/quote-card/sharing-card01.png'
import SharingCard02 from '@/assets/images/quote-card/sharing-card02.png'
import SharingCard03 from '@/assets/images/quote-card/sharing-card03.png'
import SharingCard04 from '@/assets/images/quote-card/sharing-card04.png'
import SharingCard05 from '@/assets/images/quote-card/sharing-card05.png'
import SharingCard06 from '@/assets/images/quote-card/sharing-card06.png'
import SharingCard07 from '@/assets/images/quote-card/sharing-card07.png'
import SharingCard08 from '@/assets/images/quote-card/sharing-card08.png'

import Marquee, { type Image } from '@/components/Marquee.vue'

defineProps<{
  title: string
  description: string
  btnText: string
}>()

const handleButtonClick = () => {
  window.location.href = '/sharing/explore/'
}
</script>

<template>
  <div class="bs-container">
    <div class="col-span-12 py-strangers text-center">
      <header class="mx-auto flex flex-grow-0 flex-col gap-close-ish-friends mdp:w-4/6 lg:w-1/2">
        <h2 class="typography-h2-emp">{{ title }}</h2>
        <p class="typography-b2-reg text-n-500">
          {{ description }}
        </p>
      </header>
      <main class="-mx-casual-friends py-distant-acquaintances">
        <Marquee  />
      </main>
    </div>
  </div>
</template>
