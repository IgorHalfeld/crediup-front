<template>
  <GridContainer
    :styles="{
      width: '100%',
      ...styles,
    }"
    direction="column">
    <label class="field-label" for="">{{ label }}</label>
    <slot v-if="$slots.default" />
    <input
      v-else
      v-model="value"
      :required="isRequired"
      :placeholder="placeholder"
      :type="type"
      class="field-input"
      @keyup="$emit('changed', value)" />
    <span class="field-help" v-if="isRequired">* campo obrigatório</span>
  </GridContainer>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';

export default {
  props: {
    type: { type: String, required: true },
    placeholder: { type: String, default: 'Enter message' },
    label: { type: String, default: 'Field name' },
    styles: { type: Object, default: () => ({}) },
    isRequired: { type: Boolean, default: false }
  },
  components: { GridContainer },
  data: () => ({
    value: null,
  })
};
</script>

<style lang="scss" scoped>
.field {

  &-label {
    font-family: Roboto;
    font-size: 1.1rem;
    margin-bottom: 5px;
    font-weight: 300;
    color: #3c3f47;
  }

  &-input {
    border: 1px solid #c2c3c6;
    padding: 10px;
    width: 100%;
    border-radius: 8px;

    &:focus {
      outline: none;
    }
  }

  &-help {
    margin-top: 5px;
    color: #b1b2b6;
  }
}
</style>
