<template>
  <div class="donation">
    <GridContainer direction="column" alignY="center">
      <StyledTitle>Doe para esse conteúdo</StyledTitle>
      <StyledSubTitle>
        Todo dinheiro doado vai ser convertido para iniciativas como:
      </StyledSubTitle>

      <GridContainer
        :styles="{ margin: '35px' }"
        :direction="$mq({ maxWidth: '880px' }) ? 'column' : 'row'"
        alignX="space-between"
        alignY="center">
        <img @click="navigate('http://womakerscode.org/')()" class="donation-images" src="/wmc.png" alt="logo womakescode">
        <img @click="navigate('https://desprograme.com.br/pt/')" class="donation-images" src="/dp.png" alt="logo desprograme">
        <img @click="navigate('http://womendevsummit.com/')" class="donation-images" src="/wds.png" alt="logo desprograme">
      </GridContainer>

      <StyledButton
        :clickFn="() => navigate('http://vaka.me/589408')"
        :styles="{
          marginTop: '20px',
        }"
        text="❤ Doe!" />
    </GridContainer>
  </div>
</template>

<script>
import StyledButton from '@/components/Functional/StyledButton';
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';

export default {
  name: 'DonationSection',
  components: { GridContainer, StyledTitle, StyledButton, StyledSubTitle },
  methods: {
    navigate(link) {
      return window.open(link, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.donation {
  width: 100%;
  height: auto;
  padding: 40px;

  &-images {
    max-width: 180px;
    margin: 0 20px;
    cursor: pointer;
    z-index: 9999;

    @media screen and (max-width: 880px) {
      margin: 20px 0;
    }
  }
}
</style>
