<template>
  <nav class="w-full fixed top-0 left-0 z-50 py-4 bg-white/95 backdrop-blur-sm shadow-sm rounded-b-[2rem]" id="nav">
    <div class="container flex justify-between items-center content-center px-4">
      <nuxt-link :to="localePath(`/`)" class="lg:order-1 order-1 logo-link">
        <img
        src="/img/logo/logo.webp"
        class="w-48 h-16 object-contain logo"
        loading="lazy"
        :alt="$t(`app.title`)" />
      </nuxt-link>

      <ul class="navbar-nav flex items-center content-center lg:order-2 order-4" :class="showNav ? 'active-nav' : ''">
        <li class="mx-1" v-for="(nav , i) in navLinks" :key="i">
          <nuxt-link v-if="nav.isPage" :to="localePath(`/${nav.link}`)" @click="showNav = !showNav"
            :class="[
              'text-base nav-link cursor-pointer font-bold transition-all px-4 py-2 rounded-xl h-12 flex items-center',
              isLinkActive(nav, i) ? 'bg-[#219b86] text-white' : 'text-slate-700 hover:text-[#219b86]'
            ]">
            {{ $t(`nav.link_${i+1}`) }}
          </nuxt-link>

          <button v-else-if="$route.path === localePath('/')" v-scroll-to="{el:`#${nav.link}`,offset:-80}" @click="showNav = !showNav"
            :class="[
              'text-base nav-link cursor-pointer font-bold transition-all px-4 py-2 rounded-xl h-12 flex items-center',
              isLinkActive(nav, i) ? 'bg-[#219b86] text-white' : 'text-slate-700 hover:text-[#219b86]'
            ]">
            {{ $t(`nav.link_${i+1}`) }}
          </button>

          <nuxt-link v-else :to="localePath('/') + `#${nav.link}`" @click="showNav = !showNav"
            :class="[
              'text-base nav-link cursor-pointer font-bold transition-all px-4 py-2 rounded-xl h-12 flex items-center',
              isLinkActive(nav, i) ? 'bg-[#219b86] text-white' : 'text-slate-700 hover:text-[#219b86]'
            ]">
            {{ $t(`nav.link_${i+1}`) }}
          </nuxt-link>
        </li>
      </ul>

      <div
        class="hamburger lg:hidden order-2 ml-auto"
        :class="showNav ? 'active' : ''"
        @click="showNav = !showNav">
        <svg viewBox="0 0 70 70" class="w-10 h-10">
          <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
          <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
          <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
        </svg>
      </div>

      <div class="flex items-center content-center lg:order-3 order-3 gap-4 header-actions">
        <nuxt-link
          v-for="locale in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="flex items-center gap-2 text-slate-700 hover:text-[#219b86] transition-all font-bold px-3 py-2 rounded-lg hover:bg-slate-50"
        >
          <i class="fas fa-globe text-sm"></i>
          <span>{{ locale.name }}</span>
        </nuxt-link>
        <call-to-action />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function(){
      window.addEventListener("scroll", () => {
        var navbar = document.getElementById("nav");
        var nav_classes = navbar.classList;
        if(document.documentElement.scrollTop >= 150) {
          if (nav_classes.contains("navscroll") === false) {
            nav_classes.toggle("navscroll");
          }
        }
        else {
          if (nav_classes.contains("navscroll") === true) {
            nav_classes.toggle("navscroll");
          }
        }

        // Scroll Spy for Home Page Sections
        if (this.$route.path === this.localePath('/')) {
          const sections = this.navLinks.filter(n => !n.isPage).map(n => n.link);
          for (const section of sections) {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 100 && rect.bottom >= 100) {
                this.activeSection = section;
                break;
              }
            }
          }
        }
      })
    })
  },
  data(){
    return{
      showNav: false,
      activeSection: 'intro',
      navLinks: [
        { link: 'intro' },
        { link: 'about', isPage: true },
        { link: 'services', isPage: true },
        { link: 'clients' },
        { link: 'partners' }
      ]
    }
  },
  methods: {
    isLinkActive(nav, index) {
      if (nav.isPage) {
        return this.$route.path.includes(nav.link);
      }
      if (this.$route.path === this.localePath('/')) {
        return this.activeSection === nav.link;
      }
      return false;
    }
  }
}
</script>

<style lang="scss">
  nav {
    transition: all .4s linear;

    .logo {
      transition: all .3s linear;
    }

    &.navscroll {
      padding: 5px 0px;
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);

      .logo {
        height: 50px;
      }
    }

    .hamburger {
      svg {
        stroke: #219b86;
        stroke-width: 0.2rem;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
        display: block;

        path {
          transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease) var(--delay, 0s), stroke-dashoffset var(--duration, 0.85s) var(--easing, ease) var(--delay, 0s);
          stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
          stroke-dashoffset: var(--offset, 126px);
          transform: translateZ(0);

          &:nth-child(2) {
            --duration: 0.7s;
            --easing: ease-in;
            --offset: 100px;
            --array-2: 74px;
          }

          &:nth-child(3) {
            --offset: 133px;
            --array-2: 107px;
          }
        }
      }

      &.active svg {
        path {
          --offset: 57px;

          &:nth-child(1), &:nth-child(3) {
            --delay: 0.15s;
            --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
          }

          &:nth-child(2) {
            display: none;
          }

          &:nth-child(3) {
            --offset: 58px;
          }
        }
      }
    }
  }

  @media (max-width: 1023px) {
    nav {
      // Ensure the nav container allows the fixed menu to be relative to viewport or properly stacked
      .container {
        position: relative;
        z-index: 52; // Higher than menu
      }

      // Ensure logo and hamburger stay on top of the menu overlay
      .logo-link, .hamburger, .header-actions {
        position: relative;
        z-index: 53;
      }

      .navbar-nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100dvh; // Use dynamic viewport height
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        padding: 120px 20px 40px; // Top padding to clear header
        flex-direction: column;
        justify-content: flex-start; // Start from top
        align-items: center;
        z-index: 40; // Behind header content but above page content
        
        // Transition settings
        transform: translateY(-100%); // Slide from top or fade
        opacity: 0;
        visibility: hidden;
        transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
        
        box-shadow: none;
        border-bottom-left-radius: 2rem;
        border-bottom-right-radius: 2rem;

        &.active-nav {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
          right: 0; // Reset relative positioning override
        }

        li {
          width: 100%;
          text-align: center;
          padding: 10px 0;
          border-bottom: none;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.3s ease;
          
          // Staggered animation delay handled via CSS or just global delay
          // We can simulate it roughly or just leave it simple
        }
        
        // When active, show list items
        &.active-nav li {
           transform: translateY(0);
           opacity: 1;
           @for $i from 1 through 6 {
             &:nth-child(#{$i}) {
               transition-delay: #{$i * 0.1}s;
             }
           }
        }

        a, button {
          font-size: 1.5rem; // Larger font
          font-weight: 800;
          color: #0f172a;
          justify-content: center;
          width: auto;
          display: inline-flex;
          padding: 0.5rem 1.5rem;
          border-radius: 1rem;
          
          &:hover {
             background: rgba(33, 155, 134, 0.1);
             color: #219b86;
             transform: translateY(-2px);
          }
          
          &.bg-\[\#219b86\] { // Active state override
             background: #219b86 !important;
             color: white !important;
             box-shadow: 0 10px 20px -10px rgba(33, 155, 134, 0.5);
          }
        }
      }
    }
  }
</style>
