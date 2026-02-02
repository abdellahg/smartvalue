import Vue from 'vue'
import { mapGetters } from 'vuex'
import callToAction from '@/components/core/call-to-action'
import socailMedia from '@/components/core/socail-media'
import vError from '@/components/v-error'
import Cookies from "js-cookie";

const Mix = {
  install(Vue, options) {
    Vue.component('call-to-action', callToAction)
    Vue.component('socail-media', socailMedia)
    Vue.component('v-error', vError)

    Vue.mixin({
      data() {
        return {
          number: '0112710231',
          mobile: '0112710231',
          email: 'Info@almetrekgroup.com'
        }
      },

      computed: {
        ...mapGetters({ isloading: 'isloading', errors: 'errors' }),

        // locale() { return this.$i18n.locale },

        isrtl() { return this.$t(`app.dir`) === 'rtl' }
      },

      methods: {
        replaceQuery() {
          const query = Object.assign({}, this.$route.query)
          query.nan = undefined
          return this.$router.replace({ query }).catch(() => {})
        },

        register() {
          const register = new CustomEvent('event:register')
          document.dispatchEvent(register)

          Cookies.remove(`_source`)
        },

        callus() {
          const call = new CustomEvent('event:call')
          document.dispatchEvent(call)

          window.open(`tel:+966${this.mobile}`)
        },

        whatsapp() {
          const whatsapp = new CustomEvent('event:whatsapp')
          document.dispatchEvent(whatsapp)

          window.open(`https://wa.me/966${this.number}`)
        },

        mailto() {
          const mailto = new CustomEvent('event:mailto')
          document.dispatchEvent(mailto)

          window.open(`mailto:${this.email}`)
        },

        scrollTo(element, offset = 0) {
          const to = document.querySelectorAll(element)[0]
          if (to) {
            const y = to.getBoundingClientRect().top + window.scrollY
            window.scroll({ top: y - offset, behavior: 'smooth' })
          }
        }
      }
    })
  }
}

Vue.use(Mix)
