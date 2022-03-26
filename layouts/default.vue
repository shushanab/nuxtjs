<template>
  <v-app class="main__layout">
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "/components/Footer";
export default {
  name: "DefaultLayout",
  components: {
    Footer,
  },
  data() {
    return {
      fixed: false,
      items: [],
      title: "Vuetify.js",
    };
  },
};
</script>
<style lang="scss" scoped>
.main__layout {
  background-color: #eeeeee;
  max-width: 1280px;
  max-height: 850px;
  margin: 0 auto;
}
</style>
