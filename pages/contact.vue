<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <!-- Hero Section -->
    <section class="relative pt-48 pb-32 overflow-hidden bg-[#090e16]">
      <div class="absolute inset-0 z-0">
        <!-- Darker, richer gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-[#090e16] via-[#1a2c38] to-[#219b86]/40 opacity-90"></div>
        <img src="/img/contact/hero.webp" class="w-full h-full object-cover opacity-40 mix-blend-overlay" alt="Contact Hero">

        <!-- Abstract shapes -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[#219b86]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div class="container relative z-10 px-4">
        <div class="max-w-4xl mx-auto text-center wow animate__animated animate__fadeInUp">
          <div class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-8 backdrop-blur-md shadow-lg">
            <span class="w-2 h-2 rounded-full bg-[#219b86] animate-pulse"></span>
            {{ $t('nav.link_7') }}
          </div>

          <h1 class="text-2xl md:text-3xl font-black text-white mb-6 leading-tight drop-shadow-xl">
            {{ $t('contact_page.hero_title') }}
            <span class="block text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#219b86] to-teal-300 mt-4 leading-relaxed">
              {{ $t('contact_page.hero_subtitle') }}
            </span>
          </h1>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-24 bg-slate-50 relative">
      <div class="container px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <!-- Contact Form (Left Side) -->
          <div class="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 wow animate__animated animate__fadeInRight">
            <h2 class="text-2xl font-black text-slate-900 mb-2">{{ $t('contact_page.form_title') }}</h2>
            <p class="text-slate-500 font-medium mb-10">{{ $t('contact_page.form_desc') }}</p>

            <form @submit.prevent="submit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div class="space-y-2">
                  <label class="text-sm font-bold text-slate-700">{{ $t('contact_page.label_name') }}</label>
                  <input type="text" v-model="form.name" :placeholder="$t('contact_page.holder_name')"
                         :class="{'!border-red-500': localErrors.name}"
                         class="w-full h-14 px-5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#219b86] focus:ring-4 focus:ring-teal-500/10 outline-none transition-all font-medium">
                  <span v-if="localErrors.name" class="text-xs text-red-500 font-bold block">{{ localErrors.name }}</span>
                </div>
                <!-- Phone -->
                <div class="space-y-2">
                  <label class="text-sm font-bold text-slate-700">{{ $t('contact_page.label_phone') }}</label>
                  <input type="tel" v-model="form.phone" :placeholder="$t('footer.phone')"
                         :class="{'!border-red-500': localErrors.phone || (errors && errors.mobile)}"
                         class="w-full h-14 px-5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#219b86] focus:ring-4 focus:ring-teal-500/10 outline-none transition-all font-medium dir-ltr text-start">
                  <span v-if="localErrors.phone || (errors && errors.mobile)" class="text-xs text-red-500 font-bold block">
                    {{ localErrors.phone || (errors.mobile ? errors.mobile[0] : '') }}
                  </span>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Email -->
                <div class="space-y-2">
                  <label class="text-sm font-bold text-slate-700">{{ $t('contact_page.label_email') }}</label>
                  <input type="email" v-model="form.email" :placeholder="$t('contact_page.holder_email')"
                         :class="{'!border-red-500': localErrors.email}"
                         class="w-full h-14 px-5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#219b86] focus:ring-4 focus:ring-teal-500/10 outline-none transition-all font-medium dir-ltr text-start">
                  <span v-if="localErrors.email" class="text-xs text-red-500 font-bold block">{{ localErrors.email }}</span>
                </div>
                <!-- Service Type -->
                <div class="space-y-2">
                  <label class="text-sm font-bold text-slate-700">{{ $t('contact_page.label_service') }}</label>
                  <select v-model="form.service"
                         :class="{'!border-red-500': localErrors.service}"
                         class="w-full h-14 px-5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#219b86] focus:ring-4 focus:ring-teal-500/10 outline-none transition-all font-medium appearance-none">
                    <option value="" disabled selected>{{ $t('contact_page.label_service') }}</option>
                    <option v-for="(slug, i) in serviceSlugs" :key="i" :value="slug">{{ $t(`services_page.s${i+1}_title`) }}</option>
                  </select>
                  <span v-if="localErrors.service" class="text-xs text-red-500 font-bold block">{{ localErrors.service }}</span>
                </div>
              </div>



              <!-- Message -->
              <div class="space-y-2">
                <label class="text-sm font-bold text-slate-700">{{ $t('contact_page.label_msg') }}</label>
                <textarea v-model="form.message" :placeholder="$t('contact_page.holder_msg')" rows="4"
                          :class="{'!border-red-500': localErrors.message}"
                          class="w-full p-5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#219b86] focus:ring-4 focus:ring-teal-500/10 outline-none transition-all font-medium resize-none"></textarea>
                <span v-if="localErrors.message" class="text-xs text-red-500 font-bold block">{{ localErrors.message }}</span>
              </div>

              <!-- Submit Button -->
              <button type="submit"
                      :disabled="isSubmitting"
                      :class="{'opacity-75 cursor-wait': isSubmitting}"
                      class="w-full h-14 rounded-xl bg-[#219b86] text-white font-black text-lg flex items-center justify-center gap-3 hover:bg-[#1a7a6a] transition-all shadow-xl shadow-teal-900/20 transform hover:-translate-y-1">
                <span v-if="!isSubmitting">{{ $t('contact_page.btn_submit') }}</span>
                <span v-else>...</span>
                <i v-if="!isSubmitting" class="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>

          <!-- Contact Info (Right Side) -->
          <div class="lg:col-span-5 space-y-8 wow animate__animated animate__fadeInLeft">
            <!-- Info Card -->
            <div class="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100">
              <h3 class="text-xl font-black text-[#219b86] mb-4">{{ $t('contact_page.info_title') }}</h3>
              <p class="text-slate-500 font-medium mb-8 leading-relaxed">{{ $t('contact_page.info_desc') }}</p>

              <div class="space-y-6">
                <!-- Phone -->
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-teal-50 text-[#219b86] flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <span class="block text-xs font-bold text-slate-400 mb-1">{{ $t('contact_page.info_call') }}</span>
                    <a :href="`tel:${$t('footer.phone')}`" class="text-lg font-black text-slate-900 hover:text-[#219b86] transition-colors dir-ltr block">{{ $t('footer.phone') }}</a>
                  </div>
                </div>
                <!-- Email -->
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-teal-50 text-[#219b86] flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span class="block text-xs font-bold text-slate-400 mb-1">{{ $t('contact_page.info_email') }}</span>
                    <a :href="`mailto:${$t('footer.email')}`" class="text-lg font-black text-slate-900 hover:text-[#219b86] transition-colors block">{{ $t('footer.email') }}</a>
                  </div>
                </div>
                <!-- Address -->
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-full bg-teal-50 text-[#219b86] flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <span class="block text-xs font-bold text-slate-400 mb-1">{{ $t('contact_page.info_addr') }}</span>
                    <p class="text-lg font-bold text-slate-900 block">{{ $t('footer.address') }}</p>
                  </div>
                </div>
              </div>

              <!-- Social Media -->
              <div class="mt-8 pt-8 border-t border-slate-100">
                <span class="block text-xs font-bold text-slate-400 mb-4">{{ $t('contact_page.info_social') }}</span>
                <div class="flex gap-3">
                  <a href="#" class="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-[#219b86] hover:text-white transition-all transform hover:-translate-y-1">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/smart-values-co" target="_blank" class="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all transform hover:-translate-y-1">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            <!-- Features Card -->
            <div class="bg-teal-600/5 p-8 rounded-[2rem] border border-teal-600/10">
              <h3 class="text-lg font-black text-[#219b86] mb-6">{{ $t('contact_page.why_title') }}</h3>
              <ul class="space-y-3">
                <li v-for="i in 4" :key="i" class="flex items-center gap-3">
                  <i class="fa-solid fa-circle-check text-[#219b86]"></i>
                  <span class="font-bold text-slate-700">{{ $t(`contact_page.why_${i}`) }}</span>
                </li>
              </ul>
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
      title: this.$t('nav.link_7'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('contact_page.hero_desc') }
      ]
    }
  },
  data() {
    return {
      form: {
        name: '',
        phone: '',
        mobile_code: '966',
        gender_id: 1,
        email: '',
        service: '',
        message: ''
      },
      serviceSlugs: [
        'digital-platforms',
        'cloud-migration',
        'data-analysis',
        'ai-robotics',
        'iot-solutions',
        'enterprise-solutions'
      ],
      localErrors: {},
      isSubmitting: false
    }
  },
  methods: {
    validate() {
      this.localErrors = {};
      let isValid = true;

      if (!this.form.name) {
        this.localErrors.name = this.$t('v.required');
        isValid = false;
      }

      if (!this.form.phone) {
        this.localErrors.phone = this.$t('v.required');
        isValid = false;
      } else if (!/^\d+$/.test(this.form.phone)) {
        this.localErrors.phone = this.$t('v.phone_numeric');
        isValid = false;
      } else if (this.form.phone.length !== 10) {
        this.localErrors.phone = this.$t('v.phone_length');
        isValid = false;
      } else if (!/^05/.test(this.form.phone)) {
        this.localErrors.phone = this.$t('v.phone_start');
        isValid = false;
      }

      if (!this.form.email) {
        this.localErrors.email = this.$t('v.required');
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.localErrors.email = this.$t('v.email');
        isValid = false;
      }

      if (!this.form.service) {
        this.localErrors.service = this.$t('v.required');
        isValid = false;
      }

      if (!this.form.message) {
        this.localErrors.message = this.$t('v.required');
        isValid = false;
      }

      return isValid;
    },
    async submit() {
      if (!this.validate()) return;

      this.isSubmitting = true;
      try {
        const subject = encodeURIComponent(`Contact Request from ${this.form.name}`);
        const body = encodeURIComponent(
          `Name: ${this.form.name}\n` +
          `Phone: ${this.form.phone}\n` +
          `Email: ${this.form.email}\n` +
          `Service: ${this.form.service}\n\n` +
          `Message:\n${this.form.message}`
        );

        const mailtoLink = `mailto:info@smart-value.sa?subject=${subject}&body=${body}`;

        // Open mail client
        window.location.href = mailtoLink;

        // Success feedback
        if (this.$toast) {
          this.$toast.success(this.$t('input.done'));
        } else {
          alert(this.$t('input.done'));
        }

        // Reset form
        this.form = {
          name: '',
          phone: '',
          mobile_code: '966',
          gender_id: 1,
          email: '',
          service: '',
          message: ''
        };
      } catch (e) {
        console.error(e);
        if (this.$toast) {
           this.$toast.error(this.$t('input.register_error'));
        } else {
          alert(this.$t('input.register_error'));
        }
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  background-color: #fff;
}
.dir-ltr {
  direction: ltr;
}
input::placeholder, textarea::placeholder {
  color: #94a3b8;
}
</style>
