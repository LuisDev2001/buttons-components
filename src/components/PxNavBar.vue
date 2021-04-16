<template>
  <nav class="navbar" ref="js_navbar">
    <div
      class="navbar__close"
      ref="buttonClose"
      @click="closeMenu($event)"
    ></div>
    <div
      class="navbar__menu"
      ref="burgerButton"
      @click="appearMenu($event)"
    ></div>

    <ul class="navbar__list">
      <li
        class="navbar__item"
        v-for="(itemMenu, index) in listLinksMenu"
        :key="index"
      >
        <router-link
          :to="itemMenu.path"
          v-text="itemMenu.name"
          :class="itemMenu.class"
          @click="closeMenu($event)"
        ></router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  name: "PxNavBar",
  setup() {
    const buttonClose = ref(null);
    const burgerButton = ref(null);
    const listLinksMenu = ref(null);

    onMounted(() => {
      let objLinks = [
        {
          path: "/",
          name: "Home",
          class: "i-home",
        },
        {
          path: "/fonts",
          name: "Fonts",
          class: "i-font",
        },
        {
          path: "/buttons",
          name: "Buttons",
          class: "i-button",
        },
      ];
      listLinksMenu.value = objLinks;
    });

    const closeMenu = (event) => {
      const $navBar = event.target.parentNode;
      $navBar.classList.remove("show");

      if (event.target.tagName === "A") {
        const $navBarMenuLinks = event.target.parentNode.parentNode.parentNode;
        $navBarMenuLinks.classList.remove("show");
      }
    };

    const appearMenu = (event) => {
      const $navBar = event.target.parentNode;
      $navBar.classList.add("show");
    };

    return {
      buttonClose,
      burgerButton,
      closeMenu,
      appearMenu,
      listLinksMenu,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/components/_PxNavBar.scss";
</style>
