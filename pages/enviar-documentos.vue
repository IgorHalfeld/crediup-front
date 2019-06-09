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
      alignX="center">
      <StyledTitle
        :styles="{
          color: '#7a6d9a',
          fontSize: '2rem',
        }">
        Enviar os documentos...
      </StyledTitle>

      <StyledField
        :styles="{
          marginTop: '20px'
        }"
        :isRequired="true"
        label="Extrato dos ultimos 3 meses"
      >
        <vsUpload
          :style="{
            width: '100%',
          }"
          multiple text="Upload Multiple"/>
      </StyledField>

      <StyledField
        :styles="{
          marginTop: '20px'
        }"
        :isRequired="true"
        label="Notas fiscais"
      >
        <vsUpload
          :style="{
            width: '100%',
          }"
          multiple text="Upload Multiple"/>
      </StyledField>

      <StyledButton
        :clickFn="() => $router.push('/carregar-historico')"
        :styles="{
          marginTop: '50px',
        }"
        text="Continuar" />
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

export default {
  layout: 'wizard',
  transition: transitionHelper,
  components: { GridContainer, StyledTitle, StyledField, StyledButton },
}
</script>
