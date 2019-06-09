<template>
  <div class="root">
    <StyledBanner
      :styles="{
        marginBottom: '50px',
      }"
    />
    <nuxt />
  </div>
</template>

<script>
import StyledBanner from '@/components/Functional/StyledBanner';

export default {
  name: 'LayoutWizard',
  components: { StyledBanner },
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

