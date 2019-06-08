<template>
  <div class="info">
    <GridContainer direction="column" alignY="center">
      <StyledTitle>
        E quais são as vantagens?
      </StyledTitle>
      <GridContainer
        :direction="$mq({ maxWidth: '800px' }) ? 'column' : 'row'"
        alignY="center"
        alignX="center">
        <GridContainer
          :styles="{
            margin: '35px',
            maxWidth: '900px'
          }"
          :direction="$mq({ maxWidth: '880px' }) ? 'column' : 'row'"
          alignX="space-between"
          alignY="flex-start">
          <ul class="info-list">
            <li class="info-list-item" v-for="(item, index) in aboutList" :key="index">
              <GridContainer direction="column" alignY="flex-start" alignX="center">
                <strong class="info-list-item-highlight">{{ item.highlight }}</strong>
                <GridContainer alignY="center">
                  <span>{{ item.emoji }}</span> {{ item.text }}
                </GridContainer>
              </GridContainer>
            </li>
          </ul>
        </GridContainer>

        <div class="info-card">
          <img src="/card.png" />
        </div>

      </GridContainer>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';

export default {
  name: 'InfoSection',
  components: { GridContainer, StyledTitle, StyledSubTitle },
  data: () => ({
    aboutList: [
      {
        emoji: '🦄',
        highlight: 'Por que escolher a crediup?',
        text: 'Taxas mais baixas e não tem segredo. Quando você coloca seus dados, o seu risco diminui e podemos te oferecer os juros mais baixos.',
      },
      {
        emoji: '🧠',
        highlight: 'Mais tecnologia e transparência',
        text: 'Você faz tudo pela internet e fazemos o trabalho duro, o processo é mais rápido e você não pega fila.',
      },
      {
        emoji: '🙉',
        highlight: 'Somos um marketplace de crédito para você',
        text: 'Nos temos recursos de diferentes fontes para te emprestar, o que diminui os juros e aumenta as suas chances de aprovação.',
      },
      {
        emoji: '🚀',
        highlight: 'Somos como você',
        text: 'Sabemos que cada cliente tem a sua necessidade, os nossos consultores vão te ajudar a tomar a melhor decisão.',
      },
    ]
  }),
  methods: {
    navigate(link) {
      return window.open(link, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.info {
  width: 100%;
  height: auto;
  padding: 40px;
  background-color: white;
}
.info-card {
  max-width: 600px;

  > img {
    width: 100%;
  }
}

.info-list {
  max-width: 400px;
  font-family: 'Roboto';
  color: #061554;
  list-style: none;
  margin: 10px;
  &-item {
    margin-top: 10px;
    font-size: 1.9rem;
    &-highlight {
      margin-left: 48px;
    }
    span {
      font-size: 2rem;
      margin-right: 15px;
      margin-top: -16px;
    }
  }
}
</style>
