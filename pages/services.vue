<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="relative pt-48 pb-32 overflow-hidden bg-[#219b86]">
      <div class="absolute inset-0 z-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,1000 C300,800 400,1000 1000,800 L1000,0 L0,0 Z" fill="none" stroke="white" stroke-width="2"></path>
          <path d="M0,900 C200,700 500,900 1000,700 L1000,0 L0,0 Z" fill="none" stroke="white" stroke-width="1.5"></path>
        </svg>
      </div>
      <div class="container relative z-10 px-4">
        <div class="max-w-4xl mx-auto text-center wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6">
            {{ $t('services_page.hero_badge') }}
          </div>
          <h1 class="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            {{ $t('services_page.hero_title') }}
          </h1>
          <p class="text-xl text-white/90 leading-relaxed font-medium">
            {{ $t('services_page.hero_desc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services Detailed Section -->
    <section class="py-24 bg-white relative">
      <div class="container px-4">
        <div class="space-y-32">
          <!-- Service Block -->
          <div v-for="i in 6" :key="i"
               :class="['flex flex-col lg:items-center gap-12 lg:gap-20', i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row']">

            <!-- Image Side -->
            <div class="w-full lg:w-1/2 wow animate__animated" :class="i % 2 === 0 ? 'animate__fadeInRight' : 'animate__fadeInLeft'">
              <div class="relative group">
                <div class="absolute -inset-4 bg-[#219b86]/5 rounded-[2rem] transform rotate-2 group-hover:rotate-0 transition-transform"></div>
                <div class="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3] bg-slate-50 border border-slate-100 group">
                   <img :src="`/img/services/s${i}.webp`" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" :alt="$t(`services_page.s${i}_title`)">
                   <!-- Service Icon Overlay -->
                   <div class="absolute bottom-6 right-6 w-16 h-16 bg-[#219b86] rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform">
                      <i :class="getServiceIcon(i)" class="text-2xl"></i>
                   </div>
                </div>
              </div>
            </div>

            <!-- Content Side -->
            <div class="w-full lg:w-1/2 wow animate__animated text-start" :class="i % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'">
               <div class="inline-block px-4 py-1 rounded-full bg-[#219b86]/10 text-[#219b86] text-xs font-bold mb-4 uppercase tracking-wider">
                Service 0{{i}}
              </div>
              <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {{ $t(`services_page.s${i}_title`) }}
              </h2>
              <p class="text-xl text-slate-500 font-bold mb-10 leading-relaxed">
                {{ $t(`services_page.s${i}_desc`) }}
              </p>

              <!-- Features List (Conditional for first 4 with detail keys) -->
              <div v-if="i <= 4" class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div v-for="p in 4" :key="p" class="flex items-center gap-4 group">
                  <div class="w-6 h-6 rounded-full bg-[#219b86]/10 flex items-center justify-center shrink-0 group-hover:bg-[#219b86] transition-colors">
                    <i class="fa-solid fa-check text-[10px] text-[#219b86] group-hover:text-white"></i>
                  </div>
                  <span class="text-lg font-black text-slate-700">{{ $t(`services_page.s${i}_p${p}`) }}</span>
                </div>
              </div>

              <!-- Features List (For 5 and 6) -->
              <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div v-for="p in 4" :key="p" class="flex items-center gap-4 group">
                  <div class="w-6 h-6 rounded-full bg-[#219b86]/10 flex items-center justify-center shrink-0 group-hover:bg-[#219b86] transition-colors">
                    <i class="fa-solid fa-check text-[10px] text-[#219b86] group-hover:text-white"></i>
                  </div>
                  <span class="text-lg font-black text-slate-700">{{ $t(`services_page.s${i}_p${p}`) }}</span>
                </div>
              </div>

              <!-- Button -->
              <NuxtLink :to="localePath('/contact')" class="group px-8 h-14 rounded-xl bg-[#219b86] text-white font-bold text-lg flex items-center justify-center inline-flex gap-3 hover:bg-[#1a7a6a] transition-all shadow-xl shadow-teal-900/10 transform hover:-translate-y-1">
                <span>{{ $t('services_page.cta_button') }}</span>
                <i :class="['fa-solid transition-transform', $i18n.locale === 'ar' ? 'fa-arrow-left group-hover:-translate-x-1' : 'fa-arrow-right group-hover:translate-x-1']"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Global CTA -->
    <section class="py-24 bg-slate-900 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="500" r="400" fill="none" stroke="white" stroke-width="2" opacity="0.1"></circle>
          <circle cx="500" cy="500" r="300" fill="none" stroke="white" stroke-width="1" opacity="0.05"></circle>
        </svg>
      </div>
      <div class="container relative z-10 px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-8">{{ $t('nav.call_to_action') }}</h2>
        <NuxtLink :to="localePath('/contact')" class="px-12 h-16 rounded-2xl bg-[#219b86] text-white font-black text-xl hover:bg-[#1a7a6a] transition-all shadow-2xl transform hover:-translate-y-1 items-center justify-center inline-flex">
          {{ $t('nav.link_7') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'site',
  methods: {
    getServiceIcon(i) {
      const icons = [
        'fa-solid fa-code',
        'fa-solid fa-shield-halved',
        'fa-solid fa-cloud',
        'fa-solid fa-headset',
        'fa-solid fa-microchip',
        'fa-solid fa-robot'
      ];
      return icons[i-1];
    }
  },
  head() {
    return {
      title: this.$t('nav.link_3'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('services_page.hero_desc') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.services-page {
  background-color: #fff;
}
</style>
