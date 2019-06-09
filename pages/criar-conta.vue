<template>
  <GridContainer
    :styles="{
      width: '100%',
    }" alignX="center">
    <GridContainer
      :styles="{
        maxWidth: '900px',
        minWidth: '500px',
        height: '100%',
        padding: '10px',
      }"
      direction="column"
      alignX="center">
      <StyledTitle
        :styles="{
          color: '#7a6d9a',
          fontSize: '2rem',
        }">
        Criar sua conta...
      </StyledTitle>

      <StyledField
        :styles="{
          marginTop: '20px'
        }"
        :isRequired="true"
        label="Nome completo"
        @changed="value => setName(value)"
        placeholder="ex: Igor Luiz Halfeld"
        type="text"
      />

      <StyledField
        :styles="{
          marginTop: '20px'
        }"
        :isRequired="true"
        label="Email"
        @changed="value => setEmail(value)"
        placeholder="ex: igor@gmail.com"
        type="email"
      />

      <StyledField
        :styles="{
          marginTop: '20px'
        }"
        :isRequired="true"
        label="Senha"
        @changed="value => setPassword(value)"
        placeholder="ex: wqsop193#49$$"
        type="password"
      />

      <StyledButton
        :clickFn="navigate('/enviar-documentos')"
        :styles="{
          marginTop: '50px',
        }"
        text="Continuar" />
    </GridContainer>
  </GridContainer>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import transitionHelper from '@/utils/transitionHelper';
import StyledSubTitle from '@/components/Functional/StyledSubTitle';
import StyledField from '@/components/Functional/StyledField';
import StyledButton from '@/components/Functional/StyledButton';

export default {
  layout: 'wizard',
  transition: transitionHelper,
  components: { GridContainer, StyledTitle, StyledField, StyledButton },
  computed: mapState({
    user: state => state.user,
  }),
  methods: {
    ...mapMutations([
      'setEmail',
      'setName',
      'setPassword',
    ]),
    validateFields() {
      const values = Object
        .values(this.user)
        .map(value => !!value);
      return values.includes(false);
    },
    navigate(link) {
      return () => {
        if (this.validateFields()) {
          this.$vs.notify({
            title: 'Opa!',
            text: 'Você precisa preencher todos os dados.',
            color: 'warning',
            position: 'top-right',
          });
          return;
        }
        this.$router.push(link);
      }
    }
  }
}
</script>
