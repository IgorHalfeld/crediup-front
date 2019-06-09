<template>
  <div class="cta">
    <GridContainer direction="row" alignX="center" alignY="center">
      <div>
        <StyledButton
          :clickFn="navigate('/criar-conta')"
          :styles="{
            padding: '20px',
            backgroundColor: '#7a6d9a'
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
      return () => this.$router.push(link);
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
