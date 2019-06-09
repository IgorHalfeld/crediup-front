<template>
  <GridContainer
    :styles="{
      width: '100%',
      height: '100%',
    }"
    direction="column" alignX="flex-start">
    <StyledTitle
      :styles="{
        fontSize: '4rem',
      }">
      R$ {{ getCreditLimit }}
    </StyledTitle>
    <StyledSubTitle
      :styles="{
        color: '#b1b2b6',
        fontSize: '1.5rem',
      }">
      Seu score é de
      <strong :style="{ fontSize: '1.3rem', color: '#697398' }">{{ getScore }} pontos</strong>.
    </StyledSubTitle>

    <p
      :style="{
        maxWidth: '500px',
        marginTop: '60px',
        fontSize: '1rem',
      }">
      Agora você já possui crédito! <br>
      Basta <i :style="{ textDecoration: 'underline' }">baixar o app</i> para começar a usar sua conta! <br>
      Não esqueça que você precisa manter os dados atualizados para manter o score e
      conseguentemente o seu limite de crédito :D
    </p>

    <StyledButton
      :styles="{
        marginTop: '40px',
      }"
      :clickFn="() => $router.push('/')"
      text="Voltar para home" />
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';
import StyledField from '@/components/Functional/StyledField';
import StyledButton from '@/components/Functional/StyledButton';
import Loader from '@/components/Functional/Loader';

export default {
  layout: 'wizard',
  components: {
    GridContainer,
    StyledTitle,
    StyledSubTitle,
    StyledField,
    StyledButton,
    Loader,
  },
  computed: {
    getCreditLimit() {
      const number = (Math.random() * 1200).toFixed(2);
      return number < 700
        ? this.getCreditLimit
        : number;
    },
    getScore() {
      const number = (Math.random() * 5).toFixed(2);
      return number < 2
        ? this.getScore
        : number;
    }
  }
}
</script>
