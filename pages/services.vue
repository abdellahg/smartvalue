<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="relative pt-48 pb-32 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/img/hero/hero_bg.jpg" class="w-full h-full object-cover" alt="Services Hero">
        <div class="absolute inset-0 bg-[#0067a7]/80"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-[#0067a7]/90 via-transparent to-[#090e16]/90"></div>
      </div>
      <div class="container relative z-10 px-4">
        <div class="max-w-4xl mx-auto text-center wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-sm font-bold mb-6">
            {{ $t('services_page.hero_badge') }}
          </div>
          <h1 class="text-2xl md:text-4xl font-black text-white mb-8 leading-tight">
            {{ $t('services_page.hero_title') }}
          </h1>
          <p class="text-xl text-slate-200 leading-relaxed font-medium">
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
          <div v-for="i in 4" :key="i"
               :class="['flex flex-col lg:items-center gap-12 lg:gap-20', i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row']">

            <!-- Image Side -->
            <div class="w-full lg:w-1/2 wow animate__animated" :class="i % 2 === 0 ? 'animate__fadeInRight' : 'animate__fadeInLeft'">
              <div class="relative group">
                <div class="absolute -inset-4 bg-[#0067a7]/5 rounded-[2rem] transform rotate-2 group-hover:rotate-0 transition-transform"></div>
                <div class="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/3]">
                  <img :src="`/img/services/s${i}.webp`" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" :alt="$t(`services_page.s${i}_title`)">
                  <!-- Service Icon Overlay -->
                  <div class="absolute bottom-6 right-6 w-16 h-16 bg-[#d32f2f] rounded-2xl flex items-center justify-center text-white shadow-xl">
                    <i :class="getServiceIcon(i)" class="text-2xl"></i>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content Side -->
            <div class="w-full lg:w-1/2 wow animate__animated text-start" :class="i % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'">
              <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {{ $t(`services_page.s${i}_title`) }}
              </h2>
              <p class="text-xl text-slate-500 font-bold mb-10 leading-relaxed">
                {{ $t(`services_page.s${i}_desc`) }}
              </p>

              <!-- Features List -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div v-for="p in 4" :key="p" class="flex items-center gap-4 group">
                  <div class="w-6 h-6 rounded-full bg-red-600/10 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors">
                    <i class="fa-solid fa-check text-[10px] text-red-600 group-hover:text-white"></i>
                  </div>
                  <span class="text-lg font-black text-slate-700">{{ $t(`services_page.s${i}_p${p}`) }}</span>
                </div>
              </div>

              <!-- Button -->
              <NuxtLink :to="localePath('/contact')" class="group px-8 h-14 rounded-xl bg-[#d32f2f] text-white font-bold text-lg flex items-center gap-3 hover:bg-red-700 transition-all shadow-xl shadow-red-900/20 transform hover:-translate-y-1">
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
        <img src="/img/hero/hero_bg.jpg" class="w-full h-full object-cover" alt="CTA Background">
      </div>
      <div class="container relative z-10 px-4 text-center">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-8">{{ $t('nav.call_to_action') }}</h2>
        <NuxtLink :to="localePath('/contact')" class="px-12 h-16 rounded-2xl bg-white text-slate-900 font-black text-xl hover:bg-slate-100 transition-all shadow-2xl transform hover:-translate-y-1 flex items-center justify-center inline-flex">
          {{ $t('contact.title') }}
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
        'fa-solid fa-fire-extinguisher',
        'fa-solid fa-tools',
        'fa-solid fa-truck-loading',
        'fa-solid fa-hard-hat'
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
