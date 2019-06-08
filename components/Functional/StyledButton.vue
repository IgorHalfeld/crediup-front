<template functional>
  <button
    class="button"
    :class="{
      'cta': !!props.cta
    }"
    :style="{
      ...props.styles,
    }"
    @click="props.clickFn">
      {{ props.text }}
    </button>
</template>

<style lang="scss" scoped>
.button {
  background-color: #7a6d9a;
  border: 1px solid transparent;
  border-radius: 40px;
  font-family: Roboto;
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  padding: 20px;
  cursor: pointer;
  transition: all 170ms ease-in-out;
  z-index: 999;

  &:hover {
    color: white;
    background-color: #061554;
  }
}

.button.cta {
  &:hover {
    background-color: white;
    color: #061554;
  }
}
</style>
