<template functional>
  <div class="container" :style="{ ...props.styles }">
    <a :href="`https://twitter.com/${props.links.twitter}`" target="_blank" class="icon icon-twitter" />
    <a :href="`https://linkedin.com/in/${props.links.linkedin}`" target="_blank" class="icon icon-linkedin" />
    <a :href="`https://github.com/${props.links.github}`" target="_blank" class="icon icon-github" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  cursor: pointer;
}

.icon-twitter {
  background-image: url('~assets/img/twitter.svg');
  background-size: 24px 19px;
  width: 24px;
  height: 19px;
}

.icon-github {
  background-image: url('~assets/img/github.svg');
  background-size: 22px;
  width: 22px;
  height: 22px;
}

.icon-linkedin {
  background-image: url('~assets/img/linkedin.svg');
  background-size: 22px;
  width: 22px;
  height: 22px;
  padding-left: 15px;
}
</style>
