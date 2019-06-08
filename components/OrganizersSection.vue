<template>
  <div class="organizers">
    <GridContainer :styles="{ marginTop: '50px' }" direction="column" alignY="center">
      <StyledTitle>Organizadores</StyledTitle>
      <GridContainer
        :styles="{
          margin: '80px auto'
        }"
        :direction="$mq({ maxWidth: '880px' }) ? 'column': 'row'"
        alignX="center" alignY="center">
        <GridContainer
          :styles="{
            maxWidth: '450px',
            marginTop: $mq({ maxWidth: '880px' }) ? '30px' : '0',
          }"
          direction="column"
          alignY="center"
          v-for="(organizer, index) in organizers"
          :key="index">
          <img class="organizers-image" :src="organizer.image" :alt="`Foto de ${organizer.name}`">
          <h3 class="organizers-title">{{ organizer.name }}</h3>
          <p class="organizers-desc">{{ organizer.description }}</p>
          <SocialGrid
            :links="{
              twitter: organizer.twitter,
              linkedin: organizer.linkedin,
              github: organizer.github,
            }"
            :styles="{ marginTop: '20px' }"/>
        </GridContainer>
      </GridContainer>
    </GridContainer>
  </div>
</template>

<script>
import GridContainer from '@/components/Functional/GridContainer';
import StyledTitle from '@/components/Functional/StyledTitle';
import SocialGrid from '@/components/Functional/SocialGrid';
import organizers from '@/content/organizers';

export default {
  name: 'OrganizersSection',
  components: { GridContainer, StyledTitle, SocialGrid },
  data: () => ({
    organizers,
  }),
};
</script>

<style lang="scss" scoped>
.organizers {
  width: 100%;
  height: auto;
  padding: 20px;

  &-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 7px solid #f9ca24;
  }

  &-title {
    margin-top: 20px;
    text-align: center;
    font-family: Heebo;
    font-weight: 700;
    font-size: 25px;
    color: #444;
  }

  &-desc {
    line-height: 140%;
    text-align: center;
    font-family: Heebo;
    font-weight: 300;
    color: #555;
  }
}
</style>
