<template>
  <div class="terms-page">
    <!-- Hero Section -->
    <section class="relative pt-48 pb-32 overflow-hidden bg-[#090e16]">
      <div class="absolute inset-0 z-0">
        <!-- Darker, richer gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#090e16] via-[#1a2c38] to-[#219b86]/40 opacity-90"></div>
        
        <!-- Abstract shapes -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#219b86]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div class="container relative z-10 px-4">
        <div class="max-w-4xl mx-auto text-center wow animate__animated animate__fadeInUp">
          <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-8 backdrop-blur-md shadow-lg">
            <span class="w-2 h-2 rounded-full bg-[#219b86] animate-pulse"></span>
            {{ $t('footer.terms') }}
          </div>

          <h1 class="text-2xl md:text-3xl font-black text-white mb-6 leading-tight drop-shadow-xl">
            {{ $t('terms.title') }}
          </h1>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-24 bg-slate-50 relative">
      <div class="container px-4">
        <div class="max-w-4xl mx-auto">
          
          <!-- Introduction -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12 wow animate__animated animate__fadeInUp">
            <p class="text-lg text-slate-700 leading-relaxed font-medium">
              {{ $t('terms.intro') }}
            </p>
          </div>

          <!-- Section 1 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('terms.s1_title') }}</h2>
            <ul class="space-y-3">
              <li v-for="(item, i) in $t('terms.s1_list')" :key="i" class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-[#219b86] mt-1 shrink-0"></i>
                <span class="text-slate-700 font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Section 2 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('terms.s2_title') }}</h2>
            <ul class="space-y-3">
              <li v-for="(item, i) in $t('terms.s2_list')" :key="i" class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-[#219b86] mt-1 shrink-0"></i>
                <span class="text-slate-700 font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Section 3 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('terms.s3_title') }}</h2>
            <ul class="space-y-3">
              <li v-for="(item, i) in $t('terms.s3_list')" :key="i" class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-[#219b86] mt-1 shrink-0"></i>
                <span class="text-slate-700 font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Section 4 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('terms.s4_title') }}</h2>
            <ul class="space-y-3">
              <li v-for="(item, i) in $t('terms.s4_list')" :key="i" class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-[#219b86] mt-1 shrink-0"></i>
                <span class="text-slate-700 font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Section 5 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('terms.s5_title') }}</h2>
            <ul class="space-y-3">
              <li v-for="(item, i) in $t('terms.s5_list')" :key="i" class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-[#219b86] mt-1 shrink-0"></i>
                <span class="text-slate-700 font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Section 6 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('terms.s6_title') }}</h2>
            <ul class="space-y-3">
              <li v-for="(item, i) in $t('terms.s6_list')" :key="i" class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-[#219b86] mt-1 shrink-0"></i>
                <span class="text-slate-700 font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Section 7 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('terms.s7_title') }}</h2>
            <ul class="space-y-3">
              <li v-for="(item, i) in $t('terms.s7_list')" :key="i" class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-[#219b86] mt-1 shrink-0"></i>
                <span class="text-slate-700 font-medium">{{ item }}</span>
              </li>
            </ul>
            <div class="mt-8">
              <NuxtLink :to="localePath('/contact')" class="inline-flex items-center gap-2 h-14 px-10 rounded-xl bg-[#219b86] text-white font-black text-lg hover:bg-[#1a7a6a] transition-all shadow-xl shadow-teal-900/20 transform hover:-translate-y-1">
                {{ $t('nav.link_7') }}
                <i class="fa-solid fa-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'site',
  head() {
    return {
      title: this.$t('terms.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('terms.intro').substring(0, 160) }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.terms-page {
  background-color: #fff;
}
</style>
