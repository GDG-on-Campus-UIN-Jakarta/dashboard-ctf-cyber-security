<script setup lang="ts">
import { useTheme } from 'vuetify'
import Check from '@images/avatars/Check.webp'
import miscMaskDark from '@images/pages/misc-mask-dark.png'
import miscMaskLight from '@images/pages/misc-mask-light.png'

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? miscMaskLight
    : miscMaskDark
})
</script>

<template>
  <div class="misc-wrapper">
    <h1 class="font-weight-medium leading-normal text-xl text-primary text-h1">
      Under Development 🚧
    </h1>
    <ErrorHeader
      title="We’re Building Something Awesome!"
      description="This page is currently under development. Our team is working hard to bring you an exciting and seamless experience. Stay tuned for updates, and thank you for your patience!"
    />

    <!-- 👉 Image -->
    <div class="misc-avatar w-100 text-center">
      <VImg
        :src="Check"
        alt="Coming Soon"
        :max-width="300"
        class="mx-auto"
      />
      <VBtn
        to="/"
        class="mt-10"
      >
        Back to Home
      </VBtn>
    </div>

    <VImg
      :src="authThemeMask"
      class="misc-footer-img d-none d-md-block"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/template/pages/misc.scss";

.misc-footer-tree {
  inline-size: 15.625rem;
  inset-block-end: 3.5rem;
  inset-inline-start: 0.375rem;
}
</style>
