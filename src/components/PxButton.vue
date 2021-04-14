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
.button-wrapper {
  span {
    display: block;
    font-family: var(--font-ubuntu);
    font-weight: 400;
    margin: 0 0 12px 0;
    font-size: 12px;
  }
  .color-disabled {
    color: #828282;
  }
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    .icon-add_shopping_cart {
      margin: 0 10px 0 0;
      font-size: 15px;
    }
    &.button-cart-end .icon-add_shopping_cart {
      margin: 0 0 0 10px;
    }
  }
}
</style>
