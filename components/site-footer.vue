<template>
  <footer class="bg-white pt-16 pb-8 border-t border-slate-100">
    <div class="container px-4">
      <!-- Main Row -->
      <div class="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 mb-12">
        
        <!-- Logo Section -->
        <div class="mb-4 lg:mb-0">
          <nuxt-link :to="localePath('/')">
            <img src="/img/logo/logo.webp" class="w-48 h-18 object-contain" alt="Logo">
          </nuxt-link>
        </div>

        <!-- Navigation Links -->
        <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          <li v-for="(nav, i) in navLinks" :key="i" class="list-none">
            <button v-if="!nav.isPage && $route.path === localePath('/')" 
                    v-scroll-to="{el:`#${nav.link}`, offset:-80}"
                    class="text-slate-600 hover:text-[#219b86] font-bold transition-all text-lg">
              {{ $t(`nav.link_${i+1}`) }}
            </button>
            <nuxt-link v-else :to="localePath(`/${nav.link === 'intro' ? '' : nav.link}`)"
                       class="text-slate-600 hover:text-[#219b86] font-bold transition-all text-lg">
              {{ $t(`nav.link_${i+1}`) }}
            </nuxt-link>
          </li>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-4">
          <a v-for="(social, i) in socialMedia" :key="i" :href="social.link" target="_blank"
             class="w-10 h-10 rounded-full bg-[#219b86] flex items-center justify-center text-white hover:bg-[#1a7a6a] transition-all transform hover:-translate-y-1 shadow-lg shadow-teal-900/10">
            <i :class="social.icon" class="text-lg"></i>
          </a>
        </div>

      </div>

      <!-- Divider -->
      <div class="border-t border-[#219b86]/20 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <!-- Legal Links -->
          <div class="flex items-center gap-8">
            <nuxt-link :to="localePath('/terms')" class="text-slate-600 hover:text-[#219b86] font-bold text-sm transition-all whitespace-nowrap">
              {{ $t('footer.terms') }}
            </nuxt-link>
            <nuxt-link :to="localePath('/privacy')" class="text-slate-600 hover:text-[#219b86] font-bold text-sm transition-all whitespace-nowrap">
              {{ $t('footer.privacy') }}
            </nuxt-link>
          </div>

          <!-- Copyright -->
          <p class="text-slate-500 font-bold text-sm text-center md:text-start">
            &copy; 2026 - {{ $t('footer.copyrights') }}
          </p>

        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socialMedia: [
        { icon: 'fa-brands fa-x-twitter', link: '#' },
        { icon: 'fa-brands fa-linkedin-in', link: '#' }
      ],
      navLinks: [
        { link: 'intro' },
        { link: 'about', isPage: true },
        { link: 'services' },
        { link: 'clients' },
        { link: 'partners' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// Using logical properties or flex order for RTL/LTR consistency
</style>
