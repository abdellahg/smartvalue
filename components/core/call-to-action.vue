<template>
  <NuxtLink :to="localePath(`/contact`)" class="cta-btn px-6 py-2 rounded-xl bg-[#0067a7] text-white font-bold transition-all hover:bg-[#d90f1b] flex justify-center items-center">
    {{ $t(`nav.call_to_action`) }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
  .cta-btn {
    height: 48px;
    min-width: 140px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    &:active {
      transform: scale(0.95);
    }
  }
</style>
