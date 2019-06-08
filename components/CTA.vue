<template>
  <div class="cta">
    <GridContainer direction="row" alignX="center" alignY="center">
      <div>
        <StyledButton
          :styles="{
            padding: '20px',
          }"
          :cta="true" text="Cadastre-se" />
      </div>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
import StyledButton from '@/components/Functional/StyledButton';

export default {
  name: 'CtaSection',
  components: { GridContainer, StyledButton },
  methods: {
    navigate(link) {
      return window.open(link, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.cta {
  width: 100%;
  height: auto;
  padding: 40px;
  background-color: #061554;
}
</style>
