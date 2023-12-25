<script setup lang="ts">
import PostSection from '~/components/PostSection.vue';

const otherServiceContent = [
  {
    title: '日韓歐美多國代購',
    description: '下單後，2 個工作天內確認訂單，迅速為你代購日韓歐美的商品。',
    link: `${import.meta.env.PUBLIC_ROOT_URL}/express-checkout/`,
    image: '',
  },
  {
    title: '會員實評網購戰利品',
    description: '超過五萬會員商品實評分享，令你更了解用後感、價差、購買連結等。',
    link: `${import.meta.env.PUBLIC_ROOT_URL}/sharing/explore/`,
    image: '',
  },
  {
    title: '限時團購超級優惠',
    description: '每天精選海外人氣商品，推出會員獨享團購價優惠。多款優質商品，火速熱賣！',
    link: `${import.meta.env.PUBLIC_ROOT_URL}`,
    image: '',
  },
]
</script>

<template>
  <div>
    <h1 class=" text-balance text-blue">About</h1>
    <img src='../../public/vite.png' alt="">
    <PostSection
      title="限時優惠 ‧ 團購熱賣"
      description="超過 1,000 種人氣商品及會員購物心得，包括國外品牌服飾、鞋包鐘錶、美妝保養品、電子產品、家用小品等等。"
      btnText="查看更多限時熱賣商品"
    />
    <div class="text-black">

      <ShippingOtherServiceSection
        title="尋找其他\n海外購物/代運服務？"
        :data="otherServiceContent"
      />
    </div>
  </div>
</template>
