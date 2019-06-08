<template functional>
  <p
    class="description"
    :style="props.styles">
    <slot />
  </p>
</template>

<style>
.description {
  font-family: Heebo;
  font-size: 1.4rem;
  color: #444;
}
</style>
