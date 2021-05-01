<template>
  <div class="input-wrapper">
    <span :class="disabledText">{{ titleInput }}</span>
    <label :class="typeLabel">
      Label
      <span v-if="showIcon" :class="iconContent">
        <i :class="icon"></i>
      </span>
      <input
        type="text"
        :class="classNameInput"
        :value="valueInput"
        placeholder="Placeholder"
      />
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
    showIcon: false,
    icon: String,
    iconContent: String,
    valueInput: String,
    classWrapper: String,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_inputs.scss";
</style>
