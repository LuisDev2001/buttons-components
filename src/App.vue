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
  max-width: 1200px;
  margin: 0 auto;
}
@media screen and(max-width: 768px) {
  #app {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }
}
</style>
