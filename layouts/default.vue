<template>
<div class="default-layout">
  <nuxt />
  <site-footer />
</div>
</template>

<script>
import siteFooter from '@/components/site-footer.vue'
import Cookies from 'js-cookie'

export default {
  components: {
    siteFooter
  },

  mounted() {
    if (process.browser) { Cookies.set(`_source`, this.$route.query._source) }
  },

  head() {
    return {
      titleTemplate: `%s - ${this.$t("app.title")}`,
      htmlAttrs: { lang: this.$i18n.locale, dir: this.$t("app.dir") },
      bodyAttrs: { class: `${this.$t("app.dir")} font-body` },
      meta: [
        { hid: 'description', name: 'description', content: this.$t(`app.description`) }
      ]
    }
  }
}
</script>
