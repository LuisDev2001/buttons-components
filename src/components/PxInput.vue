<template>
  <div class="input-wrapper">
    <span :class="disabledText">{{ titleInput }}</span>
    <label :class="typeLabel">
      Label
      <input type="text" :class="classNameInput" placeholder="Placeholder" />
      <span :class="typeText" v-if="showText">
        Some interesting text
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "PxInput",
  props: {
    titleInput: String,
    disabledText: String,
    classNameInput: String,
    typeLabel: String,
    showText: false,
    typeText: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_inputs.scss";
</style>
