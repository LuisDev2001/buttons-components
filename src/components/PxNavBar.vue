<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/fonts">Fonts</router-link>
      </li>
      <li class="navbar__item">
        <router-link to="/buttons">Buttons</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "PxNavBar",
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/components/_PxNavBar.scss";
</style>
