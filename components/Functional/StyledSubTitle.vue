<template functional>
  <p class="subtitle" :style="props.styles">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.subtitle {
  text-align: center;
  font-family: Roboto;
  font-size: 1.4rem;
  color: #444;
}
</style>
