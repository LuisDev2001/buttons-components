<template>
  <div class="button-wrapper">
    <span :class="disabledText">{{ titleButton }}</span>
    <button :class="className">
      <i v-if="icon" class="icon-add_shopping_cart"></i>
      {{ textButton }}
    </button>
  </div>
</template>

<script>
export default {
  name: "PxButton",
  props: {
    titleButton: String,
    className: String,
    textButton: String,
    disabledText: String,
    icon: false,
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/sass/components/_buttons.scss";
</style>
