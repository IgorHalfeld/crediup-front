<template>
  <div class="root">
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
}

html,
body,
#__layout,
#__nuxt,
.root {
  width: 100%;
  height: 100%;
}
</style>

