<template>
  <div v-if="!maxWidth880" class="glitch" :style="{ ...styles }">
    <img class="glitch-image" src="/serverless-logo.png" />
    <img class="glitch-image" src="/logo-inverted.png" />
    <img class="glitch-image" src="/logo-yellow.png" />
  </div>
  <div
    v-else
    class="glitch"
    :style="{
      ...styles,
      width: '294px',
      height: '250px',
    }">
    <img class="glitch-image" src="/logo-without-bg.png" />
    <img class="glitch-image" src="/logo-m-white.png" />
    <img class="glitch-image" src="/logo-m-yellow.png" />
  </div>
</template>

<script>
export default {
  name: 'BannerImageGlitch',
  props: ['styles'],
  data: () => ({
    width: 1000,
    maxWidth880: false,
  }),
  watch: {
    width() {
      this.maxWidth880 = this.width < 880;
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
    });
    this.width = window.innerWidth;
  },
  beforeDestroy() {
    window.removeEventListener('resize');
  }
};
</script>

<style lang="scss" scoped>
@mixin imageGlitch($name, $intensity, $width, $height, $top, $left) {

  $steps: $intensity;

  @at-root {
    // We need two different ones
    @for $i from 1 through 2 {
      @keyframes #{$name}-anim-#{$i} {
        @for $i from 0 through $steps {
          #{percentage($i * (1 / $steps))} {
            clip: rect(random($height) + px, $width + px, random($height) + px, 0);
          }
        }
      }
    }
  }

  &-image {
    position: absolute;
    top: $top + px;
    left: $left + px;
    max-width: 800px;
    z-index: 9999;
  }
  &-image:nth-child(2),
  &-image:nth-child(3){
    clip: rect(0, 0, 0, 0);
  }
  &-image:nth-child(2) {
    left: ($left + 4) + px;
    animation: #{$name}-anim-1 2s infinite linear alternate-reverse;
  }
  &-image:nth-child(3) {
    left: ($left - 4) + px;
    animation: #{$name}-anim-2 3s infinite linear alternate-reverse;
  }
}

.glitch {
  position: relative;
  width: 800px;
  height: 180px;
  @include imageGlitch("glitch", 30, 800, 200, 0, 0);
}
</style>
