<script setup lang="ts">
import HiCharacter from '@images/avatars/Hi.webp'

const illustrationJohn = HiCharacter
</script>

<template>
  <VCard class="text-center text-sm-start">
    <VRow no-gutters>
      <VCol
        cols="12"
        sm="8"
        order="2"
        order-sm="1"
      >
        <VCardItem class="pb-3">
          <VCardTitle class="text-primary">
            Welcome to GDG on Campus UIN Jakarta!
          </VCardTitle>
        </VCardItem>

        <VCardText>
          Hello, Tech Enthusiast! 🌟
          <br>
          <br>
          Get ready to test your skills, solve exciting challenges, and climb the leaderboard! This dashboard is your hub for everything CTF—track your progress, explore challenges, and compete with fellow tech enthusiasts.
          <br><br>
          The game is on. Are you ready to conquer the CTF? 🚀
          <br>
          <VBtn
            variant="tonal"
            class="mt-6"
            size="small"
          >
            View Badges
          </VBtn>
        </VCardText>
      </VCol>

      <VCol
        cols="12"
        sm="4"
        order="1"
        order-sm="2"
        class="text-center"
      >
        <img
          :src="illustrationJohn"
          :height="$vuetify.display.xs ? '150' : '182'"
          :class="$vuetify.display.xs ? 'mt-6 mb-n2' : 'position-absolute'"
          class="character-image john-illustration flip-in-rtl"
        >
      </VCol>
    </VRow>
  </VCard>
</template>

<style lang="scss" scoped>
.john-illustration {
  inset-block-end: -0.125rem;
  inset-inline-end: 3.5rem;
}
.character-image {
  object-fit: cover !important; /* Pastikan gambar terpotong */
  object-position: top !important; /* Posisi pemotongan */
  overflow: hidden !important; /* Hindari overflow */
  bottom: -35% !important;
  height: 130% !important;
  min-width: 220px;
}
</style>
