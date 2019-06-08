<template>
  <div class="info">
    <GridContainer
      :direction="$mq({ maxWidth: '800px' }) ? 'column' : 'row'"
      alignY="center">
      <StyledTitle :styles="{ color: 'white' }">Como é o processo da crediup?</StyledTitle>
      <!-- <StyledSubTitle :styles="{ color: 'white' }">
        Como é o processo da crediup?
      </StyledSubTitle> -->

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
      { emoji: '💁🏽‍', highlight: 'Solicitação', text: 'Você faz uma solicitação de crédito com a gente e te mostramos a sua próposta personalizada.' },
      { emoji: '👀', highlight: 'Análise', text: 'Você nos conta um pouco mais sobre você, e nos encaminhamos a sua proposta para análise de crédito.' },
      { emoji: '🚀', highlight: 'Liberação', text: 'Depois de aprovado, te ajudamos com o processo de formalização até o valor cair na sua conta crediup.' },
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
  background-color: #061554;
}
.info-list {
  font-family: 'Roboto';
  color: white;
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
