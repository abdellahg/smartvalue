<template>
  <div class="about-page">
    <!-- 1. Modern Hero Section -->
    <section class="relative pt-48 pb-32 min-h-[70vh] flex items-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img src="/img/about/hero.webp" class="w-full h-full object-cover" alt="About Smart Values">
        <!-- Modern Gradients & Overlays -->
        <div class="absolute inset-0 bg-[#090e16]/70"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#090e16] via-transparent to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-[#219b86]/20 to-transparent"></div>
      </div>

      <div class="container relative z-10 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <div class="wow animate__animated animate__fadeInDown">
            <div class="inline-block px-4 py-1 rounded-full bg-[#219b86]/20 border border-[#219b86]/30 text-[#219b86] text-sm font-bold mb-6 backdrop-blur-md">
              {{ $t('about.slogan') }}
            </div>
            <h1 class="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              {{ $t('about.title') }}
            </h1>
          </div>

          <div class="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <p class="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium mb-12">
              {{ $t('about.desc') }}
            </p>
          </div>

          <!-- Quote Section -->
          <div class="wow animate__animated animate__zoomIn" data-wow-delay="0.4s">
            <div class="relative p-8 md:p-12 rounded-[3rem] bg-white/5 backdrop-blur-xl border border-white/10 max-w-3xl mx-auto">
              <i class="fa-solid fa-quote-right absolute -top-6 -right-6 text-6xl text-[#219b86]/20"></i>
              <p class="text-lg md:text-xl text-white font-black italic mb-6 leading-relaxed">
                "{{ $t('about.quote') }}"
              </p>
              <div class="flex items-center justify-center gap-4">
                <div class="h-px w-12 bg-[#219b86]"></div>
                <span class="text-[#219b86] font-bold">{{ $t('about.quote_author') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Vision & Mission Section (Glassmorphism Cards) -->
    <section class="py-24 bg-[#090e16] relative overflow-hidden">
      <!-- Decorative background elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#219b86]/10 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#219b86]/5 rounded-full blur-[100px]"></div>

      <div class="container px-4 relative z-10">
        <div class="text-center mb-20 wow animate__animated animate__fadeInUp">
          <h2 class="text-3xl md:text-5xl font-black text-white mb-4">{{ $t('about.believe_title') }}</h2>
          <div class="h-1.5 w-24 bg-[#219b86] mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <!-- Vision Card -->
          <div class="group relative p-8 md:p-16 rounded-[4rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#219b86]/50 transition-all duration-700 wow animate__animated animate__fadeInRight">
             <div class="w-20 h-20 rounded-3xl bg-[#219b86] flex items-center justify-center mb-10 shadow-2xl shadow-teal-900/40 group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-eye text-3xl text-white"></i>
             </div>
             <h3 class="text-3xl font-black text-white mb-8 group-hover:text-[#219b86] transition-colors">{{ $t('about.vision_title') }}</h3>
             <p class="text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
               {{ $t('about.vision_desc') }}
             </p>
             <!-- Decoration -->
             <div class="absolute bottom-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                <i class="fa-solid fa-eye text-8xl text-white"></i>
             </div>
          </div>

          <!-- Mission Card -->
          <div class="group relative p-8 md:p-16 rounded-[4rem] bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-[#219b86]/50 transition-all duration-700 wow animate__animated animate__fadeInLeft">
             <div class="w-20 h-20 rounded-3xl bg-white flex items-center justify-center mb-10 shadow-2xl group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-paper-plane text-3xl text-[#219b86]"></i>
             </div>
             <h3 class="text-3xl font-black text-white mb-8 group-hover:text-[#219b86] transition-colors">{{ $t('about.mission_title') }}</h3>
             <p class="text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
               {{ $t('about.mission_desc') }}
             </p>
             <!-- Decoration -->
             <div class="absolute bottom-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                <i class="fa-solid fa-paper-plane text-8xl text-white"></i>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Values Section -->
    <section class="py-24 bg-white">
      <div class="container px-4">
        <div class="text-center mb-20 wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-[#219b86]/5 text-[#219b86] text-sm font-bold mb-4">
            {{ $t('values.sub_title') }}
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-slate-900">
            {{ $t('values.title') }}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="i in 4" :key="i" class="bg-slate-50 p-10 rounded-[3rem] hover:bg-[#219b86] group transition-all duration-500 wow animate__animated animate__fadeInUp" :data-wow-delay="`${i*0.1}s`">
             <div class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <i :class="['fa-solid text-2xl text-[#219b86]', i===1?'fa-lightbulb':i===2?'fa-shield-halved':i===3?'fa-handshake':i===4?'fa-chart-line':'']"></i>
             </div>
             <h4 class="text-2xl font-black text-slate-900 mb-4 group-hover:text-white transition-colors">{{ $t(`values.item_${i}_title`) }}</h4>
             <p class="text-slate-500 font-bold leading-relaxed group-hover:text-white/80 transition-colors">
               {{ $t(`values.item_${i}_desc`) }}
             </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Timeline Section -->
    <section class="py-24 bg-slate-50 relative overflow-hidden">
      <!-- Abstract Wave -->
      <div class="absolute top-0 left-0 w-full h-24 bg-white rounded-b-[100%]"></div>

      <div class="container px-4 py-12">
        <div class="text-center mb-20 wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-600 text-sm font-bold mb-4">
            {{ $t('timeline.sub_title') }}
          </div>
          <h2 class="text-3xl md:text-5xl font-black text-slate-900">
            {{ $t('timeline.title') }}
          </h2>
        </div>

        <div class="max-w-5xl mx-auto relative">
          <!-- Central Line -->
          <div class="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

          <div class="space-y-24">
            <div v-for="i in 4" :key="i" class="relative group wow animate__animated animate__fadeInUp">
              <div class="flex flex-col md:flex-row items-center gap-12">
                <!-- Year indicator as dot -->
                <div class="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-[#219b86] flex items-center justify-center z-10 hidden md:flex group-hover:bg-[#219b86] group-hover:text-white transition-all shadow-xl">
                    <span class="font-black text-[#219b86] group-hover:text-white">{{ $t(`timeline.item_${i}_year`) }}</span>
                </div>

                <!-- Content -->
                <div :class="['w-full md:w-1/2', i%2===0 ? 'md:order-2' : 'md:order-1 md:text-right']">
                   <div class="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 group-hover:-translate-y-2 transition-transform duration-500">
                      <div class="md:hidden text-[#219b86] font-black mb-4 text-2xl">{{ $t(`timeline.item_${i}_year`) }}</div>
                      <h3 class="text-2xl font-black text-slate-900 mb-4">{{ $t(`timeline.item_${i}_title`) }}</h3>
                      <p class="text-slate-500 font-bold text-lg leading-relaxed">
                        {{ $t(`timeline.item_${i}_desc`) }}
                      </p>
                   </div>
                </div>
                <!-- Empty spacer for desktop -->
                <div :class="['hidden md:block md:w-1/2', i%2===0 ? 'md:order-1' : 'md:order-2']"></div>
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
  scroll-behavior: smooth;
}
</style>
