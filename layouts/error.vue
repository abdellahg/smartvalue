<template>
  <div class="min-h-screen flex items-center justify-center bg-[#090e16] text-white p-4 text-center">
    <div v-if="error.statusCode === 404">
       <div class="w-16 h-16 border-4 border-[#219b86] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
       <h1 class="text-2xl font-black mb-2">Page Not Found</h1>
       <p class="text-slate-400">Redirecting you to home...</p>
    </div>
    <div v-else>
       <h1 class="text-4xl font-black mb-4">{{ error.statusCode }}</h1>
       <p class="text-xl text-slate-400 mb-8">{{ error.message }}</p>
       <NuxtLink :to="localePath('/')" class="px-8 py-3 bg-[#219b86] rounded-xl font-bold">Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty', // Use empty layout for error page to avoid header/footer issues during redirect
  mounted() {
    if (this.error.statusCode === 404) {
      setTimeout(() => {
        this.$router.replace(this.localePath('/'));
      }, 1000);
    }
  }
}
</script>
