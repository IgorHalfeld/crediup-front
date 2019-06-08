<template>
  <div class="speakers">
    <GridContainer direction="column" alignY="center">
      <StyledTitle :styles="{ color: 'white' }">Palestrantes</StyledTitle>
      <StyledSubTitle :styles="{ color: 'white' }">
        Quer palestrar? Manda pra gente sua ideia!
      </StyledSubTitle>
      <StyledButton :clickFn="navigate" :styles="{
          marginTop: '20px',
        }" text="🗣 Mande sua palestra!" />
    </GridContainer>
  </div>
</template>

<script>
import StyledButton from '@/components/Functional/StyledButton';
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';

export default {
  name: 'SpeakersSection',
  components: { GridContainer, StyledTitle, StyledButton, StyledSubTitle },
  methods: {
    navigate() {
      window.open('https://forms.gle/1KGf3MLa6rhWXkoF6', '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.speakers {
  width: 100%;
  height: auto;
  padding: 40px;
  background-color: #008a7e;
}
</style>
