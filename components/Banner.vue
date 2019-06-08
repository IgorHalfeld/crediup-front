<template>
  <div class="banner">
    <GridContainer
      :styles="{
        height: '100%',
      }"
      direction="column"
      alignX="center"
      alignY="center">
      <span class="banner-overlay" />

      <StyledTitle
        :styles="{
          zIndex: '4',
          color: '#fff',
          textAlign: 'center',
          fontSize: $mq({ maxWidth: '500px' }) ? '6rem' : '8rem',
          marginTop: '-20px',
          marginBottom: '40px',
        }">
        crediup
      </StyledTitle>

      <StyledSubTitle
        :styles="{
          zIndex: '4',
          color: '#fff',
          textAlign: 'center',
          fontSize: $mq({ maxWidth: '500px' }) ? '1.8rem' : '2rem',
          marginTop: '-40px',
          marginBottom: '40px',
        }">
        Revolucionando o crédito no brasil
      </StyledSubTitle>

      <StyledButton text="quero crédito!" />

    </GridContainer>
  </div>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
import BannerImageGlitch from '@/components/BannerImageGlitch';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';
import StyledButton from '@/components/Functional/StyledButton';

export default {
  name: 'Banner',
  components: {
    GridContainer,
    StyledTitle,
    StyledSubTitle,
    StyledButton,
    BannerImageGlitch,
  },
};
</script>

<style lang="scss" scoped>
%max-width {
  width: 100%;
  height: 100vh;
}

@keyframes scales {
  to {
    background-position: bottom;
  }
}

.banner {
  @extend %max-width;
  background-image: url('/banner.png');
  background-size: cover;
  background-position: top top;
  animation: scales 60s ease-in infinite alternate;

  &-overlay {
    @extend %max-width;
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: linear-gradient(
      45deg,
    rgba(6, 21, 84, 0.8),
      rgba(105, 115, 152, 0.3),
      rgba(6, 21, 84, 0.8)
    );
  }
}
</style>
