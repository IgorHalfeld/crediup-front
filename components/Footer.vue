<template>
  <GridContainer
    :styles="{
      backgroundColor: '#f4f4f4',
      width: '100%',
      height: '80px',
    }"
    alignX="center"
    alignY="center">
    <p class="copy">Democratizando com ❤️ o crédito</p>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';

export default {
  name: 'Footer',
  components: { GridContainer },
}
</script>

<style lang="scss" scoped>
.copy {
  font-family: Heebo;
  color: #444;
}
</style>
