<template>
  <section class="fonts wrapper">
    <h2 class="fonts__title">Noto Sans JP</h2>
    <h1>Title one</h1>
    <h2>Title two</h2>
    <h3>Title three</h3>
    <h4>Title four</h4>
    <h5>Title five</h5>
    <h6>Title six</h6>
  </section>
</template>

<script>
export default {
  name: "Fonts",
};
</script>

<style lang="scss" scoped>
.fonts {
  .fonts__title {
    font-size: 62px;
  }
  * {
    margin: 0 0 20px 0;
  }
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 45px;
  }
  h3 {
    font-size: 40px;
  }
  h4 {
    font-size: 35px;
  }
  h5 {
    font-size: 30px;
  }
  h6 {
    font-size: 25px;
  }
}
</style>
