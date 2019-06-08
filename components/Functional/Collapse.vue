<template>
  <div class="d-flex flex-column">
    <slot
      :toggle="{ trigger: toggle, isOpen }"
      name="header" />
    <transition name="expand">
      <div
        v-if="isOpen"
        class="card bg-light border-0 p-3">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Collapse',
  data: () => ({
    isOpen: false,
  }),
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 400ms cubic-bezier(.8, -0.6, 0.2, 1.5);
  transform-origin: top;
}

.expand-enter-to,
.expand-leave {
  opacity: 1;
  transform: scaleY(1);
}

.expand-enter,
.expand-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style>

