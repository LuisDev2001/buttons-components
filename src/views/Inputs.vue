<template>
  <section class="inputs wrapper">
    <h2 class="inputs__title">Inputs</h2>
    <section class="default">
      <PxInput titleInput="<Input />" classNameInput="input input-default" />

      <PxInput
        disabledText="disabled"
        titleInput="&:hover"
        classNameInput="input input-default hover"
      />

      <PxInput
        disabledText="disabled"
        titleInput="&:focus"
        typeLabel="focus"
        classNameInput="input input-default focus"
      />
    </section>

    <section class="error">
      <PxInput
        titleInput="<Input error />"
        typeLabel="error"
        classNameInput="input input-error"
      />
      <PxInput
        disabledText="disabled"
        titleInput="&:hover"
        classNameInput="input input-default hover"
      />
      <PxInput
        disabledText="disabled"
        titleInput="<Input error />"
        typeLabel="error"
        classNameInput="input input-error"
      />
    </section>

    <section class="disabled">
      <PxInput
        titleInput="<Input disabled />"
        classNameInput="input input-disabled"
      />
    </section>

    <section class="some-text-input">
      <PxInput
        titleInput="<Input helperText=”Some interesting text” />"
        classNameInput="input input-show-text"
        typeText="show-text"
        :showText="true"
      />

      <PxInput
        titleInput="<Input helperText=”Some interesting text” error />"
        typeLabel="error"
        classNameInput="input input-show-text-error"
        typeText="show-text-error"
        :showText="true"
      />
    </section>

    <section class="icon"></section>
  </section>
</template>

<script>
import PxInput from "@/components/PxInput.vue";
export default {
  name: "Inputs",
  components: {
    PxInput,
  },
};
</script>

<style lang="scss" scoped>
.inputs {
  &__title {
    font-weight: 500;
    font-size: 24px;
    margin: 0 0 28px 0;
  }
  .default,
  .error,
  .disabled,
  .some-text-input {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 42px 0;
  }
}
</style>
