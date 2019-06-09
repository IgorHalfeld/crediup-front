<template>
  <GridContainer direction="column" alignX="center" alignY="center">
    <Banner />
    <InfoSection />
    <AdvantagesSection />
    <CTA />
    <Footer />
  </GridContainer>
</template>

<script>
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import GridContainer from '@/components/Functional/GridContainer';
import InfoSection from '@/components/InfoSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import CTA from '@/components/CTA';
import transitionHelper from '@/utils/transitionHelper';

export default {
  name: 'Index',
  transition: transitionHelper,
  components: {
    Banner,
    Footer,
    GridContainer,
    InfoSection,
    AdvantagesSection,
    CTA,
  },
}
</script>
