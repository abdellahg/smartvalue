<template>
  <div class="home-page overflow-hidden">
    <!-- 1. Hero Section -->
    <section class="relative min-h-screen flex items-center pt-32 pb-20 bg-[#219b86] overflow-hidden" id="intro">
      <!-- Abstract Wave Pattern (Using CSS/SVG) -->
      <!-- Brand Icon Background -->
      <div class="absolute top-[57%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 select-none">
        <img src="/img/logo/logo_icon.webp" class="w-[25vw] max-w-[450px] hero-shape-animation filter brightness-0 invert" alt="Background Shape">
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
            <NuxtLink :to="localePath('/services')" class="h-14 px-10 rounded-xl border-2 border-white text-white font-black text-lg flex items-center justify-center hover:bg-white hover:text-[#219b86] transition-all transform hover:-translate-y-1">
              {{ $t('nav.link_3') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white relative overflow-hidden" id="about">
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top translate-x-20 pointer-events-none"></div>
      <!-- Brand Icon Background -->
      <div class="absolute bottom-20 left-10 opacity-[0.03] pointer-events-none select-none">
        <img src="/img/logo/logo_icon.webp" class="w-96 h-96 -rotate-12" alt="Background Shape">
      </div>

      <div class="container px-4 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center justify-center">

          <!-- Visual Composition Side -->
          <div class="lg:col-span-6 wow animate__animated animate__fadeInRight order-2 lg:order-1">
            <div class="relative pt-4">
              <!-- Main Video Container with stylized frame -->
              <div class="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(33,155,134,0.15)] border-8 border-white bg-white group">
                <video class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" autoplay muted loop playsinline>
                  <source src="/video/Video.mp4" type="video/mp4">
                </video>
                <!-- Play Overlay Blur -->
                <div class="absolute inset-0 bg-[#219b86]/5 group-hover:bg-transparent transition-all duration-700"></div>
              </div>

              <!-- Decorative floating elements around the video -->
              <div class="absolute -top-10 -right-10 w-24 h-24 bg-teal-50 rounded-full blur-2xl animate-pulse"></div>
              <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-slate-100 rounded-full blur-3xl opacity-60"></div>
            </div>
          </div>

          <!-- Content Side -->
          <div class="lg:col-span-6 wow animate__animated animate__fadeInLeft order-1 lg:order-2">
            <div class="lg:pl-12">
              <div class="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#219b86]/10 text-[#219b86] text-sm font-black mb-8 uppercase tracking-widest border border-[#219b86]/5">
                <span class="w-2 h-2 bg-[#219b86] rounded-full animate-ping"></span>
                {{ $t('home.values_title') }}
              </div>

              <p class="text-xl text-slate-500 leading-relaxed font-bold mb-12">
                {{ $t('home.values_desc') }}
              </p>

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
            {{ $t('home.services_title') }}
          </div>
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
    <!-- 4. Process Section -->
    <section class="py-24 bg-[#219b86] overflow-hidden relative">
      <!-- Brand Icon Background -->
      <div class="absolute top-0 right-0 opacity-[0.07] pointer-events-none select-none transform translate-x-1/3 -translate-y-1/4">
        <img src="/img/logo/logo_icon.webp" class="w-[800px] h-[800px] rotate-12 filter brightness-0 invert" alt="Background Shape">
      </div>
      <div class="container px-4 relative z-10">
        <!-- Header -->
        <div class="text-center mb-24 wow animate__animated animate__fadeInUp">
          <div class="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-black tracking-widest uppercase mb-6">
            {{ $t('home.process_title') }}
          </div>
        </div>

        <!-- Steps Grid -->
        <div class="relative max-w-7xl mx-auto">
            <!-- Connecting Line (Desktop) -->
            <div class="hidden lg:block absolute top-[60px] left-0 w-full h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0"></div>

            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">
                <div v-for="i in 5" :key="i" class="relative group wow animate__animated animate__fadeInUp" :data-wow-delay="`${i*0.1}s`">
                    <!-- Step Marker -->
                    <div class="w-[120px] h-[120px] mx-auto relative mb-8 z-10">
                        <!-- Orbit Ring -->
                        <div class="absolute inset-0 rounded-full border border-white/20 group-hover:scale-110 transition-transform duration-500"></div>
                        <div class="absolute inset-2 rounded-full border border-white/10 group-hover:rotate-180 transition-transform duration-700"></div>

                        <!-- Center Core -->
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-20 h-20 bg-white rounded-2xl rotate-45 flex items-center justify-center shadow-2xl group-hover:rotate-0 transition-transform duration-300">
                                <div class="w-full h-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                    <i :class="[getProcessIcon(i), 'text-3xl text-[#219b86]']"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Badge Number -->
                        <div class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 text-[#219b86] font-black flex items-center justify-center shadow-lg border-2 border-[#219b86] text-sm">
                            {{ i }}
                        </div>
                    </div>

                    <!-- Content Card -->
                    <div class="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 group-hover:bg-white group-hover:-translate-y-2 transition-all duration-300 cursor-default text-center h-full flex flex-col items-center">
                         <h4 class="text-xl font-black text-white mb-3 group-hover:text-[#219b86] transition-colors leading-tight min-h-[3.5rem] flex items-center justify-center">
                             {{ $t(`home.step_${i}`) }}
                         </h4>
                         <p class="text-white/70 text-sm font-bold leading-relaxed group-hover:text-slate-500 transition-colors">
                             {{ $t(`home.step_${i}_desc`) }}
                         </p>
                    </div>

                    <!-- Arrow Connector (Mobile) -->
                    <div v-if="i < 5" class="lg:hidden flex justify-center py-4 text-white/30">
                        <i class="fa-solid fa-arrow-down text-2xl animate-bounce"></i>
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
    <section class="py-12 bg-white relative" id="clients" style="scroll-margin-top: 80px;">
       <div class="absolute inset-0 bg-slate-50/50 skew-y-3 transform origin-bottom-left z-0"></div>
       <!-- Brand Icon Background -->
       <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none z-0">
          <img src="/img/logo/logo_icon.webp" class="w-[1000px] h-[1000px]" alt="Background Shape">
       </div>
       <div class="container px-4 relative z-10">

         <!-- Clients -->
         <div class="mb-8 text-center">
            <div class="inline-block px-4 py-1 rounded-full bg-[#219b86]/10 text-[#219b86] text-sm font-black mb-6 uppercase tracking-widest">{{ $t('home.clients_title') }}</div>
            <h3 class="text-3xl font-black text-slate-900 mb-12">{{ $t('home.clients_heading') }}</h3>

            <div v-swiper:clientsSwiper="swiperOptions" class="swiper-container pb-12" :key="'clients-'+$i18n.locale" dir="ltr">
              <div class="swiper-wrapper flex items-center">
                <div v-for="i in clientImages" :key="i" class="swiper-slide px-4">
                  <div class="bg-white rounded-2xl p-6 h-32 border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center group hover:border-[#219b86]/30 hover:shadow-[0_10px_30px_-10px_rgba(33,155,134,0.15)] transition-all duration-300">
                      <img :src="`/img/clients/${i}.webp`" class="max-h-16 w-auto transition-all duration-500 group-hover:scale-110" :alt="`Client ${i}`">
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
         </div>

         <!-- Partners -->
         <div id="partners" class="text-center pt-4" style="scroll-margin-top: 40px;">
            <div class="inline-block px-4 py-1 rounded-full bg-[#219b86]/10 text-[#219b86] text-sm font-black mb-6 uppercase tracking-widest">{{ $t('home.partners_title') }}</div>

            <div v-swiper:partnersSwiper="marqueeOptions" class="swiper-container pb-12" :key="'partners-'+$i18n.locale" dir="ltr">
              <div class="swiper-wrapper flex items-center">
                <div v-for="p in partnersList" :key="p.id" class="swiper-slide px-4">
                  <div class="bg-white/50 backdrop-blur-sm rounded-xl p-4 h-24 border border-slate-100 flex items-center justify-center group hover:bg-white hover:shadow-lg transition-all duration-300">
                      <img :src="`/img/partners/${p.file}`" class="max-h-12 w-auto transition-all duration-300 hover:scale-110" :alt="`Partner ${p.id}`">
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
  data() {
    return {
      homeForm: {
        name: '',
        email: '',
        service: '',
        message: ''
      },
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
      },
      marqueeOptions: {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        speed: 5000,
        allowTouchMove: false,
        freeMode: true,
        freeModeMomentum: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        },
        breakpoints: {
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 }
        }
      },
       techStack: [
        { name: 'AWS', icon: 'fa-aws' },
        { name: 'Google Cloud', icon: 'fa-google' },
        { name: 'Python', icon: 'fa-python' },
        { name: 'Node.js', icon: 'fa-node-js' },
        { name: 'Vue.js', icon: 'fa-vuejs' },
        { name: 'Docker', icon: 'fa-docker' },
        { name: 'Microsoft', icon: 'fa-microsoft' },
        { name: 'React', icon: 'fa-react' },
        { name: 'Unity', icon: 'fa-unity' }
      ],
      partnersList: [
        { id: 1, file: 'partner_1.png' },
        { id: 2, file: 'partner_2.webp' },
        { id: 3, file: 'partner_3.webp' },
        { id: 4, file: 'partner_4.webp' },
        { id: 5, file: 'partner_5.webp' },
        { id: 6, file: 'partner_6.webp' },
        { id: 7, file: 'partner_7.webp' },
        { id: 8, file: 'partner_8.webp' }
      ]
    }
  },
  mounted() {
    // Handle hash-based scrolling when page loads
    this.$nextTick(() => {
      const hash = this.$route.hash;
      if (hash) {
        // Remove the '#' from the hash to get the element ID
        const targetId = hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Add a small delay to ensure the page is fully rendered
          setTimeout(() => {
            // Smooth scroll to the target element with offset for fixed header
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }, 300);
        }
      }
    });
  },
  methods: {
    submitHomeForm() {
       if(!this.homeForm.name || !this.homeForm.email || !this.homeForm.service) {
         if(this.$toast) this.$toast.error(this.$t('v.required'));
         else alert(this.$t('v.required'));
         return;
       }

       const subject = encodeURIComponent(`New Inquiry from ${this.homeForm.name}`);
       const body = encodeURIComponent(
         `Name: ${this.homeForm.name}\n` +
         `Email: ${this.homeForm.email}\n` +
         `Service: ${this.homeForm.service}\n\n` +
         `Message:\n${this.homeForm.message}`
       );

       const mailtoLink = `mailto:info@smart-value.sa?subject=${subject}&body=${body}`;
       window.location.href = mailtoLink;

       this.homeForm = { name: '', email: '', service: '', message: '' };
       if(this.$toast) this.$toast.success(this.$t('input.done'));
    },
    getServiceIcon(i) {
      const icons = [
        'layer-group',
        'cloud-arrow-up',
        'chart-pie',
        'robot',
        'rss',
        'server'
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

  :deep(.swiper-wrapper) {
    transition-timing-function: linear !important;
  }

  .hero-shape-animation {
    animation: hero-float 15s ease-in-out infinite;
    opacity: 0.05;
  }

  @keyframes hero-float {
    0%, 100% {
      transform: translateY(0) rotate(0deg) scale(1);
      opacity: 0.04;
    }
    50% {
      transform: translateY(-40px) rotate(10deg) scale(1.1);
      opacity: 0.07;
    }
  }
}
</style>
