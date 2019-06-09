<template>
  <GridContainer
    :styles="{
      width: '100%',
      marginBottom: '40px'
    }" alignX="center">
    <GridContainer
      :styles="{
        maxWidth: '900px',
        minWidth: '500px',
        height: '100%',
        padding: '20px',
      }"
      direction="column"
      alignY="center">
      <StyledTitle
        :styles="{
          color: isLoading ? '#7a6d9a' : '#c2c3c6',
          width: '100%',
          textAlign: 'left',
          fontSize: '2rem',
        }">
        {{
          isLoading
            ? 'Estamos analisando os dados 😍'
            : 'Parabéns! seu limite é:'
        }}
      </StyledTitle>
      <transition name="slide-left">
        <Loader v-if="isLoading" :styles="{ marginTop: '200px' }" />
        <CreditValues v-else/>
      </transition>
    </GridContainer>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import transitionHelper from '@/utils/transitionHelper';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';
import StyledField from '@/components/Functional/StyledField';
import StyledButton from '@/components/Functional/StyledButton';
import CreditValues from '@/components/CreditValues';
import Loader from '@/components/Functional/Loader';

export default {
  layout: 'wizard',
  transition: transitionHelper,
  components: { GridContainer, StyledTitle, StyledField, StyledButton, Loader, CreditValues },
  data: () => ({
    isLoading: true,
  }),
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
}
</script>
