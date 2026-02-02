<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="relative pt-48 pb-32 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="/img/about/about_hero.webp" class="w-full h-full object-cover" alt="Hero Background">
        <div class="absolute inset-0 bg-[#090e16]/80"></div>
      </div>
      <div class="container relative z-10 px-4">
        <div class="max-w-4xl mx-auto text-center wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-[#d32f2f]/10 border border-[#d32f2f]/20 text-[#d32f2f] text-sm font-bold mb-6">
            {{ $t('about.slogan') }}
          </div>
          <h1 class="text-2xl md:text-4xl font-black text-white mb-8 leading-tight">
            {{ $t('about.title') }}
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed font-medium">
            {{ $t('about.desc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Vision & Mission Section -->
    <section class="py-24 bg-white relative">
      <div class="container px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-48 relative z-20">
          <div class="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 wow animate__animated animate__fadeInLeft">
            <div class="w-16 h-16 rounded-2xl bg-[#0067a7]/10 flex items-center justify-center mb-8">
              <svg class="w-8 h-8 text-[#0067a7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-black text-slate-900 mb-6">{{ $t('about.vision_title') }}</h3>
            <p class="text-slate-600 leading-relaxed font-medium text-lg">
              {{ $t('about.vision_desc') }}
            </p>
          </div>
          <div class="bg-[#d32f2f] p-12 rounded-3xl shadow-2xl wow animate__animated animate__fadeInRight">
            <div class="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-black text-white mb-6">{{ $t('about.mission_title') }}</h3>
            <p class="text-white/90 leading-relaxed font-medium text-lg">
              {{ $t('about.mission_desc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-24 bg-slate-50">
      <div class="container px-4">
        <div class="text-center mb-16 wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-600 text-sm font-bold mb-4 uppercase tracking-wider">
            {{ $t('values.sub_title') }}
          </div>
          <h2 class="text-4xl font-black text-slate-900">
            {{ $t('values.title') }}
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="i in 4" :key="i" class="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group wow animate__animated animate__fadeInUp" :data-wow-delay="`${i*0.1}s`">
            <div class="w-14 h-14 rounded-2xl bg-[#d32f2f]/5 flex items-center justify-center mb-8 group-hover:bg-[#d32f2f] transition-colors">
              <svg class="w-6 h-6 text-[#d32f2f] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="i===1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                <path v-if="i===2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                <path v-if="i===3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                <path v-if="i===4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-black text-slate-900 mb-4">{{ $t(`values.item_${i}_title`) }}</h4>
            <p class="text-slate-500 font-bold leading-relaxed">
              {{ $t(`values.item_${i}_desc`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="container px-4">
        <div class="text-center mb-20 wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-600 text-sm font-bold mb-4 uppercase tracking-wider">
            {{ $t('timeline.sub_title') }}
          </div>
          <h2 class="text-4xl font-black text-slate-900">
            {{ $t('timeline.title') }}
          </h2>
        </div>

        <div class="max-w-4xl mx-auto relative px-4">
          <!-- Central Line -->
          <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block"></div>

          <div class="space-y-12 relative">
            <div v-for="i in 4" :key="i" class="relative wow animate__animated animate__fadeInUp" :data-wow-delay="`${i*0.1}s`">
              <div class="flex flex-col md:flex-row items-center gap-8">
                <!-- Dot -->
                <div class="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#d32f2f] text-white flex items-center justify-center font-black text-sm z-10 border-4 border-white shadow-xl hidden md:flex">
                  {{ i }}
                </div>

                <!-- Content Wrapper -->
                <div :class="['w-full md:w-1/2 flex items-center', i % 2 === 0 ? 'md:mr-auto justify-start pr-0 md:pr-12' : 'md:ml-auto justify-end pl-0 md:pl-12 order-last md:order-first text-right']">
                  <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all w-full">
                    <div class="text-[#d32f2f] text-2xl font-black mb-2">{{ $t(`timeline.item_${i}_year`) }}</div>
                    <h5 class="text-xl font-black text-slate-900 mb-3">{{ $t(`timeline.item_${i}_title`) }}</h5>
                    <p class="text-slate-500 font-bold leading-relaxed">
                      {{ $t(`timeline.item_${i}_desc`) }}
                    </p>
                  </div>
                </div>
              </div>
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
      title: this.$t('nav.link_2'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('about.desc') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about-page {
  background-color: #fff;
}
</style>
