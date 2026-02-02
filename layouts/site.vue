<template>
  <div id="site-layout">
    <site-header />
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import siteHeader from '~/components/site-header.vue'
import siteFooter from '~/components/site-footer.vue'
import Cookies from 'js-cookie'

export default {
  components: {
    'site-header': siteHeader,
    'site-footer': siteFooter
  },

  mounted() {
    if (process.browser) { Cookies.set(`_source`, this.$route.query._source) }

    this.$store.dispatch(`home/assets`)
  },

  head() {
    return {
      titleTemplate: `%s - ${this.$t(`app.title`)}`,
      htmlAttrs: { lang: this.$i18n.locale, dir: this.$t(`app.dir`) },
      bodyAttrs: { class: `${this.$t(`app.dir`)} font-body` },
      meta: [
        { hid: 'description', name: 'description', content: this.$t(`app.description`) }
      ],
    }
  }
}
</script>
