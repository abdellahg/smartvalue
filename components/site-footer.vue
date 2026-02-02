<template>
  <footer class="bg-[#0067a7] pt-24 pb-4 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#d32f2f]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

    <div class="container relative z-10 px-4">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

        <!-- Column 1: Brand & About -->
        <div class="wow animate__animated animate__fadeInUp">
          <nuxt-link to="/">
            <img src="/img/logo/logo.webp" class="w-48 h-18 object-contain mb-8 filter brightness-0 invert" alt="Logo">
          </nuxt-link>
          <p class="text-white/90 text-lg leading-relaxed mb-8 font-medium">
            {{ $t('footer.desc') }}
          </p>
          <div class="flex items-center gap-3">
            <a v-for="(social, i) in socialMedia" :key="i" :href="social.link" target="_blank"
               class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#d32f2f] transition-all transform hover:-translate-y-1">
              <i :class="social.icon" class="text-lg"></i>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <h4 class="text-white text-xl font-black mb-8 border-b-2 border-[#d32f2f] pb-2 inline-block">{{ $t('footer.quick_links') }}</h4>
          <ul class="space-y-4">
            <li v-for="(nav, i) in navLinks" :key="i">
              <button v-if="!nav.isPage && $route.path === '/'" v-scroll-to="{el:`#${nav.link}`, offset:-80}"
                      class="text-white/80 hover:text-white font-bold transition-all flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-[#d32f2f] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ $t(`nav.link_${i+1}`) }}
              </button>
              <nuxt-link v-else :to="localePath(`/${nav.link === 'intro' ? '' : (nav.isPage ? nav.link : '')}`)"
                         class="text-white/80 hover:text-white font-bold transition-all flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-[#d32f2f] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ $t(`nav.link_${i+1}`) }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
          <h4 class="text-white text-xl font-black mb-8 border-b-2 border-[#d32f2f] pb-2 inline-block">{{ $t('footer.services_title') }}</h4>
          <ul class="space-y-4">
            <li v-for="i in 4" :key="i">
              <nuxt-link :to="localePath('/services')" class="text-white/80 hover:text-white font-bold transition-all flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 rounded-full bg-[#d32f2f] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                {{ $t(`footer.service_${i}`) }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Column 4: Contact Info -->
        <div class="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
          <h4 class="text-white text-xl font-black mb-8 border-b-2 border-[#d32f2f] pb-2 inline-block">{{ $t('footer.contact_title') }}</h4>
          <ul class="space-y-6">
            <li class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-location-dot text-white"></i>
              </div>
              <span class="text-white/90 font-bold leading-relaxed">{{ $t('footer.address') }}</span>
            </li>
            <li class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-phone text-white"></i>
              </div>
              <a :href="`tel:${$t('footer.phone')}`" class="text-white/90 font-bold dir-ltr">{{ $t('footer.phone') }}</a>
            </li>
            <li class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <i class="fa-brands fa-whatsapp text-white"></i>
              </div>
              <a :href="`https://wa.me/${$t('footer.phone').replace(/\s/g, '')}`" target="_blank" class="text-white/90 font-bold dir-ltr">{{ $t('footer.phone') }}</a>
            </li>
            <li class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <i class="fa-solid fa-envelope text-white"></i>
              </div>
              <a :href="`mailto:${$t('footer.email')}`" class="text-white/90 font-bold">{{ $t('footer.email') }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Certified By Section -->
      <div class="border-t border-white/10 pt-12 mb-8 wow animate__animated animate__fadeInUp">
        <h4 class="text-[#d32f2f] text-2xl font-black text-center mb-10">{{ $t('footer.certified_title') }}</h4>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div v-for="(logo, i) in trustLogos" :key="i"
               class="bg-white/5 border border-white/10 p-8 rounded-3xl flex items-center justify-center hover:bg-white/10 transition-all group h-32">
            <img :src="`/img/trust/${logo.img}`" :alt="logo.alt" 
                 class="max-h-full w-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity">
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/10 py-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <p class="text-white/70 font-bold text-sm">
          &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyrights') }}
        </p>
        <div class="flex items-center gap-8">
          <nuxt-link to="/privacy" class="text-white/70 hover:text-white font-bold text-sm transition-all">{{ $t('footer.privacy') }}</nuxt-link>
          <nuxt-link to="/terms" class="text-white/70 hover:text-white font-bold text-sm transition-all">{{ $t('footer.terms') }}</nuxt-link>
        </div>
        <!-- Back to Top -->
        <button v-scroll-to="{el:'#nav', offset:0}" class="w-10 h-10 rounded-xl bg-[#d32f2f] text-white flex items-center justify-center shadow-lg shadow-blue-900/20 hover:scale-110 active:scale-95 transition-all">
          <i class="fa-solid fa-chevron-up"></i>
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        { icon: 'fa-brands fa-facebook-f', link: '#' },
        { icon: 'fa-brands fa-x-twitter', link: '#' },
        { icon: 'fa-brands fa-instagram', link: '#' },
        { icon: 'fa-brands fa-linkedin-in', link: '#' },
        { icon: 'fa-brands fa-snapchat', link: '#' },
        { icon: 'fa-brands fa-whatsapp', link: '#' }
      ],
      navLinks: [
        { link: 'intro' },
        { link: 'about', isPage: true },
        { link: 'services', isPage: true },
        { link: 'projects', isPage: true },
        { link: 'branches', isPage: true },
        { link: 'blogs', isPage: true }
      ],
      trustLogos: [
        { img: 'logo_industrialsecurity_rtl-xeXgyGXa.webp', alt: 'Industrial Security' },
        { img: 'defaa_madani_logo-9IA_Q551.webp', alt: 'Civil Defense' },
        { img: 'baladi_logo-BuAv7uW-.webp', alt: 'Balady' },
        { img: 'Ministry-of-Interior-DlRcludB.webp', alt: 'Ministry of Interior' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.dir-ltr {
  direction: ltr;
}
</style>

