<template>
  <div class="privacy-page">
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
            {{ $t('footer.privacy') }}
          </div>

          <h1 class="text-2xl md:text-3xl font-black text-white mb-6 leading-tight drop-shadow-xl">
            {{ $t('privacy.title') }}
          </h1>
          <p class="text-lg text-white/80 font-medium">
            {{ $t('privacy.last_updated') }}
          </p>
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
              {{ $t('privacy.intro') }}
            </p>
          </div>

          <!-- Section 1 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('privacy.s1_title') }}</h2>
            <p class="text-slate-700 leading-relaxed font-medium">{{ $t('privacy.s1_desc') }}</p>
          </div>

          <!-- Section 2 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-6">{{ $t('privacy.s2_title') }}</h2>
            <div class="space-y-4">
              <div>
                <h3 class="text-lg font-black text-slate-900 mb-2">{{ $t('privacy.s2_p1_title') }}</h3>
                <p class="text-slate-700 leading-relaxed font-medium">{{ $t('privacy.s2_p1_desc') }}</p>
              </div>
              <div>
                <h3 class="text-lg font-black text-slate-900 mb-2">{{ $t('privacy.s2_p2_title') }}</h3>
                <p class="text-slate-700 leading-relaxed font-medium">{{ $t('privacy.s2_p2_desc') }}</p>
              </div>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('privacy.s3_title') }}</h2>
            <p class="text-slate-700 leading-relaxed font-medium mb-4">{{ $t('privacy.s3_intro') }}</p>
            <ul class="space-y-3">
              <li v-for="(item, i) in $t('privacy.s3_list')" :key="i" class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-[#219b86] mt-1 shrink-0"></i>
                <span class="text-slate-700 font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Section 4 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('privacy.s4_title') }}</h2>
            <p class="text-slate-700 leading-relaxed font-medium mb-4">{{ $t('privacy.s4_intro') }}</p>
            <ul class="space-y-3">
              <li v-for="(item, i) in $t('privacy.s4_list')" :key="i" class="flex items-start gap-3">
                <i class="fa-solid fa-circle-check text-[#219b86] mt-1 shrink-0"></i>
                <span class="text-slate-700 font-medium">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Section 5 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('privacy.s5_title') }}</h2>
            <p class="text-slate-700 leading-relaxed font-medium">{{ $t('privacy.s5_desc') }}</p>
          </div>

          <!-- Section 6 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('privacy.s6_title') }}</h2>
            <p class="text-slate-700 leading-relaxed font-medium">{{ $t('privacy.s6_desc') }}</p>
          </div>

          <!-- Section 7 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('privacy.s7_title') }}</h2>
            <p class="text-slate-700 leading-relaxed font-medium">{{ $t('privacy.s7_desc') }}</p>
          </div>

          <!-- Section 8 -->
          <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8 wow animate__animated animate__fadeInUp">
            <h2 class="text-2xl font-black text-[#219b86] mb-4">{{ $t('privacy.s8_title') }}</h2>
            <p class="text-slate-700 leading-relaxed font-medium mb-6">{{ $t('privacy.s8_desc') }}</p>
            <NuxtLink :to="localePath('/contact')" class="inline-flex items-center gap-2 h-14 px-10 rounded-xl bg-[#219b86] text-white font-black text-lg hover:bg-[#1a7a6a] transition-all shadow-xl shadow-teal-900/20 transform hover:-translate-y-1">
              {{ $t('nav.link_7') }}
              <i class="fa-solid fa-arrow-right"></i>
            </NuxtLink>
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
      title: this.$t('privacy.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('privacy.intro').substring(0, 160) }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.privacy-page {
  background-color: #fff;
}
</style>
