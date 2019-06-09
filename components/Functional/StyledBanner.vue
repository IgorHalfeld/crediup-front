<template>
  <GridContainer
    :styles="{
      ...styles,
      width: '100%',
      height: '120px',
      padding: '20px',
      backgroundImage: 'linear-gradient(35deg, #697398, #d2d5e0)'
    }"
    alignX="center">
    <StyledTitle :styles="{ color: 'white' }">
      crediup
    </StyledTitle>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';

export default {
  props: {
    styles: { type: Object, default: () => ({}) },
  },
  components: { GridContainer, StyledTitle },
}
</script>
