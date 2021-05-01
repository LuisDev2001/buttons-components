<template>
  <section class="inputs wrapper">
    <h2 class="inputs__title">Inputs</h2>
    <section class="container-flex">
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

    <section class="container-flex">
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

    <section class="container-flex">
      <PxInput
        titleInput="<Input disabled />"
        classNameInput="input input-disabled"
      />
    </section>

    <section class="container-flex">
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

    <section class="container-flex">
      <PxInput
        titleInput="<Input startIcon />"
        classNameInput="input input-startIcon"
        iconContent="content-icon"
        :showIcon="true"
        icon="i-phone"
      />

      <PxInput
        titleInput="<Input endIcon />"
        classNameInput="input input-endIcon"
        iconContent="content-icon-lock"
        :showIcon="true"
        icon="i-lock"
      />
    </section>

    <section class="container-flex">
      <PxInput
        titleInput="<Input value=”text” />"
        classNameInput="input input-value"
        valueInput="Text"
      />
    </section>

    <section class="container-flex">
      <PxInput
        titleInput="<Input size=”sm” />"
        classNameInput="input input-sm"
      />
      <PxInput
        titleInput="<Input size=”md” />"
        classNameInput="input input-md"
      />
    </section>
    <section class="container-flex fullw">
      <PxInput
        titleInput="<Input fullWidth />"
        classNameInput="input input-full-width"
        valueInput="Text"
      />
    </section>
    <section class="container-flex">
      <PxInput
        titleInput="<Input multiline row=”4” />"
        classNameInput="input input-multiline"
      />
    </section>
    <PxCreate />
  </section>
</template>

<script>
import PxInput from "@/components/PxInput";
import PxCreate from "@/components/PxCreate";
export default {
  name: "Inputs",
  components: {
    PxInput,
    PxCreate,
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
  .container-flex {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 42px 0;
    &.fullw {
      display: block;
    }
  }
}
</style>
