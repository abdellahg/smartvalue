<template>
  <div class="home-page overflow-hidden">
    <!-- 1. Hero Section -->
    <section class="relative min-h-[80vh] flex items-center pt-32 pb-20 bg-[#219b86] overflow-hidden" id="intro">
      <!-- Abstract Wave Pattern (Using CSS/SVG) -->
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <svg class="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,1000 C300,800 400,1000 1000,800 L1000,0 L0,0 Z" fill="none" stroke="white" stroke-width="2" opacity="0.3"></path>
          <path d="M0,900 C200,700 500,900 1000,700 L1000,0 L0,0 Z" fill="none" stroke="white" stroke-width="1.5" opacity="0.2"></path>
          <path d="M0,800 C300,600 600,800 1000,600 L1000,0 L0,0 Z" fill="none" stroke="white" stroke-width="1" opacity="0.1"></path>
        </svg>
      </div>
      
      <div class="container relative z-10 px-4">
        <div class="max-w-4xl mx-auto text-center wow animate__animated animate__fadeInUp">
          <h1 class="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
            {{ $t('home.hero_title') }}
          </h1>
          <p class="text-xl md:text-2xl text-white/90 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
            {{ $t('home.hero_desc') }}
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink :to="localePath('/contact')" class="h-14 px-10 rounded-xl bg-white text-[#219b86] font-black text-lg flex items-center justify-center shadow-xl hover:bg-slate-50 transition-all transform hover:-translate-y-1">
              {{ $t('nav.call_to_action') }}
            </NuxtLink>
            <NuxtLink :to="localePath('/services')" class="h-14 px-10 rounded-xl border-2 border-white text-white font-black text-lg flex items-center justify-center hover:bg-white hover:text-[#219b86] transition-all transform hover:-translate-y-1">
              {{ $t('nav.link_3') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Values Section -->
    <section class="py-24 bg-white" id="about">
      <div class="container px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Video Side (Right in RTL) -->
          <div class="wow animate__animated animate__fadeInRight lg:order-1">
             <div class="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-video bg-slate-100 group">
                <video class="w-full h-full object-cover" autoplay muted loop playsinline>
                  <source src="/video/Video.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 bg-[#219b86]/10 group-hover:bg-transparent transition-all duration-700"></div>

             </div>
          </div>

          <!-- Text Side (Left in RTL) -->
          <div class="wow animate__animated animate__fadeInLeft lg:order-2">
            <div class="inline-block px-4 py-1 rounded-full bg-[#219b86]/10 text-[#219b86] text-sm font-bold mb-4">
              {{ $t('home.values_subtitle') }}
            </div>
            <h2 class="text-4xl font-black text-slate-900 mb-6">{{ $t('home.values_title') }}</h2>
            <p class="text-xl text-slate-600 leading-relaxed font-medium mb-8">
              {{ $t('home.values_desc') }}
            </p>
            <div class="grid grid-cols-3 gap-8">
              <div v-for="i in 3" :key="i" class="text-center group">
                 <div class="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#219b86] mb-4 group-hover:bg-[#219b86] group-hover:text-white transition-all mx-auto shadow-sm">
                   <i :class="['fa-solid text-2xl', i===1 ? 'fa-chart-line' : (i===2 ? 'fa-shield-halved' : 'fa-lightbulb')]"></i>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Services Section -->
    <section class="py-24 bg-slate-50" id="services">
      <div class="container px-4">
        <div class="text-center mb-16 wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-[#219b86]/10 text-[#219b86] text-sm font-bold mb-4">
            {{ $t('home.services_subtitle') }}
          </div>
          <h2 class="text-4xl font-black text-slate-900">{{ $t('home.services_title') }}</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all group wow animate__animated animate__fadeInUp" :data-wow-delay="`${i*0.1}s`">
            <!-- Service Icon -->
            <div class="w-14 h-14 rounded-2xl bg-[#219b86]/5 flex items-center justify-center mb-6 group-hover:bg-[#219b86] transition-colors">
               <i :class="getServiceIcon(i)" class="text-2xl text-[#219b86] group-hover:text-white transition-colors"></i>
            </div>
            <h4 class="text-xl font-black text-slate-900 mb-4">{{ $t(`home.s${i}_title`) }}</h4>
            <p class="text-slate-500 font-bold leading-relaxed mb-6">
              {{ $t(`home.s${i}_desc`) }}
            </p>
            <NuxtLink :to="localePath('/services')" class="text-[#219b86] font-black flex items-center gap-2 group-hover:translate-x-2 transition-transform">
              {{ $t('services_page.cta_button') }}
              <i :class="['fa-solid', $i18n.locale === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right']"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Process Section -->
    <section class="py-24 bg-[#219b86] text-white overflow-hidden">
      <div class="container px-4">
        <div class="text-center mb-20 wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-bold mb-4">
            {{ $t('home.process_subtitle') }}
          </div>
          <h2 class="text-4xl font-black">{{ $t('home.process_title') }}</h2>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="space-y-4">
            <div v-for="i in 5" :key="i" class="flex gap-8 relative wow animate__animated animate__fadeInUp" :data-wow-delay="`${i*0.1}s`">
              <!-- Line -->
              <div v-if="i<5" class="absolute top-16 bottom-0 right-[27px] w-0.5 bg-white/20 hidden md:block"></div>
              
              <!-- Icon/Number -->
              <div class="w-14 h-14 rounded-2xl bg-white text-[#219b86] flex items-center justify-center font-black text-xl shrink-0 z-10 shadow-xl">
                 <i :class="getProcessIcon(i)"></i>
              </div>
              
              <!-- Content -->
              <div class="pb-12 border-b border-white/10 w-full">
                <h4 class="text-2xl font-black mb-3">{{ $t(`home.step_${i}`) }}</h4>
                <p class="text-white/80 text-lg font-medium leading-relaxed">
                  {{ $t(`home.step_${i}_desc`) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Why Us Section -->
    <section class="py-24 bg-white">
      <div class="container px-4 text-center">
        <div class="text-center mb-16 wow animate__animated animate__fadeInUp">
          <div class="inline-block px-4 py-1 rounded-full bg-[#219b86]/10 text-[#219b86] text-sm font-bold mb-4">
            {{ $t('home.why_subtitle') }}
          </div>
          <h2 class="text-4xl font-black text-slate-900">{{ $t('home.why_title') }}</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="i in 3" :key="i" class="wow animate__animated animate__fadeInUp" :data-wow-delay="`${i*0.1}s`">
            <div class="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-[#219b86] mb-8 mx-auto shadow-inner group hover:bg-[#219b86] transition-all">
              <i :class="['fa-solid text-3xl group-hover:text-white', i===1 ? 'fa-users' : (i===2 ? 'fa-handshake' : 'fa-bullseye')]"></i>
            </div>
            <h4 class="text-2xl font-black text-slate-900 mb-4">{{ $t(`home.feature_${i}`) }}</h4>
            <p class="text-slate-500 font-bold text-lg leading-relaxed">
              {{ $t(`home.feature_${i}_desc`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Clients & Partners -->
    <section class="py-20 bg-slate-50" id="clients">
       <div class="container px-4">
         <!-- Clients Carousel -->
         <div class="mb-24">
            <h3 class="text-2xl font-black text-center text-[#219b86] mb-12">{{ $t('home.clients_title') }}</h3>
            <div v-swiper:clientsSwiper="swiperOptions" class="swiper-container">
              <div class="swiper-wrapper flex items-center">
                <div v-for="i in clientImages" :key="i" class="swiper-slide flex justify-center items-center">
                  <img :src="`/img/clients/${i}.webp`" class="h-12 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100" :alt="`Client ${i}`">
                </div>
              </div>
            </div>
         </div>
         
         <!-- Partners Carousel -->
         <div id="partners">
            <h3 class="text-2xl font-black text-center text-[#219b86] mb-12">{{ $t('home.partners_title') }}</h3>
            <div v-swiper:partnersSwiper="swiperOptions" class="swiper-container">
              <div class="swiper-wrapper flex items-center">
                <div v-for="i in 8" :key="i" class="swiper-slide flex justify-center items-center">
                  <img :src="`/img/partners/partner_${i}.webp`" class="h-16 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer opacity-60 hover:opacity-100" :alt="`Partner ${i}`">
                </div>
              </div>
            </div>
         </div>
       </div>
    </section>

    <!-- 7. Contact CTA Section -->
    <section class="py-24 bg-white overflow-hidden">
      <div class="container px-4">
        <div class="bg-[#219b86] rounded-[4rem] p-8 md:p-20 relative overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
          <!-- Abstract circles -->
          <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <!-- Form Side -->
          <div class="w-full lg:w-3/5 order-2 lg:order-1 wow animate__animated animate__fadeInLeft">
             <form @submit.prevent="" class="grid grid-cols-1 md:grid-cols-2 gap-4">
               <input type="text" :placeholder="$t('input.name')" class="h-14 px-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:bg-white focus:text-[#219b86] outline-none transition-all font-bold">
               <input type="email" :placeholder="$t('input.email')" class="h-14 px-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:bg-white focus:text-[#219b86] outline-none transition-all font-bold">
               <select class="h-14 px-6 rounded-2xl bg-white/10 border border-white/20 text-white focus:bg-white focus:text-[#219b86] outline-none transition-all font-bold md:col-span-2 appearance-none">
                 <option value="" disabled selected class="text-slate-400">{{ $t('input.service') }}</option>
                 <option v-for="i in 4" :key="i" :value="i" class="text-slate-900">{{ $t(`services_page.s${i}_title`) }}</option>
               </select>
               <textarea :placeholder="$t('input.message')" rows="4" class="p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:bg-white focus:text-[#219b86] outline-none transition-all font-bold md:col-span-2 resize-none"></textarea>
               <button type="submit" class="h-14 rounded-2xl bg-white text-[#219b86] font-black text-lg md:col-span-2 hover:bg-teal-50 shadow-xl shadow-teal-900/20 transform hover:-translate-y-1 transition-all">
                  {{ $t('home.send_msg') }}
               </button>
             </form>
          </div>

          <!-- Text Side -->
          <div class="w-full lg:w-2/5 order-1 lg:order-2 text-white wow animate__animated animate__fadeInRight">
             <div class="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-bold mb-6">
                {{ $t('home.contact_subtitle') }}
             </div>
             <h2 class="text-3xl md:text-5xl font-black mb-8 leading-tight">{{ $t('home.contact_title') }}</h2>
             <p class="text-white/80 text-lg font-bold mb-10 leading-relaxed">
               {{ $t('home.contact_desc_footer') }}
             </p>
             <div class="flex items-center gap-6">
                <div class="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white text-2xl">
                   <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <span class="block text-white/60 text-sm font-bold">{{ $t('contact_page.info_email') }}</span>
                  <a :href="`mailto:${$t('footer.email')}`" class="text-2xl font-black hover:underline transition-all">{{ $t('footer.email') }}</a>
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
  data() {
    return {
      clientImages: [2, 7, 8, 9, 10],
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        breakpoints: {
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 }
        }
      }
    }
  },
  methods: {
    getServiceIcon(i) {
      const icons = [
        'chart-pie',
        'cloud-arrow-up',
        'layer-group',
        'server',
        'rss',
        'robot'
      ];
      return `fa-solid fa-${icons[i-1]}`;
    },
    getProcessIcon(i) {
      const icons = [
        'magnifying-glass',
        'drafting-compass',
        'code',
        'vial-circle-check',
        'rocket'
      ];
      return `fa-solid fa-${icons[i-1]}`;
    }
  },
  head() {
    return {
      title: this.$t('home.title')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  scroll-behavior: smooth;
}
</style>
