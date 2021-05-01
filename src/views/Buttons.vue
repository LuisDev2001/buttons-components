<template>
  <section class="buttons wrapper">
    <h2 class="buttons__title">Buttons</h2>
    <section class="default">
      <PxButton
        titleButton="<Button />"
        className="button"
        textButton="Default"
      />
      <PxButton
        titleButton="&:hover, &:focus"
        disabledText="color-disabled"
        className="button hover"
        textButton="Default"
      />
    </section>

    <section class="outline">
      <PxButton
        titleButton="<Button variant=”outline” />"
        className="button button-outline"
        textButton="Default"
      />
      <PxButton
        titleButton="&:hover, &:focus"
        disabledText="color-disabled"
        className="button button-outline hover"
        textButton="Default"
      />
    </section>

    <section class="text">
      <PxButton
        titleButton="<Button variant=”text” />"
        className="button button-text"
        textButton="Default"
      />
      <PxButton
        titleButton="&:hover, &:focus"
        disabledText="color-disabled"
        className="button button-text hover"
        textButton="Default"
      />
    </section>

    <section class="disableShadow">
      <PxButton
        titleButton="<Button disableShadow />"
        className="button button-disableShadow"
        textButton="Default"
      />
    </section>

    <section class="disabled">
      <PxButton
        titleButton="<Button disabled />"
        className="button button-disabled"
        textButton="Default"
      />

      <PxButton
        titleButton="<Button variant=”text” disabled />"
        className="button button-disabled-text"
        textButton="Default"
      />
    </section>

    <section class="cart">
      <PxButton
        titleButton="<Button startIcon=”local_grocery_store” />"
        className="button button-cart-start"
        textButton="Default"
        :icon="true"
      />

      <PxButton
        titleButton="<Button endIcon=”local_grocery_store” />"
        className="button button-cart-end"
        textButton="Default"
        :icon="true"
      />
    </section>

    <section class="sizes">
      <PxButton
        titleButton="<Button size=”sm” />"
        className="button button-sm"
        textButton="Default"
      />
      <PxButton
        titleButton="<Button size=”md” />"
        className="button button-md"
        textButton="Default"
      />
      <PxButton
        titleButton="<Button size=”lg” />"
        className="button button-lg"
        textButton="Default"
      />
    </section>

    <section class="actions">
      <PxButton
        titleButton="<Button color=”default” />"
        className="button button-default"
        textButton="Default"
      />
      <PxButton
        titleButton="<Button color=”primary” />"
        className="button button-primary"
        textButton="Default"
      />
      <PxButton
        titleButton="<Button color=”secondary” />"
        className="button button-secondary"
        textButton="Secondary"
      />
      <PxButton
        titleButton="<Button color=”danger” />"
        className="button button-danger"
        textButton="Danger"
      />
    </section>

    <section class="actions-hover">
      <PxButton
        titleButton="&:hover, &:focus"
        className="button button-default hover"
        textButton="Default"
      />
      <PxButton className="button button-primary hover" textButton="Default" />
      <PxButton
        className="button button-secondary hover"
        textButton="Secondary"
      />
      <PxButton className="button button-danger hover" textButton="Danger" />
    </section>
    <PxCreate />
  </section>
</template>

<script>
import PxButton from "@/components/PxButton";
import PxCreate from "@/components/PxCreate";

export default {
  name: "Buttons",
  components: {
    PxButton,
    PxCreate,
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  &__title {
    font-weight: 500;
    font-size: 24px;
    margin: 0 0 28px 0;
  }
  section {
    margin: 0 0 45px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    div:first-child {
      width: 300px;
    }
    &:last-child {
      margin: 0;
    }
  }
  .sizes,
  .actions,
  .actions-hover {
    .button-wrapper {
      width: 25%;
    }
  }
}
@media screen and(max-width: 768px) {
  .buttons {
    .sizes,
    .actions,
    .actions-hover {
      .button-wrapper {
        width: 50%;
      }
    }
  }
}

@media screen and(max-width: 420px) {
  .buttons {
    section {
      div {
        margin: 0 0 15px 0;
      }
    }
  }
}
</style>
