<template functional>
  <ul class="list">
    <li
      class="list-item"
      v-for="(item, index) in props.items || []"
      :key="index">
      <span>{{ item.emoji }}</span>
      {{ item.label }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  list-style-type: none;

  &-item {
    display: flex;
    align-items: center;
    font-family: Heebo;
    font-size: 1.4rem;
    color: #444;

    > span {
      font-size: 2rem;
      margin-right: 8px;
    }
  }
}
</style>
