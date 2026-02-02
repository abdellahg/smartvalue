<template>
  <nav class="w-full fixed top-0 left-0 z-50 py-4 bg-white/95 backdrop-blur-sm shadow-sm" id="nav">
    <div class="container flex justify-between items-center content-center px-4">
      <nuxt-link :to="localePath(`/`)" class="lg:order-1 order-1">
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
              isLinkActive(nav, i) ? 'bg-[#d90f1b] text-white' : 'text-slate-700 hover:text-[#d90f1b]'
            ]">
            {{ $t(`nav.link_${i+1}`) }}
          </nuxt-link>

          <button v-else-if="$route.path === '/'" v-scroll-to="{el:`#${nav.link}`,offset:-80}" @click="showNav = !showNav"
            :class="[
              'text-base nav-link cursor-pointer font-bold transition-all px-4 py-2 rounded-xl h-12 flex items-center',
              isLinkActive(nav, i) ? 'bg-[#d90f1b] text-white' : 'text-slate-700 hover:text-[#d90f1b]'
            ]">
            {{ $t(`nav.link_${i+1}`) }}
          </button>

          <nuxt-link v-else :to="localePath(`/`)" @click="showNav = !showNav"
            :class="[
              'text-base nav-link cursor-pointer font-bold transition-all px-4 py-2 rounded-xl h-12 flex items-center',
              isLinkActive(nav, i) ? 'bg-[#d90f1b] text-white' : 'text-slate-700 hover:text-[#d90f1b]'
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

      <div class="flex items-center content-center lg:order-3 order-3 gap-4">
        <nuxt-link
          v-for="locale in $i18n.locales"
          v-if="locale.code !== $i18n.locale"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="flex items-center gap-2 text-slate-700 hover:text-[#d90f1b] transition-all font-bold px-3 py-2 rounded-lg hover:bg-slate-50"
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
        if (this.$route.path === '/') {
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
        { link: 'projects', isPage: true },
        { link: 'branches', isPage: true },
        { link: 'blogs', isPage: true }
      ]
    }
  },
  methods: {
    isLinkActive(nav, index) {
      if (nav.isPage) {
        return this.$route.path.includes(nav.link);
      }
      if (this.$route.path === '/') {
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
        stroke: #d90f1b;
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
      z-index: 99999 !important;

      .navbar-nav {
        width: 100%;
        height: auto;
        position: absolute;
        top: 100%;
        right: -100%;
        padding: 20px;
        background: white;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        z-index: 9;
        transition: all .4s ease-in-out;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

        &.active-nav {
          right: 0px;
        }

        li {
          width: 100%;
          padding: 10px 0px;
          border-bottom: 1px solid #f1f5f9;

          &:last-child {
            border-bottom: 0px;
          }

          button, a {
            justify-content: center;
            width: 100%;
          }
        }
      }
    }
  }
</style>
