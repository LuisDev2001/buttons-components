<template>
  <section class="create">
    <p>
      {{ createTextByOne }}
      <b v-text="userName"></b>
      {{ createTextByTwo }}
    </p>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "PxCreate",
  setup() {
    const userName = ref("LuisDev2001");
    const createTextByOne = ref(`created by`);
    const createTextByTwo = ref(` - devChallenges.io`);

    return {
      createTextByOne,
      userName,
      createTextByTwo,
    };
  },
};
</script>

<style lang="scss" scoped>
.create {
  p {
    font-size: 14px;
    color: #9e9e9e;
  }
}
</style>
