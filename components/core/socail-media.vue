<template>
  <ul class="socail flex items-center content-center">
    <li class="dot-shape flex items-center relative z-30">
      <a href="#" class="socail-link flex content-center items-center ltr:mr-4 rtl:ml-4">
        <span class="text-base font-light text-light opacity-70 ltr:mr-3 rtl:ml-3">
          scene.studio
        </span>

        <img
          src="/img/instagram.svg"
          class="w-6 h-6 object-contain"
          :alt="$t(`app.title`)" />
      </a>
    </li>

    <li>
      <a href="#" class="socail-link flex content-center items-center ltr:ml-4 rtl:mr-4">
        <span class="text-base font-light text-light opacity-70 ltr:mr-3 rtl:ml-3">
          @scene_studio1
        </span>

        <img
          src="/img/twitter.svg"
          class="w-6 h-6 object-contain"
          :alt="$t(`app.title`)" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
  .socail {
    .dot-shape::after {
      content: '';
      display: inline-block;
      width: 7px;
      height: 7px;
      background-color: var(--secondary);
      border-radius: 50%;
    }

    .socail-link:hover span {
      opacity: 1;
    }
  }
</style>