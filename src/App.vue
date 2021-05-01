<template>
  <PxNavBar />
  <router-view />
</template>

<script>
import PxNavBar from "@/components/PxNavBar";

export default {
  components: {
    PxNavBar,
  },
};
</script>

<style lang="scss">
@import "./assets/sass/_base.scss";
#app {
  display: grid;
  grid-template-columns: 236px 1fr;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
@media screen and(max-width: 768px) {
  #app {
    grid-template-columns: 1fr;
  }
}
</style>
